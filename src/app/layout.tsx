import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "职业 AI 敏感度分析器",
  description: "基于 AI 模型对中国职业进行 AI 替代风险评分的可视化工具",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
