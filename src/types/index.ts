export interface Occupation {
  job_name: string
  category: string
  description: string
  ai_score: number
  occupation_code: string
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
