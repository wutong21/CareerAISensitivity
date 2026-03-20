import type { Occupation, EducationLevel } from "@/types"

const CATEGORY_EDUCATION_MAP: Record<string, EducationLevel[]> = {
  "负责人": ["bachelor", "master"],
  "科学研究人员": ["master", "doctoral"],
  "工程技术人员": ["bachelor", "master"],
  "数字技术人员": ["bachelor", "master"],
  "农业技术人员": ["associate", "bachelor"],
  "医疗卫生人员": ["bachelor", "master", "doctoral"],
  "教学人员": ["bachelor", "master", "doctoral"],
  "法律专业人员": ["bachelor", "master"],
  "金融经济人员": ["bachelor", "master"],
  "金融服务人员": ["bachelor", "master"],
  "新闻出版人员": ["bachelor", "master"],
  "文化艺术人员": ["associate", "bachelor", "master"],
  "文化娱乐人员": ["associate", "bachelor"],
  "体育专业人员": ["associate", "bachelor"],
  "行政办事人员": ["high_school", "associate", "bachelor"],
  "安全消防人员": ["high_school", "associate"],
  "销售服务人员": ["high_school", "associate", "bachelor"],
  "住宿服务人员": ["no_degree", "high_school"],
  "餐饮服务人员": ["no_degree", "high_school", "associate"],
  "信息技术服务人员": ["associate", "bachelor", "master"],
  "居民服务人员": ["no_degree", "high_school", "associate"],
  "修理服务人员": ["no_degree", "high_school", "associate"],
  "交通运输人员": ["no_degree", "high_school", "associate"],
  "其他服务人员": ["high_school", "associate", "bachelor"],
  "农林牧渔人员": ["no_degree", "high_school"],
  "生产制造人员": ["no_degree", "high_school", "associate"],
  "建筑施工人员": ["no_degree", "high_school", "associate"],
  "运输操作人员": ["high_school", "associate"],
  "军人": ["high_school", "associate"],
  "其他人员": ["high_school", "associate", "bachelor"],
}

const CATEGORY_SALARY_RANGE: Record<string, [number, number]> = {
  "负责人": [15000, 35000],
  "科学研究人员": [12000, 25000],
  "工程技术人员": [10000, 20000],
  "数字技术人员": [12000, 28000],
  "农业技术人员": [5000, 10000],
  "医疗卫生人员": [8000, 18000],
  "教学人员": [6000, 15000],
  "法律专业人员": [8000, 20000],
  "金融经济人员": [10000, 25000],
  "金融服务人员": [8000, 18000],
  "新闻出版人员": [6000, 15000],
  "文化艺术人员": [5000, 12000],
  "文化娱乐人员": [5000, 12000],
  "体育专业人员": [6000, 15000],
  "行政办事人员": [5000, 10000],
  "安全消防人员": [5000, 10000],
  "销售服务人员": [5000, 12000],
  "住宿服务人员": [3500, 6000],
  "餐饮服务人员": [3500, 7000],
  "信息技术服务人员": [8000, 18000],
  "居民服务人员": [3500, 7000],
  "修理服务人员": [4000, 8000],
  "交通运输人员": [5000, 10000],
  "其他服务人员": [5000, 10000],
  "农林牧渔人员": [3000, 6000],
  "生产制造人员": [5000, 9000],
  "建筑施工人员": [5000, 10000],
  "运输操作人员": [5000, 10000],
  "军人": [6000, 10000],
  "其他人员": [4000, 8000],
}

const CATEGORY_EMPLOYMENT_RANGE: Record<string, [number, number]> = {
  "负责人": [500000, 2000000],
  "科学研究人员": [1500000, 3000000],
  "工程技术人员": [30000000, 50000000],
  "数字技术人员": [8000000, 15000000],
  "农业技术人员": [3000000, 8000000],
  "医疗卫生人员": [15000000, 20000000],
  "教学人员": [25000000, 35000000],
  "法律专业人员": [1000000, 3000000],
  "金融经济人员": [8000000, 15000000],
  "金融服务人员": [5000000, 10000000],
  "新闻出版人员": [3000000, 6000000],
  "文化艺术人员": [5000000, 10000000],
  "文化娱乐人员": [3000000, 8000000],
  "体育专业人员": [500000, 1500000],
  "行政办事人员": [20000000, 40000000],
  "安全消防人员": [3000000, 6000000],
  "销售服务人员": [30000000, 60000000],
  "住宿服务人员": [5000000, 10000000],
  "餐饮服务人员": [20000000, 40000000],
  "信息技术服务人员": [8000000, 15000000],
  "居民服务人员": [15000000, 30000000],
  "修理服务人员": [5000000, 10000000],
  "交通运输人员": [30000000, 50000000],
  "其他服务人员": [5000000, 10000000],
  "农林牧渔人员": [150000000, 250000000],
  "生产制造人员": [100000000, 150000000],
  "建筑施工人员": [50000000, 80000000],
  "运输操作人员": [20000000, 40000000],
  "军人": [2000000, 3000000],
  "其他人员": [1000000, 5000000],
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
  const salaryRange = CATEGORY_SALARY_RANGE[category] || [4000, 8000]
  const employmentRange = CATEGORY_EMPLOYMENT_RANGE[category] || [100000, 500000]
  
  const aiScoreFactor = occupation.ai_score / 50
  
  const baseSalary = randomInRange(salaryRange[0], salaryRange[1])
  const salary = Math.round(baseSalary * (0.9 + aiScoreFactor * 0.2))
  
  const baseEmployment = randomInRange(employmentRange[0], employmentRange[1])
  const employment = Math.round(baseEmployment * (0.8 + Math.random() * 0.4))
  
  const outlookBase = 100 - occupation.ai_score + randomInRange(-10, 10)
  const outlook = Math.max(-25, Math.min(40, outlookBase))
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
