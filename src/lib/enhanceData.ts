import type { Occupation, EducationLevel } from "@/types"

const CATEGORY_EDUCATION_MAP: Record<string, EducationLevel[]> = {
  "负责人": ["bachelor", "master"],
  "科学研究": ["master", "doctoral"],
  "工程技术人员": ["bachelor", "master"],
  "农业技术人员": ["associate", "bachelor"],
  "医疗卫生": ["bachelor", "master", "doctoral"],
  "教学人员": ["bachelor", "master", "doctoral"],
  "法律专业人员": ["bachelor", "master"],
  "经济专业人员": ["bachelor", "master"],
  "金融专业人员": ["bachelor", "master"],
  "新闻出版": ["bachelor", "master"],
  "文化艺术": ["associate", "bachelor", "master"],
  "体育专业人员": ["associate", "bachelor"],
  "办事人员": ["high_school", "associate", "bachelor"],
  "商业服务业": ["no_degree", "high_school", "associate"],
  "农林牧渔": ["no_degree", "high_school"],
  "生产制造": ["no_degree", "high_school", "associate"],
  "运输物流": ["no_degree", "high_school", "associate"],
  "建筑施工": ["no_degree", "high_school"],
  "军人": ["high_school", "associate"],
}

const CATEGORY_SALARY_RANGE: Record<string, [number, number]> = {
  "负责人": [10000, 25000],
  "科学研究": [8000, 20000],
  "工程技术人员": [6000, 16000],
  "农业技术人员": [4000, 8000],
  "医疗卫生": [6000, 16000],
  "教学人员": [5000, 12000],
  "法律专业人员": [6000, 16000],
  "经济专业人员": [6000, 15000],
  "金融专业人员": [8000, 20000],
  "新闻出版": [5000, 12000],
  "文化艺术": [4000, 10000],
  "体育专业人员": [5000, 12000],
  "办事人员": [3000, 8000],
  "商业服务业": [2500, 6500],
  "农林牧渔": [2000, 5000],
  "生产制造": [3000, 7500],
  "运输物流": [3500, 8500],
  "建筑施工": [3500, 10000],
  "军人": [4000, 8000],
}

const CATEGORY_EMPLOYMENT_RANGE: Record<string, [number, number]> = {
  "负责人": [100000, 500000],
  "科学研究": [50000, 200000],
  "工程技术人员": [500000, 2000000],
  "农业技术人员": [100000, 500000],
  "医疗卫生": [800000, 2000000],
  "教学人员": [1500000, 3000000],
  "法律专业人员": [300000, 800000],
  "经济专业人员": [200000, 600000],
  "金融专业人员": [400000, 1000000],
  "新闻出版": [200000, 500000],
  "文化艺术": [300000, 800000],
  "体育专业人员": [50000, 200000],
  "办事人员": [2000000, 5000000],
  "商业服务业": [5000000, 15000000],
  "农林牧渔": [10000000, 30000000],
  "生产制造": [8000000, 20000000],
  "运输物流": [2000000, 5000000],
  "建筑施工": [3000000, 8000000],
  "军人": [2000000, 3000000],
}

function randomInRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

const OUTLOOK_DESCRIPTIONS = [
  "快速增长",
  "稳定增长", 
  "缓慢增长",
  "基本稳定",
  "略有下降",
  "持续下降"
]

export function enhanceOccupation(occupation: Occupation): Occupation {
  const category = occupation.category
  
  const educationOptions = CATEGORY_EDUCATION_MAP[category] || ["high_school", "associate", "bachelor"]
  const salaryRange = CATEGORY_SALARY_RANGE[category] || [30000, 80000]
  const employmentRange = CATEGORY_EMPLOYMENT_RANGE[category] || [100000, 500000]
  
  const aiScoreFactor = occupation.ai_score / 50
  
  const baseSalary = randomInRange(salaryRange[0], salaryRange[1])
  const salary = Math.round(baseSalary * (0.8 + aiScoreFactor * 0.4))
  
  const baseEmployment = randomInRange(employmentRange[0], employmentRange[1])
  const employment = Math.round(baseEmployment * (0.5 + Math.random()))
  
  const outlookBase = 100 - occupation.ai_score + randomInRange(-15, 15)
  const outlook = Math.max(-30, Math.min(50, outlookBase))
  const outlookIndex = outlook > 20 ? 0 : outlook > 10 ? 1 : outlook > 0 ? 2 : outlook > -10 ? 3 : outlook > -20 ? 4 : 5
  const outlook_desc = OUTLOOK_DESCRIPTIONS[outlookIndex]
  
  return {
    ...occupation,
    education: pickRandom(educationOptions),
    median_salary: salary,
    employment,
    outlook,
    outlook_desc
  }
}

export function enhanceOccupations(occupations: Occupation[]): Occupation[] {
  return occupations.map(enhanceOccupation)
}
