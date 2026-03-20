import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getScoreColorRGB(score: number): [number, number, number] {
  const t = Math.max(0, Math.min(100, score)) / 100
  let r, g, b
  if (t < 0.5) {
    const s = t / 0.5
    r = Math.round(50 + s * 180)
    g = Math.round(160 - s * 10)
    b = Math.round(50 - s * 20)
  } else {
    const s = (t - 0.5) / 0.5
    r = Math.round(230 + s * 25)
    g = Math.round(150 - s * 110)
    b = Math.round(30 - s * 10)
  }
  return [r, g, b]
}

export function getScoreColor(score: number, alpha: number = 1): string {
  const [r, g, b] = getScoreColorRGB(score)
  return `rgba(${r},${g},${b},${alpha})`
}

export function getScoreLabel(score: number): string {
  if (score >= 80) return "极高风险"
  if (score >= 60) return "高风险"
  if (score >= 40) return "中等风险"
  if (score >= 20) return "低风险"
  return "极低风险"
}

export function formatNumber(n: number): string {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + "M"
  if (n >= 1000) return Math.round(n / 1000) + "K"
  return n.toLocaleString()
}

export function formatPay(n: number): string {
  if (n >= 10000) {
    return "¥" + (n / 10000).toFixed(1) + "万"
  }
  return "¥" + n.toLocaleString()
}

export function formatMonthlyPay(n: number): string {
  if (n >= 10000) {
    return "¥" + (n / 10000).toFixed(1) + "万/月"
  }
  return "¥" + n.toLocaleString() + "/月"
}
