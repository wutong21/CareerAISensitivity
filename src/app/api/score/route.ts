import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { jobName, description } = await request.json()

    if (!jobName) {
      return NextResponse.json(
        { error: "职业名称不能为空" },
        { status: 400 }
      )
    }

    const prompt = `请对以下中国职业进行 AI 替代风险评分（0-100 分，分数越高代表越容易被 AI 替代）：

职业名称：${jobName}
${description ? `职业描述：${description}` : ""}

评分维度：
1. 任务重复性（重复性越高越容易被替代）
2. 创造性需求（创造性越低越容易被替代）
3. 社交互动需求（社交需求越低越容易被替代）

请只返回一个 JSON 对象，格式如下：
{
  "score": 数字（0-100）,
  "reason": "评分理由简述"
}`

    const response = await fetch(
      "https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.DASHSCOPE_API_KEY}`,
        },
        body: JSON.stringify({
          model: "qwen3.5-35b-a3b",
          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
          temperature: 0.3,
        }),
      }
    )

    if (!response.ok) {
      throw new Error("API 调用失败")
    }

    const data = await response.json()
    const content = data.choices?.[0]?.message?.content || "{}"
    
    // 解析 AI 返回的 JSON
    let result
    try {
      result = JSON.parse(content)
    } catch {
      // 如果解析失败，尝试从文本中提取分数
      const scoreMatch = content.match(/"score"\s*:\s*(\d+)/)
      result = {
        score: scoreMatch ? parseInt(scoreMatch[1]) : 50,
        reason: content,
      }
    }

    return NextResponse.json({
      score: Math.min(100, Math.max(0, result.score)),
      reason: result.reason,
    })
  } catch (error) {
    console.error("评分 API 错误:", error)
    return NextResponse.json(
      { error: "评分失败，请稍后重试" },
      { status: 500 }
    )
  }
}
