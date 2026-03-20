"use client"

import React, { useMemo, useRef, useEffect } from "react"
import { occupations } from "@/data/occupations"
import { getScoreColor, getScoreColorRGB, formatNumber } from "@/lib/utils"
import type { EducationLevel } from "@/types"
import { EDUCATION_LABELS } from "@/types"

interface SidebarProps {
  minScore: number
  maxScore: number
  onRangeChange: (min: number, max: number) => void
}

export function Sidebar({ minScore, maxScore, onRangeChange }: SidebarProps) {
  const gradientCanvasRef = useRef<HTMLCanvasElement>(null)

  const filteredOccupations = useMemo(() => {
    return occupations.filter(o => o.ai_score >= minScore && o.ai_score <= maxScore)
  }, [minScore, maxScore])

  const categories = useMemo(() => {
    const catMap = new Map<string, { count: number; totalScore: number; totalEmployment: number }>()
    filteredOccupations.forEach(o => {
      const existing = catMap.get(o.category) || { count: 0, totalScore: 0, totalEmployment: 0 }
      catMap.set(o.category, { 
        count: existing.count + 1, 
        totalScore: existing.totalScore + o.ai_score,
        totalEmployment: existing.totalEmployment + (o.employment || 0)
      })
    })
    return Array.from(catMap.entries())
      .map(([name, data]) => ({ 
        name, 
        count: data.count, 
        avgScore: Math.round(data.totalScore / data.count),
        employment: data.totalEmployment
      }))
      .sort((a, b) => b.employment - a.employment)
      .slice(0, 8)
  }, [filteredOccupations])

  const stats = useMemo(() => {
    const total = filteredOccupations.length
    const totalEmployment = filteredOccupations.reduce((sum, o) => sum + (o.employment || 0), 0)
    const avgScore = total > 0 
      ? Math.round(filteredOccupations.reduce((sum, o) => sum + o.ai_score, 0) / total)
      : 0
    
    const weightedAvgScore = totalEmployment > 0
      ? Math.round(filteredOccupations.reduce((sum, o) => sum + o.ai_score * (o.employment || 0), 0) / totalEmployment)
      : 0
    
    const tiers = [
      { name: "极低风险", min: 0, max: 19, color: "rgba(68,159,48,1)" },
      { name: "低风险", min: 20, max: 39, color: "rgba(122,156,42,1)" },
      { name: "中等风险", min: 40, max: 59, color: "rgba(194,152,34,1)" },
      { name: "高风险", min: 60, max: 79, color: "rgba(238,117,27,1)" },
      { name: "极高风险", min: 80, max: 100, color: "rgba(250,62,22,1)" }
    ]

    const tierCounts = tiers.map((tier) => {
      const tierOccupations = filteredOccupations.filter(o => 
        o.ai_score >= tier.min && o.ai_score <= tier.max
      )
      const count = tierOccupations.length
      const employment = tierOccupations.reduce((sum, o) => sum + (o.employment || 0), 0)
      const pct = totalEmployment > 0 ? Math.round(employment / totalEmployment * 100) : 0
      return { ...tier, count, employment, pct }
    })

    const educationOrder: EducationLevel[] = ["no_degree", "high_school", "associate", "bachelor", "master", "doctoral"]
    const exposureByEducation = educationOrder.map(edu => {
      const eduOccupations = filteredOccupations.filter(o => o.education === edu)
      const totalEmp = eduOccupations.reduce((sum, o) => sum + (o.employment || 0), 0)
      const weightedScore = totalEmp > 0
        ? Math.round(eduOccupations.reduce((sum, o) => sum + o.ai_score * (o.employment || 0), 0) / totalEmp)
        : 0
      return { label: EDUCATION_LABELS[edu], avgScore: weightedScore, employment: totalEmp }
    })

    const histogram = Array.from({ length: 10 }, (_, i) => {
      const bucketMin = i * 10
      const bucketMax = (i + 1) * 10
      const count = filteredOccupations.filter(o => {
        if (i === 9) {
          return o.ai_score >= bucketMin && o.ai_score <= bucketMax
        }
        return o.ai_score >= bucketMin && o.ai_score < bucketMax
      }).length
      return { bucket: i, count, min: bucketMin, max: bucketMax }
    })
    const maxHistCount = Math.max(...histogram.map(h => h.count), 1)

    return { 
      total, 
      totalEmployment,
      avgScore, 
      weightedAvgScore,
      tierCounts, 
      histogram, 
      maxHistCount, 
      categories,
      exposureByEducation
    }
  }, [filteredOccupations, categories])

  useEffect(() => {
    const canvas = gradientCanvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const width = canvas.width
    const height = canvas.height
    const imageData = ctx.createImageData(width, height)

    for (let x = 0; x < width; x++) {
      const score = (x / width) * 100
      const [r, g, b] = getScoreColorRGB(score)
      for (let y = 0; y < height; y++) {
        const idx = (y * width + x) * 4
        imageData.data[idx] = r
        imageData.data[idx + 1] = g
        imageData.data[idx + 2] = b
        imageData.data[idx + 3] = 255
      }
    }
    ctx.putImageData(imageData, 0, 0)
  }, [])

  return (
    <div id="sidebar">
      <div>
        <h1>职业 AI 敏感度分析</h1>
        <div className="subtitle">
          {formatNumber(stats.totalEmployment)} 从业人员 · {occupations.length} 个职业
          <br />
          数据来源：中国国家职业分类标准
        </div>
      </div>

      <div className="stat-section">
        <h3>总从业人员</h3>
        <div className="stat-big">{formatNumber(stats.totalEmployment)}</div>
        <div className="stat-label">加权平均风险评分: {stats.weightedAvgScore}</div>
      </div>

      <div className="stat-section">
        <h3>筛选后职业数</h3>
        <div className="stat-big">{stats.total}</div>
        <div className="stat-label">共 {occupations.length} 个职业</div>
      </div>

      <div className="stat-section">
        <h3>平均 AI 评分</h3>
        <div className="stat-big">
          <span style={{ color: getScoreColor(stats.avgScore) }}>{stats.avgScore}</span>
        </div>
        <div className="stat-label">0-100 分制，分数越高风险越大</div>
      </div>

      <div className="stat-section">
        <h3>评分分布</h3>
        <div className="histogram">
          {stats.histogram.map((h, i) => (
            <div
              key={i}
              className="bar"
              style={{
                height: `${Math.max(2, (h.count / stats.maxHistCount) * 100)}%`,
                background: getScoreColor((h.min + h.max) / 2)
              }}
              title={`${h.min}-${h.max}: ${h.count} 个职业`}
            />
          ))}
        </div>
        <div className="hist-labels">
          <span>0</span>
          <span>50</span>
          <span>100</span>
        </div>
      </div>

      <div className="stat-section">
        <h3>风险等级分布（按就业人数加权）</h3>
        <div className="tier-bar">
          {stats.tierCounts.map((tier, i) => (
            <div key={i} className="tier-row">
              <div className="tier-color" style={{ background: tier.color }} />
              <span className="tier-name">{tier.name}</span>
              <span className="tier-jobs">{formatNumber(tier.employment)}</span>
              <span className="tier-pct">{tier.pct}%</span>
            </div>
          ))}
        </div>
      </div>

      <div className="stat-section">
        <h3>按教育水平的风险评分</h3>
        <div className="hbar-chart">
          {stats.exposureByEducation.map((item, i) => (
            <div key={i} className="hbar-row">
              <span className="hbar-label" title={item.label}>
                {item.label.length > 4 ? item.label.slice(0, 4) : item.label}
              </span>
              <div className="hbar-track">
                <div
                  className="hbar-fill"
                  style={{
                    width: `${item.avgScore}%`,
                    background: getScoreColor(item.avgScore)
                  }}
                />
              </div>
              <span className="hbar-val">{item.avgScore}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="stat-section">
        <h3>按职业类别分布</h3>
        <div className="hbar-chart">
          {stats.categories.map((cat, i) => (
            <div key={i} className="hbar-row">
              <span className="hbar-label" title={cat.name}>
                {cat.name.length > 6 ? cat.name.slice(0, 6) + "…" : cat.name}
              </span>
              <div className="hbar-track">
                <div
                  className="hbar-fill"
                  style={{
                    width: `${(cat.employment / stats.totalEmployment) * 100}%`,
                    background: getScoreColor(cat.avgScore)
                  }}
                />
              </div>
              <span className="hbar-val">{formatNumber(cat.employment)}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="stat-section">
        <h3>评分筛选</h3>
        <div className="score-slider">
          <div className="slider-track">
            <div
              className="slider-range"
              style={{
                left: `${minScore}%`,
                width: `${maxScore - minScore}%`
              }}
            />
            <div
              className="slider-thumb"
              style={{ left: `${minScore}%` }}
              onMouseDown={(e) => {
                const track = e.currentTarget.parentElement!
                const handleMove = (moveE: MouseEvent) => {
                  const rect = track.getBoundingClientRect()
                  const pct = Math.max(0, Math.min(100, ((moveE.clientX - rect.left) / rect.width) * 100))
                  const newMin = Math.min(pct, maxScore - 5)
                  onRangeChange(Math.round(newMin / 5) * 5, maxScore)
                }
                const handleUp = () => {
                  document.removeEventListener("mousemove", handleMove)
                  document.removeEventListener("mouseup", handleUp)
                }
                document.addEventListener("mousemove", handleMove)
                document.addEventListener("mouseup", handleUp)
              }}
            />
            <div
              className="slider-thumb"
              style={{ left: `${maxScore}%` }}
              onMouseDown={(e) => {
                const track = e.currentTarget.parentElement!
                const handleMove = (moveE: MouseEvent) => {
                  const rect = track.getBoundingClientRect()
                  const pct = Math.max(0, Math.min(100, ((moveE.clientX - rect.left) / rect.width) * 100))
                  const newMax = Math.max(pct, minScore + 5)
                  onRangeChange(minScore, Math.round(newMax / 5) * 5)
                }
                const handleUp = () => {
                  document.removeEventListener("mousemove", handleMove)
                  document.removeEventListener("mouseup", handleUp)
                }
                document.addEventListener("mousemove", handleMove)
                document.addEventListener("mouseup", handleUp)
              }}
            />
          </div>
          <div className="score-labels">
            <span>{minScore}</span>
            <span>{maxScore}</span>
          </div>
        </div>
      </div>

      <div className="gradient-legend">
        <span>低风险</span>
        <canvas ref={gradientCanvasRef} width={100} height={10} />
        <span>高风险</span>
      </div>
    </div>
  )
}
