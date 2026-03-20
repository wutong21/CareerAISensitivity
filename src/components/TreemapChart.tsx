"use client"

import React, { useRef, useEffect, useState, useCallback } from "react"
import { occupations } from "@/data/occupations"
import { getScoreColor, getScoreLabel, formatNumber } from "@/lib/utils"
import type { Occupation } from "@/types"
import { EDUCATION_LABELS } from "@/types"

interface TreemapChartProps {
  minScore: number
  maxScore: number
  onNodeClick?: (category: string) => void
  currentLevel?: "category" | "occupation"
  selectedCategory?: string
  onBackToCategories?: () => void
}

interface RectItem extends Occupation {
  rx: number
  ry: number
  rw: number
  rh: number
  value: number
  title: string
  exposure: number
}

function squarify(items: { value: number }[], x: number, y: number, w: number, h: number): { rx: number; ry: number; rw: number; rh: number; value: number }[] {
  if (items.length === 0) return []
  if (items.length === 1) {
    return [{ rx: x, ry: y, rw: w, rh: h, value: items[0].value }]
  }

  const total = items.reduce((s, d) => s + d.value, 0)
  if (total === 0) return []

  const results: { rx: number; ry: number; rw: number; rh: number; value: number }[] = []
  let remaining = [...items]
  let cx = x, cy = y, cw = w, ch = h

  while (remaining.length > 0) {
    const remTotal = remaining.reduce((s, d) => s + d.value, 0)
    const vertical = cw >= ch
    const side = vertical ? ch : cw

    let row = [remaining[0]]
    let rowSum = remaining[0].value

    for (let i = 1; i < remaining.length; i++) {
      const candidate = [...row, remaining[i]]
      const candidateSum = rowSum + remaining[i].value
      if (worstAspect(candidate, candidateSum, side, remTotal, vertical ? cw : ch) <
          worstAspect(row, rowSum, side, remTotal, vertical ? cw : ch)) {
        row = candidate
        rowSum = candidateSum
      } else {
        break
      }
    }

    const rowFraction = rowSum / remTotal
    const rowThickness = vertical ? cw * rowFraction : ch * rowFraction

    let offset = 0
    for (const item of row) {
      const itemFraction = item.value / rowSum
      const itemLength = side * itemFraction
      if (vertical) {
        results.push({ rx: cx, ry: cy + offset, rw: rowThickness, rh: itemLength, value: item.value })
      } else {
        results.push({ rx: cx + offset, ry: cy, rw: itemLength, rh: rowThickness, value: item.value })
      }
      offset += itemLength
    }

    if (vertical) {
      cx += rowThickness
      cw -= rowThickness
    } else {
      cy += rowThickness
      ch -= rowThickness
    }

    remaining = remaining.slice(row.length)
  }

  return results
}

function worstAspect(row: { value: number }[], rowSum: number, side: number, totalArea: number, availableExtent: number): number {
  const rowExtent = availableExtent * (rowSum / totalArea)
  if (rowExtent === 0) return Infinity
  let worst = 0
  for (const item of row) {
    const itemLen = side * (item.value / rowSum)
    if (itemLen === 0) continue
    const aspect = Math.max(rowExtent / itemLen, itemLen / rowExtent)
    if (aspect > worst) worst = aspect
  }
  return worst
}

export function TreemapChart({
  minScore,
  maxScore,
  onNodeClick,
  currentLevel = "category",
  selectedCategory,
  onBackToCategories
}: TreemapChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [rects, setRects] = useState<RectItem[]>([])
  const [hovered, setHovered] = useState<RectItem | null>(null)
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 })
  const [canvasSize, setCanvasSize] = useState({ w: 800, h: 600 })

  const filteredData = React.useMemo(() => {
    return occupations.filter(o => o.ai_score >= minScore && o.ai_score <= maxScore)
  }, [minScore, maxScore])

  const MARGIN = 12
  const GAP = 2

  const layout = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const sidebarW = 280
    const w = window.innerWidth - sidebarW
    const h = window.innerHeight

    const dpr = window.devicePixelRatio || 1
    canvas.width = w * dpr
    canvas.height = h * dpr
    canvas.style.width = w + "px"
    canvas.style.height = h + "px"
    setCanvasSize({ w, h })

    const tx = MARGIN
    const ty = MARGIN
    const tw = w - MARGIN * 2
    const th = h - MARGIN * 2

    let newRects: RectItem[] = []

    if (currentLevel === "occupation" && selectedCategory) {
      const categoryData = filteredData.filter(o => o.category === selectedCategory)
      const items = categoryData.map(d => ({ ...d, value: 1 }))
      const innerRects = squarify(items, tx, ty, tw, th)
      newRects = innerRects.map((r, i) => ({
        ...items[i],
        rx: r.rx,
        ry: r.ry,
        rw: r.rw,
        rh: r.rh,
        title: items[i].job_name,
        exposure: items[i].ai_score,
        value: 1
      }))
    } else {
      const byCategory: Record<string, Occupation[]> = {}
      for (const d of filteredData) {
        const cat = d.category
        if (!byCategory[cat]) byCategory[cat] = []
        byCategory[cat].push(d)
      }

      const categories = Object.keys(byCategory).map(cat => ({
        cat,
        items: byCategory[cat].sort((a, b) => (b.ai_score) - (a.ai_score)),
        value: byCategory[cat].length,
      })).sort((a, b) => b.value - a.value)

      const catRects = squarify(categories, tx, ty, tw, th)

      for (const cr of catRects) {
        const cat = categories.find(c => c.value === cr.value)
        if (!cat) continue
        const innerGap = GAP
        const items = cat.items.map(d => ({ ...d, value: 1 }))
        const innerRects = squarify(items,
          cr.rx + innerGap, cr.ry + innerGap,
          cr.rw - innerGap * 2, cr.rh - innerGap * 2
        )
        for (let i = 0; i < innerRects.length; i++) {
          const ir = innerRects[i]
          newRects.push({
            ...items[i],
            rx: ir.rx,
            ry: ir.ry,
            rw: ir.rw,
            rh: ir.rh,
            title: items[i].job_name,
            exposure: items[i].ai_score,
            value: 1
          })
        }
      }
    }

    setRects(newRects)
  }, [filteredData, currentLevel, selectedCategory])

  const draw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.fillStyle = "#0a0a0f"
    ctx.fillRect(0, 0, canvasSize.w, canvasSize.h)

    for (const r of rects) {
      const isHovered = r === hovered
      const g = GAP / 2
      const rx = r.rx + g
      const ry = r.ry + g
      const rw = r.rw - g * 2
      const rh = r.rh - g * 2

      if (rw <= 0 || rh <= 0) continue

      const fillAlpha = isHovered ? 0.85 : 0.55
      ctx.fillStyle = getScoreColor(r.exposure, fillAlpha)
      ctx.fillRect(rx, ry, rw, rh)

      if (isHovered) {
        ctx.strokeStyle = "#fff"
        ctx.lineWidth = 2
        ctx.strokeRect(rx, ry, rw, rh)
      }

      const minW = 50
      const minH = 24
      if (rw > minW && rh > minH) {
        ctx.save()
        ctx.beginPath()
        ctx.rect(rx + 4, ry + 2, rw - 8, rh - 4)
        ctx.clip()

        const fontSize = Math.min(13, Math.max(9, Math.min(rw / 10, rh / 3)))
        ctx.font = `500 ${fontSize}px -apple-system, system-ui, sans-serif`
        ctx.fillStyle = isHovered ? "#fff" : "rgba(255,255,255,0.9)"
        ctx.textBaseline = "top"
        ctx.fillText(r.title, rx + 6, ry + 5)

        if (rh > 36 && rw > 70) {
          const info = `${r.exposure}分 · ${getScoreLabel(r.exposure)}`
          ctx.font = `400 ${Math.max(8, fontSize - 2)}px -apple-system, system-ui, sans-serif`
          ctx.fillStyle = "rgba(255,255,255,0.55)"
          ctx.fillText(info, rx + 6, ry + 5 + fontSize + 3)
        }

        ctx.restore()
      }
    }
  }, [rects, hovered, canvasSize])

  useEffect(() => {
    layout()
    const handleResize = () => layout()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [layout])

  useEffect(() => {
    draw()
  }, [draw])

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const mx = e.clientX - rect.left
    const my = e.clientY - rect.top

    let found: RectItem | null = null
    for (let i = rects.length - 1; i >= 0; i--) {
      const r = rects[i]
      if (mx >= r.rx && mx < r.rx + r.rw && my >= r.ry && my < r.ry + r.rh) {
        found = r
        break
      }
    }

    setHovered(found)
    if (found) {
      setTooltipPos({ x: e.clientX, y: e.clientY })
      canvas.style.cursor = "pointer"
    } else {
      canvas.style.cursor = "default"
    }
  }

  const handleClick = () => {
    if (hovered && currentLevel === "category" && onNodeClick) {
      onNodeClick(hovered.category)
    }
  }

  return (
    <>
      <canvas
        ref={canvasRef}
        id="canvas"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHovered(null)}
        onClick={handleClick}
      />
      
      {currentLevel === "occupation" && (
        <div
          style={{
            position: "fixed",
            top: 16,
            left: 296,
            zIndex: 10,
            background: "rgba(18,18,26,0.9)",
            padding: "8px 16px",
            borderRadius: 8,
            border: "1px solid rgba(255,255,255,0.1)"
          }}
        >
          <span style={{ color: "#888894", fontSize: 12, marginRight: 12 }}>
            {selectedCategory}
          </span>
          <button
            onClick={onBackToCategories}
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "none",
              color: "#e0e0e8",
              padding: "4px 12px",
              borderRadius: 4,
              cursor: "pointer",
              fontSize: 12
            }}
          >
            返回全部
          </button>
        </div>
      )}

      <div
        id="tooltip"
        className={hovered ? "visible" : ""}
        style={{
          left: tooltipPos.x + 16,
          top: tooltipPos.y + 16,
        }}
      >
        {hovered && (
          <>
            <div className="tt-title">{hovered.title}</div>
            <div className="tt-exposure">
              <span style={{ color: getScoreColor(hovered.exposure), fontWeight: 600 }}>
                AI 评分: {hovered.exposure}/100
              </span>
              <div style={{ marginTop: 4, height: 4, background: "rgba(255,255,255,0.08)", borderRadius: 2 }}>
                <div style={{ height: "100%", width: `${hovered.exposure}%`, background: getScoreColor(hovered.exposure), borderRadius: 2 }} />
              </div>
            </div>
            <div className="tt-stats">
              <span className="label">风险等级</span>
              <span className="value">{getScoreLabel(hovered.exposure)}</span>
              <span className="label">职业类别</span>
              <span className="value">{hovered.category}</span>
              <span className="label">职业代码</span>
              <span className="value">{hovered.occupation_code}</span>
              <span className="label">从业人员</span>
              <span className="value">{hovered.employment ? formatNumber(hovered.employment) : "—"}</span>
              <span className="label">就业前景</span>
              <span className="value">
                {hovered.outlook != null ? `${hovered.outlook > 0 ? "+" : ""}${hovered.outlook}%` : "—"}
                {hovered.outlook_desc ? ` (${hovered.outlook_desc})` : ""}
              </span>
              <span className="label">学历要求</span>
              <span className="value">{hovered.education ? EDUCATION_LABELS[hovered.education] : "—"}</span>
            </div>
            {hovered.description && (
              <div className="tt-rationale">{hovered.description}</div>
            )}
          </>
        )}
      </div>
    </>
  )
}
