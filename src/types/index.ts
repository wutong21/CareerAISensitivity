export interface Occupation {
  job_name: string
  category: string
  description: string
  ai_score: number
  occupation_code: string
  employment?: number
  median_salary?: number
  education?: EducationLevel
  outlook?: number
  outlook_desc?: string
}

export interface TreemapNode {
  name: string
  value: number
  ai_score: number
  description?: string
  occupation_code?: string
  children?: TreemapNode[]
}

export interface CategoryGroup {
  category: string
  occupations: Occupation[]
}

export type EducationLevel = "no_degree" | "high_school" | "associate" | "bachelor" | "master" | "doctoral"

export const EDUCATION_LABELS: Record<EducationLevel, string> = {
  no_degree: "无学历",
  high_school: "高中",
  associate: "大专",
  bachelor: "本科",
  master: "硕士",
  doctoral: "博士"
}

export const SALARY_RANGES = [
  { label: "<3万", min: 0, max: 30000 },
  { label: "3-5万", min: 30000, max: 50000 },
  { label: "5-8万", min: 50000, max: 80000 },
  { label: "8-12万", min: 80000, max: 120000 },
  { label: "12万+", min: 120000, max: Infinity }
]
