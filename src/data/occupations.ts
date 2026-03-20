import type { Occupation } from "@/types"

export const occupations: Occupation[] = [
  // ========== 第一大类：党的机关、国家机关、群众团体和社会组织、企事业单位负责人 ==========
  {
    job_name: "中国共产党机关负责人",
    category: "负责人",
    description: "负责中国共产党机关的领导和管理",
    ai_score: 15,
    occupation_code: "1-01-00-01"
  },
  {
    job_name: "国家行政机关负责人",
    category: "负责人",
    description: "负责国家行政机关的领导和管理",
    ai_score: 18,
    occupation_code: "1-02-02-01"
  },
  {
    job_name: "人民法院负责人",
    category: "负责人",
    description: "负责人民法院的审判和管理工作",
    ai_score: 20,
    occupation_code: "1-02-05-01"
  },
  {
    job_name: "人民检察院负责人",
    category: "负责人",
    description: "负责人民检察院的检察工作",
    ai_score: 20,
    occupation_code: "1-02-05-02"
  },
  {
    job_name: "企业董事",
    category: "负责人",
    description: "负责企业重大决策和监督管理",
    ai_score: 25,
    occupation_code: "1-06-01-01"
  },
  {
    job_name: "企业经理",
    category: "负责人",
    description: "负责企业日常经营管理和决策",
    ai_score: 35,
    occupation_code: "1-06-01-02"
  },
  {
    job_name: "事业单位负责人",
    category: "负责人",
    description: "负责事业单位的管理和运营",
    ai_score: 28,
    occupation_code: "1-06-02-01"
  },
  {
    job_name: "社会团体负责人",
    category: "负责人",
    description: "负责社会团体的管理和活动组织",
    ai_score: 30,
    occupation_code: "1-04-02-01"
  },
  {
    job_name: "居民委员会负责人",
    category: "负责人",
    description: "负责社区居民自治组织的管理",
    ai_score: 32,
    occupation_code: "1-05-00-01"
  },
  {
    job_name: "村民委员会负责人",
    category: "负责人",
    description: "负责村民自治组织的管理",
    ai_score: 30,
    occupation_code: "1-05-00-02"
  },

  // ========== 第二大类：专业技术人员 ==========
  // 科学研究人员
  {
    job_name: "数学研究人员",
    category: "科学研究",
    description: "从事数学理论和应用研究",
    ai_score: 55,
    occupation_code: "2-01-06-01"
  },
  {
    job_name: "物理学研究人员",
    category: "科学研究",
    description: "从事物理学理论和实验研究",
    ai_score: 50,
    occupation_code: "2-01-06-02"
  },
  {
    job_name: "化学研究人员",
    category: "科学研究",
    description: "从事化学理论和应用研究",
    ai_score: 52,
    occupation_code: "2-01-06-03"
  },
  {
    job_name: "生物学研究人员",
    category: "科学研究",
    description: "从事生物学理论和实验研究",
    ai_score: 48,
    occupation_code: "2-01-06-05"
  },
  {
    job_name: "医学研究人员",
    category: "科学研究",
    description: "从事医学基础和应用研究",
    ai_score: 45,
    occupation_code: "2-01-08-01"
  },
  {
    job_name: "经济学研究人员",
    category: "科学研究",
    description: "从事经济学理论和应用研究",
    ai_score: 60,
    occupation_code: "2-01-02-01"
  },
  {
    job_name: "法学研究人员",
    category: "科学研究",
    description: "从事法学理论和应用研究",
    ai_score: 45,
    occupation_code: "2-01-03-01"
  },
  
  // 工程技术人员
  {
    job_name: "地质勘探工程技术人员",
    category: "工程技术",
    description: "从事地质勘探和资源调查工作",
    ai_score: 55,
    occupation_code: "2-02-01-01"
  },
  {
    job_name: "测绘工程技术人员",
    category: "工程技术",
    description: "从事大地测量和工程测量工作",
    ai_score: 65,
    occupation_code: "2-02-02-01"
  },
  {
    job_name: "矿山工程技术人员",
    category: "工程技术",
    description: "从事矿山开采和设计工作",
    ai_score: 58,
    occupation_code: "2-02-03-01"
  },
  {
    job_name: "石油天然气工程技术人员",
    category: "工程技术",
    description: "从事石油天然气开采和储运工作",
    ai_score: 55,
    occupation_code: "2-02-04-01"
  },
  {
    job_name: "冶金工程技术人员",
    category: "工程技术",
    description: "从事金属冶炼和加工工作",
    ai_score: 60,
    occupation_code: "2-02-05-01"
  },
  {
    job_name: "化工工程技术人员",
    category: "工程技术",
    description: "从事化工产品设计和生产工作",
    ai_score: 58,
    occupation_code: "2-02-06-01"
  },
  {
    job_name: "机械设计工程技术人员",
    category: "工程技术",
    description: "从事机械设备设计和开发工作",
    ai_score: 62,
    occupation_code: "2-02-07-01"
  },
  {
    job_name: "机械制造工程技术人员",
    category: "工程技术",
    description: "从事机械制造工艺和管理工作",
    ai_score: 65,
    occupation_code: "2-02-07-02"
  },
  {
    job_name: "汽车工程技术人员",
    category: "工程技术",
    description: "从事汽车设计和研发工作",
    ai_score: 60,
    occupation_code: "2-02-07-11"
  },
  {
    job_name: "船舶工程技术人员",
    category: "工程技术",
    description: "从事船舶设计和制造工作",
    ai_score: 58,
    occupation_code: "2-02-07-12"
  },
  {
    job_name: "航空工程技术人员",
    category: "工程技术",
    description: "从事飞行器设计和制造工作",
    ai_score: 52,
    occupation_code: "2-02-08-01"
  },
  {
    job_name: "电子工程技术人员",
    category: "工程技术",
    description: "从事电子元器件和设备设计工作",
    ai_score: 65,
    occupation_code: "2-02-09-01"
  },
  {
    job_name: "计算机硬件工程技术人员",
    category: "信息技术",
    description: "从事计算机硬件设计和开发工作",
    ai_score: 68,
    occupation_code: "2-02-10-02"
  },
  {
    job_name: "计算机软件工程技术人员",
    category: "信息技术",
    description: "从事软件设计和开发工作",
    ai_score: 75,
    occupation_code: "2-02-10-03"
  },
  {
    job_name: "计算机网络工程技术人员",
    category: "信息技术",
    description: "从事网络系统设计和运维工作",
    ai_score: 65,
    occupation_code: "2-02-10-04"
  },
  {
    job_name: "信息系统分析工程技术人员",
    category: "信息技术",
    description: "从事信息系统分析和设计工作",
    ai_score: 70,
    occupation_code: "2-02-10-05"
  },
  {
    job_name: "信息安全工程技术人员",
    category: "信息技术",
    description: "从事信息安全防护和管理工作",
    ai_score: 62,
    occupation_code: "2-02-10-07"
  },
  {
    job_name: "嵌入式系统设计工程技术人员",
    category: "信息技术",
    description: "从事嵌入式系统设计和开发工作",
    ai_score: 70,
    occupation_code: "2-02-10-06"
  },
  {
    job_name: "电气工程技术人员",
    category: "工程技术",
    description: "从事电气系统设计和维护工作",
    ai_score: 58,
    occupation_code: "2-02-11-01"
  },
  {
    job_name: "电力工程技术人员",
    category: "工程技术",
    description: "从事电力系统设计和运维工作",
    ai_score: 55,
    occupation_code: "2-02-12-01"
  },
  {
    job_name: "建筑工程技术人员",
    category: "工程技术",
    description: "从事建筑设计和施工管理工作",
    ai_score: 55,
    occupation_code: "2-02-18-01"
  },
  {
    job_name: "土木建筑工程技术人员",
    category: "工程技术",
    description: "从事土木工程设计和施工工作",
    ai_score: 52,
    occupation_code: "2-02-18-02"
  },
  {
    job_name: "水利工程技术人员",
    category: "工程技术",
    description: "从事水利工程设计和管理",
    ai_score: 50,
    occupation_code: "2-02-21-01"
  },
  {
    job_name: "海洋工程技术人员",
    category: "工程技术",
    description: "从事海洋资源开发和保护工作",
    ai_score: 48,
    occupation_code: "2-02-22-01"
  },
  {
    job_name: "纺织工程技术人员",
    category: "工程技术",
    description: "从事纺织工艺和产品设计工作",
    ai_score: 60,
    occupation_code: "2-02-23-01"
  },
  {
    job_name: "食品工程技术人员",
    category: "工程技术",
    description: "从事食品加工和质量控制工作",
    ai_score: 55,
    occupation_code: "2-02-24-01"
  },
  {
    job_name: "气象工程技术人员",
    category: "工程技术",
    description: "从事气象观测和预报工作",
    ai_score: 68,
    occupation_code: "2-02-25-01"
  },
  {
    job_name: "环境保护工程技术人员",
    category: "工程技术",
    description: "从事环境监测和污染防治工作",
    ai_score: 55,
    occupation_code: "2-02-27-01"
  },
  {
    job_name: "安全工程技术人员",
    category: "工程技术",
    description: "从事安全生产管理和评价工作",
    ai_score: 52,
    occupation_code: "2-02-28-01"
  },
  {
    job_name: "标准化工程技术人员",
    category: "工程技术",
    description: "从事标准制定和管理工作",
    ai_score: 60,
    occupation_code: "2-02-29-01"
  },
  {
    job_name: "质量管理工程技术人员",
    category: "工程技术",
    description: "从事质量管理和控制工作",
    ai_score: 58,
    occupation_code: "2-02-29-03"
  },
  {
    job_name: "工业工程技术人员",
    category: "工程技术",
    description: "从事生产系统优化和管理工作",
    ai_score: 62,
    occupation_code: "2-02-30-01"
  },
  {
    job_name: "物流工程技术人员",
    category: "工程技术",
    description: "从事物流系统设计和优化工作",
    ai_score: 65,
    occupation_code: "2-02-30-02"
  },
  {
    job_name: "人工智能工程技术人员",
    category: "信息技术",
    description: "从事AI算法研发和模型训练工作",
    ai_score: 70,
    occupation_code: "2-02-38-01"
  },
  {
    job_name: "物联网工程技术人员",
    category: "信息技术",
    description: "从事物联网系统设计和开发工作",
    ai_score: 68,
    occupation_code: "2-02-38-02"
  },
  {
    job_name: "大数据工程技术人员",
    category: "信息技术",
    description: "从事大数据处理和分析工作",
    ai_score: 72,
    occupation_code: "2-02-38-03"
  },
  {
    job_name: "云计算工程技术人员",
    category: "信息技术",
    description: "从事云计算平台设计和运维工作",
    ai_score: 68,
    occupation_code: "2-02-38-04"
  },
  {
    job_name: "智能制造工程技术人员",
    category: "工程技术",
    description: "从事智能制造系统设计和实施工作",
    ai_score: 65,
    occupation_code: "2-02-38-05"
  },
  {
    job_name: "工业互联网工程技术人员",
    category: "信息技术",
    description: "从事工业互联网平台开发工作",
    ai_score: 68,
    occupation_code: "2-02-38-06"
  },
  {
    job_name: "虚拟现实工程技术人员",
    category: "信息技术",
    description: "从事VR/AR系统开发工作",
    ai_score: 72,
    occupation_code: "2-02-38-07"
  },
  {
    job_name: "区块链工程技术人员",
    category: "信息技术",
    description: "从事区块链系统开发工作",
    ai_score: 70,
    occupation_code: "2-02-38-08"
  },
  {
    job_name: "集成电路工程技术人员",
    category: "信息技术",
    description: "从事集成电路设计和开发工作",
    ai_score: 65,
    occupation_code: "2-02-38-09"
  },
  {
    job_name: "机器人工程技术人员",
    category: "工程技术",
    description: "从事机器人系统设计和开发工作",
    ai_score: 62,
    occupation_code: "2-02-38-10"
  },
  {
    job_name: "增材制造工程技术人员",
    category: "工程技术",
    description: "从事3D打印技术研发工作",
    ai_score: 58,
    occupation_code: "2-02-38-11"
  },
  {
    job_name: "数据安全工程技术人员",
    category: "信息技术",
    description: "从事数据安全防护工作",
    ai_score: 65,
    occupation_code: "2-02-38-12"
  },

  // 农业技术人员
  {
    job_name: "土壤肥料技术人员",
    category: "农业技术",
    description: "从事土壤改良和肥料应用工作",
    ai_score: 55,
    occupation_code: "2-03-01-01"
  },
  {
    job_name: "农业技术指导人员",
    category: "农业技术",
    description: "从事农业技术推广和指导工作",
    ai_score: 50,
    occupation_code: "2-03-02-01"
  },
  {
    job_name: "植物保护技术人员",
    category: "农业技术",
    description: "从事植物病虫害防治工作",
    ai_score: 52,
    occupation_code: "2-03-03-01"
  },
  {
    job_name: "园艺技术人员",
    category: "农业技术",
    description: "从事园艺作物栽培和管理",
    ai_score: 48,
    occupation_code: "2-03-04-01"
  },
  {
    job_name: "兽医",
    category: "农业技术",
    description: "从事动物疾病诊断和治疗",
    ai_score: 42,
    occupation_code: "2-03-06-01"
  },
  {
    job_name: "宠物医师",
    category: "农业技术",
    description: "从事宠物疾病诊疗工作",
    ai_score: 35,
    occupation_code: "2-03-06-03"
  },
  {
    job_name: "畜牧技术人员",
    category: "农业技术",
    description: "从事畜禽饲养管理和技术指导",
    ai_score: 48,
    occupation_code: "2-03-07-01"
  },
  {
    job_name: "水产技术人员",
    category: "农业技术",
    description: "从事水产养殖技术指导",
    ai_score: 45,
    occupation_code: "2-03-08-01"
  },

  // 卫生专业技术人员
  {
    job_name: "内科医师",
    category: "医疗卫生",
    description: "从事内科疾病诊断和治疗",
    ai_score: 35,
    occupation_code: "2-05-01-01"
  },
  {
    job_name: "外科医师",
    category: "医疗卫生",
    description: "从事外科手术治疗",
    ai_score: 28,
    occupation_code: "2-05-01-02"
  },
  {
    job_name: "妇产科医师",
    category: "医疗卫生",
    description: "从事妇产科疾病诊疗",
    ai_score: 30,
    occupation_code: "2-05-01-04"
  },
  {
    job_name: "儿科医师",
    category: "医疗卫生",
    description: "从事儿童疾病诊疗",
    ai_score: 32,
    occupation_code: "2-05-01-03"
  },
  {
    job_name: "眼科医师",
    category: "医疗卫生",
    description: "从事眼科疾病诊疗",
    ai_score: 35,
    occupation_code: "2-05-01-05"
  },
  {
    job_name: "口腔科医师",
    category: "医疗卫生",
    description: "从事口腔疾病诊疗",
    ai_score: 30,
    occupation_code: "2-05-01-07"
  },
  {
    job_name: "精神科医师",
    category: "医疗卫生",
    description: "从事精神疾病诊疗",
    ai_score: 25,
    occupation_code: "2-05-01-09"
  },
  {
    job_name: "中医医师",
    category: "医疗卫生",
    description: "从事中医诊疗工作",
    ai_score: 22,
    occupation_code: "2-05-02-01"
  },
  {
    job_name: "针灸医师",
    category: "医疗卫生",
    description: "从事针灸治疗工作",
    ai_score: 25,
    occupation_code: "2-05-02-10"
  },
  {
    job_name: "全科医师",
    category: "医疗卫生",
    description: "从事全科医疗工作",
    ai_score: 38,
    occupation_code: "2-05-01-19"
  },
  {
    job_name: "疾病控制医师",
    category: "医疗卫生",
    description: "从事疾病预防控制工作",
    ai_score: 45,
    occupation_code: "2-05-05-01"
  },
  {
    job_name: "药师",
    category: "医疗卫生",
    description: "从事药品调配和用药指导",
    ai_score: 50,
    occupation_code: "2-05-06-01"
  },
  {
    job_name: "临床检验技师",
    category: "医疗卫生",
    description: "从事临床检验工作",
    ai_score: 65,
    occupation_code: "2-05-07-04"
  },
  {
    job_name: "影像技师",
    category: "医疗卫生",
    description: "从事医学影像检查工作",
    ai_score: 60,
    occupation_code: "2-05-07-01"
  },
  {
    job_name: "护士",
    category: "医疗卫生",
    description: "从事临床护理工作",
    ai_score: 30,
    occupation_code: "2-05-08-01"
  },
  {
    job_name: "助产士",
    category: "医疗卫生",
    description: "从事产科助产工作",
    ai_score: 25,
    occupation_code: "2-05-08-06"
  },
  {
    job_name: "乡村医生",
    category: "医疗卫生",
    description: "从事农村基层医疗工作",
    ai_score: 35,
    occupation_code: "2-05-09-01"
  },

  // 经济和金融专业人员
  {
    job_name: "经济规划专业人员",
    category: "金融经济",
    description: "从事经济发展规划工作",
    ai_score: 55,
    occupation_code: "2-06-01-01"
  },
  {
    job_name: "会计专业人员",
    category: "金融经济",
    description: "从事财务会计工作",
    ai_score: 75,
    occupation_code: "2-06-03-01"
  },
  {
    job_name: "审计专业人员",
    category: "金融经济",
    description: "从事财务审计工作",
    ai_score: 68,
    occupation_code: "2-06-04-01"
  },
  {
    job_name: "银行从业人员",
    category: "金融经济",
    description: "从事银行业务工作",
    ai_score: 72,
    occupation_code: "2-06-05-01"
  },
  {
    job_name: "证券从业人员",
    category: "金融经济",
    description: "从事证券投资工作",
    ai_score: 65,
    occupation_code: "2-06-06-01"
  },
  {
    job_name: "保险从业人员",
    category: "金融经济",
    description: "从事保险业务工作",
    ai_score: 60,
    occupation_code: "2-06-07-01"
  },
  {
    job_name: "精算师",
    category: "金融经济",
    description: "从事保险产品定价和风险评估",
    ai_score: 55,
    occupation_code: "2-06-08-01"
  },
  {
    job_name: "投资顾问",
    category: "金融经济",
    description: "从事投资咨询工作",
    ai_score: 58,
    occupation_code: "2-06-09-01"
  },
  {
    job_name: "资产评估专业人员",
    category: "金融经济",
    description: "从事资产评估工作",
    ai_score: 62,
    occupation_code: "2-06-10-01"
  },
  {
    job_name: "统计专业人员",
    category: "金融经济",
    description: "从事统计调查和分析工作",
    ai_score: 70,
    occupation_code: "2-06-11-01"
  },

  // 法律、社会和宗教专业人员
  {
    job_name: "法官",
    category: "法律",
    description: "从事案件审理和判决工作",
    ai_score: 25,
    occupation_code: "2-07-01-01"
  },
  {
    job_name: "检察官",
    category: "法律",
    description: "从事检察监督工作",
    ai_score: 28,
    occupation_code: "2-07-02-01"
  },
  {
    job_name: "律师",
    category: "法律",
    description: "从事法律咨询和诉讼代理",
    ai_score: 35,
    occupation_code: "2-07-03-01"
  },
  {
    job_name: "公证员",
    category: "法律",
    description: "从事公证事务工作",
    ai_score: 55,
    occupation_code: "2-07-04-01"
  },
  {
    job_name: "仲裁员",
    category: "法律",
    description: "从事仲裁裁决工作",
    ai_score: 40,
    occupation_code: "2-07-05-01"
  },
  {
    job_name: "社会工作专业人员",
    category: "社会服务",
    description: "从事社会工作服务",
    ai_score: 38,
    occupation_code: "2-07-06-01"
  },
  {
    job_name: "心理咨询师",
    category: "社会服务",
    description: "从事心理咨询工作",
    ai_score: 30,
    occupation_code: "2-07-07-01"
  },

  // 教学人员
  {
    job_name: "幼儿教师",
    category: "教育",
    description: "从事幼儿教育工作",
    ai_score: 22,
    occupation_code: "2-08-01-01"
  },
  {
    job_name: "小学教师",
    category: "教育",
    description: "从事小学教学工作",
    ai_score: 28,
    occupation_code: "2-08-02-01"
  },
  {
    job_name: "初中教师",
    category: "教育",
    description: "从事初中教学工作",
    ai_score: 30,
    occupation_code: "2-08-03-01"
  },
  {
    job_name: "高中教师",
    category: "教育",
    description: "从事高中教学工作",
    ai_score: 32,
    occupation_code: "2-08-04-01"
  },
  {
    job_name: "中等职业学校教师",
    category: "教育",
    description: "从事职业教育工作",
    ai_score: 35,
    occupation_code: "2-08-05-01"
  },
  {
    job_name: "高等学校教师",
    category: "教育",
    description: "从事高等教育教学和科研",
    ai_score: 38,
    occupation_code: "2-08-06-01"
  },
  {
    job_name: "特殊教育教师",
    category: "教育",
    description: "从事特殊教育工作",
    ai_score: 25,
    occupation_code: "2-08-07-01"
  },
  {
    job_name: "培训师",
    category: "教育",
    description: "从事职业技能培训工作",
    ai_score: 45,
    occupation_code: "2-08-08-01"
  },

  // 文学、艺术、体育专业人员
  {
    job_name: "文学创作人员",
    category: "文化艺术",
    description: "从事文学创作工作",
    ai_score: 45,
    occupation_code: "2-09-01-01"
  },
  {
    job_name: "导演",
    category: "文化艺术",
    description: "从事影视导演工作",
    ai_score: 30,
    occupation_code: "2-09-02-01"
  },
  {
    job_name: "演员",
    category: "文化艺术",
    description: "从事影视表演工作",
    ai_score: 25,
    occupation_code: "2-09-02-02"
  },
  {
    job_name: "作曲家",
    category: "文化艺术",
    description: "从事音乐创作工作",
    ai_score: 40,
    occupation_code: "2-09-03-01"
  },
  {
    job_name: "指挥",
    category: "文化艺术",
    description: "从事音乐指挥工作",
    ai_score: 22,
    occupation_code: "2-09-03-02"
  },
  {
    job_name: "乐器演奏员",
    category: "文化艺术",
    description: "从事乐器演奏工作",
    ai_score: 28,
    occupation_code: "2-09-03-03"
  },
  {
    job_name: "美术专业人员",
    category: "文化艺术",
    description: "从事美术创作工作",
    ai_score: 35,
    occupation_code: "2-09-04-01"
  },
  {
    job_name: "设计专业人员",
    category: "文化艺术",
    description: "从事设计创意工作",
    ai_score: 50,
    occupation_code: "2-09-05-01"
  },
  {
    job_name: "动画设计人员",
    category: "文化艺术",
    description: "从事动画设计工作",
    ai_score: 65,
    occupation_code: "2-09-05-02"
  },
  {
    job_name: "体育教练",
    category: "文化艺术",
    description: "从事体育训练指导工作",
    ai_score: 28,
    occupation_code: "2-09-06-01"
  },
  {
    job_name: "运动员",
    category: "文化艺术",
    description: "从事体育竞技工作",
    ai_score: 15,
    occupation_code: "2-09-06-02"
  },

  // 新闻出版、文化专业人员
  {
    job_name: "记者",
    category: "新闻出版",
    description: "从事新闻采访报道工作",
    ai_score: 55,
    occupation_code: "2-10-01-01"
  },
  {
    job_name: "编辑",
    category: "新闻出版",
    description: "从事编辑校对工作",
    ai_score: 65,
    occupation_code: "2-10-02-01"
  },
  {
    job_name: "翻译人员",
    category: "新闻出版",
    description: "从事翻译工作",
    ai_score: 78,
    occupation_code: "2-10-03-01"
  },
  {
    job_name: "图书馆专业人员",
    category: "新闻出版",
    description: "从事图书馆管理工作",
    ai_score: 60,
    occupation_code: "2-10-04-01"
  },
  {
    job_name: "档案专业人员",
    category: "新闻出版",
    description: "从事档案管理工作",
    ai_score: 65,
    occupation_code: "2-10-05-01"
  },
  {
    job_name: "博物馆专业人员",
    category: "新闻出版",
    description: "从事博物馆管理工作",
    ai_score: 45,
    occupation_code: "2-10-06-01"
  },

  // ========== 第三大类：办事人员和有关人员 ==========
  {
    job_name: "行政业务办理人员",
    category: "行政办事",
    description: "从事行政事务办理工作",
    ai_score: 70,
    occupation_code: "3-01-01-01"
  },
  {
    job_name: "秘书",
    category: "行政办事",
    description: "从事文书处理和辅助工作",
    ai_score: 75,
    occupation_code: "3-01-02-01"
  },
  {
    job_name: "公关员",
    category: "行政办事",
    description: "从事公共关系工作",
    ai_score: 55,
    occupation_code: "3-01-03-01"
  },
  {
    job_name: "收发员",
    category: "行政办事",
    description: "从事文件收发工作",
    ai_score: 85,
    occupation_code: "3-01-04-01"
  },
  {
    job_name: "打字员",
    category: "行政办事",
    description: "从事文字录入工作",
    ai_score: 90,
    occupation_code: "3-01-05-01"
  },
  {
    job_name: "速录师",
    category: "行政办事",
    description: "从事速记工作",
    ai_score: 88,
    occupation_code: "3-01-06-01"
  },
  {
    job_name: "计算机操作员",
    category: "行政办事",
    description: "从事计算机操作工作",
    ai_score: 80,
    occupation_code: "3-01-07-01"
  },
  {
    job_name: "保安员",
    category: "安全消防",
    description: "从事安全保卫工作",
    ai_score: 60,
    occupation_code: "3-02-01-01"
  },
  {
    job_name: "消防员",
    category: "安全消防",
    description: "从事消防救援工作",
    ai_score: 25,
    occupation_code: "3-02-02-01"
  },
  {
    job_name: "消防指挥员",
    category: "安全消防",
    description: "从事消防指挥工作",
    ai_score: 30,
    occupation_code: "3-02-02-02"
  },

  // ========== 第四大类：社会生产服务和生活服务人员 ==========
  // 批发与零售服务人员
  {
    job_name: "营业员",
    category: "销售服务",
    description: "从事商品销售工作",
    ai_score: 65,
    occupation_code: "4-01-01-01"
  },
  {
    job_name: "收银员",
    category: "销售服务",
    description: "从事收银结算工作",
    ai_score: 85,
    occupation_code: "4-01-02-01"
  },
  {
    job_name: "营销员",
    category: "销售服务",
    description: "从事市场营销工作",
    ai_score: 55,
    occupation_code: "4-01-03-01"
  },
  {
    job_name: "商品营业员",
    category: "销售服务",
    description: "从事商品销售和陈列工作",
    ai_score: 60,
    occupation_code: "4-01-04-01"
  },
  {
    job_name: "推销员",
    category: "销售服务",
    description: "从事产品推销工作",
    ai_score: 50,
    occupation_code: "4-01-05-01"
  },

  // 交通运输、仓储和邮政业服务人员
  {
    job_name: "汽车驾驶员",
    category: "交通运输",
    description: "从事汽车驾驶工作",
    ai_score: 85,
    occupation_code: "4-02-01-01"
  },
  {
    job_name: "出租车驾驶员",
    category: "交通运输",
    description: "从事出租车运营工作",
    ai_score: 88,
    occupation_code: "4-02-01-02"
  },
  {
    job_name: "公交车驾驶员",
    category: "交通运输",
    description: "从事公交车驾驶工作",
    ai_score: 82,
    occupation_code: "4-02-01-03"
  },
  {
    job_name: "货运汽车驾驶员",
    category: "交通运输",
    description: "从事货运汽车驾驶工作",
    ai_score: 80,
    occupation_code: "4-02-01-04"
  },
  {
    job_name: "轨道交通列车驾驶员",
    category: "交通运输",
    description: "从事轨道交通驾驶工作",
    ai_score: 75,
    occupation_code: "4-02-01-05"
  },
  {
    job_name: "飞行员",
    category: "交通运输",
    description: "从事飞机驾驶工作",
    ai_score: 55,
    occupation_code: "4-02-02-01"
  },
  {
    job_name: "船舶驾驶员",
    category: "交通运输",
    description: "从事船舶驾驶工作",
    ai_score: 50,
    occupation_code: "4-02-03-01"
  },
  {
    job_name: "快递员",
    category: "交通运输",
    description: "从事快件揽收和配送工作",
    ai_score: 75,
    occupation_code: "4-02-04-01"
  },
  {
    job_name: "邮政营业员",
    category: "交通运输",
    description: "从事邮政业务办理工作",
    ai_score: 78,
    occupation_code: "4-02-05-01"
  },
  {
    job_name: "仓储管理员",
    category: "交通运输",
    description: "从事仓储管理工作",
    ai_score: 70,
    occupation_code: "4-02-06-01"
  },

  // 住宿和餐饮服务人员
  {
    job_name: "餐厅服务员",
    category: "餐饮服务",
    description: "从事餐饮服务工作",
    ai_score: 70,
    occupation_code: "4-03-01-01"
  },
  {
    job_name: "中式烹调师",
    category: "餐饮服务",
    description: "从事中式菜肴烹饪工作",
    ai_score: 45,
    occupation_code: "4-03-02-01"
  },
  {
    job_name: "西式烹调师",
    category: "餐饮服务",
    description: "从事西式菜肴烹饪工作",
    ai_score: 48,
    occupation_code: "4-03-02-02"
  },
  {
    job_name: "中式面点师",
    category: "餐饮服务",
    description: "从事中式面点制作工作",
    ai_score: 50,
    occupation_code: "4-03-02-03"
  },
  {
    job_name: "西式面点师",
    category: "餐饮服务",
    description: "从事西式面点制作工作",
    ai_score: 52,
    occupation_code: "4-03-02-04"
  },
  {
    job_name: "茶艺师",
    category: "餐饮服务",
    description: "从事茶艺服务工作",
    ai_score: 40,
    occupation_code: "4-03-03-01"
  },
  {
    job_name: "咖啡师",
    category: "餐饮服务",
    description: "从事咖啡制作工作",
    ai_score: 55,
    occupation_code: "4-03-03-02"
  },
  {
    job_name: "调酒师",
    category: "餐饮服务",
    description: "从事调酒工作",
    ai_score: 45,
    occupation_code: "4-03-03-03"
  },
  {
    job_name: "营养配餐员",
    category: "餐饮服务",
    description: "从事营养配餐工作",
    ai_score: 58,
    occupation_code: "4-03-04-01"
  },
  {
    job_name: "前厅服务员",
    category: "住宿服务",
    description: "从事酒店前厅服务工作",
    ai_score: 65,
    occupation_code: "4-04-01-01"
  },
  {
    job_name: "客房服务员",
    category: "住宿服务",
    description: "从事客房服务工作",
    ai_score: 72,
    occupation_code: "4-04-02-01"
  },

  // 信息传输、软件和信息技术服务人员
  {
    job_name: "计算机程序设计员",
    category: "信息技术",
    description: "从事程序设计和开发工作",
    ai_score: 75,
    occupation_code: "4-04-01-01"
  },
  {
    job_name: "计算机软件测试员",
    category: "信息技术",
    description: "从事软件测试工作",
    ai_score: 78,
    occupation_code: "4-04-02-01"
  },
  {
    job_name: "网络与信息安全管理员",
    category: "信息技术",
    description: "从事网络安全管理工作",
    ai_score: 65,
    occupation_code: "4-04-03-01"
  },
  {
    job_name: "信息通信网络运行管理员",
    category: "信息技术",
    description: "从事网络运维工作",
    ai_score: 68,
    occupation_code: "4-04-04-01"
  },
  {
    job_name: "呼叫中心服务员",
    category: "信息技术",
    description: "从事客服热线工作",
    ai_score: 85,
    occupation_code: "4-05-01-01"
  },

  // 金融服务人员
  {
    job_name: "银行柜员",
    category: "金融服务",
    description: "从事银行柜台业务工作",
    ai_score: 85,
    occupation_code: "4-05-01-01"
  },
  {
    job_name: "银行信贷员",
    category: "金融服务",
    description: "从事银行信贷工作",
    ai_score: 70,
    occupation_code: "4-05-01-02"
  },
  {
    job_name: "保险代理人",
    category: "金融服务",
    description: "从事保险销售工作",
    ai_score: 60,
    occupation_code: "4-05-02-01"
  },
  {
    job_name: "保险理赔员",
    category: "金融服务",
    description: "从事保险理赔工作",
    ai_score: 65,
    occupation_code: "4-05-02-02"
  },

  // 居民服务人员
  {
    job_name: "家政服务员",
    category: "居民服务",
    description: "从事家政服务工作",
    ai_score: 55,
    occupation_code: "4-10-01-01"
  },
  {
    job_name: "养老护理员",
    category: "居民服务",
    description: "从事老年人护理工作",
    ai_score: 35,
    occupation_code: "4-10-02-01"
  },
  {
    job_name: "育婴员",
    category: "居民服务",
    description: "从事婴幼儿照护工作",
    ai_score: 30,
    occupation_code: "4-10-03-01"
  },
  {
    job_name: "保育员",
    category: "居民服务",
    description: "从事儿童保育工作",
    ai_score: 32,
    occupation_code: "4-10-03-02"
  },
  {
    job_name: "美容师",
    category: "居民服务",
    description: "从事美容服务工作",
    ai_score: 35,
    occupation_code: "4-10-04-01"
  },
  {
    job_name: "美发师",
    category: "居民服务",
    description: "从事美发服务工作",
    ai_score: 38,
    occupation_code: "4-10-04-02"
  },
  {
    job_name: "保健按摩师",
    category: "居民服务",
    description: "从事保健按摩工作",
    ai_score: 40,
    occupation_code: "4-10-05-01"
  },
  {
    job_name: "修脚师",
    category: "居民服务",
    description: "从事修脚服务工作",
    ai_score: 42,
    occupation_code: "4-10-05-02"
  },
  {
    job_name: "婚姻介绍工作人员",
    category: "居民服务",
    description: "从事婚介服务工作",
    ai_score: 55,
    occupation_code: "4-10-06-01"
  },
  {
    job_name: "殡葬服务人员",
    category: "居民服务",
    description: "从事殡葬服务工作",
    ai_score: 45,
    occupation_code: "4-10-07-01"
  },

  // 修理及制作服务人员
  {
    job_name: "汽车维修工",
    category: "修理服务",
    description: "从事汽车维修工作",
    ai_score: 55,
    occupation_code: "4-12-01-01"
  },
  {
    job_name: "家用电器产品维修工",
    category: "修理服务",
    description: "从事家电维修工作",
    ai_score: 58,
    occupation_code: "4-12-02-01"
  },
  {
    job_name: "钟表维修工",
    category: "修理服务",
    description: "从事钟表维修工作",
    ai_score: 50,
    occupation_code: "4-12-03-01"
  },
  {
    job_name: "照相器材维修工",
    category: "修理服务",
    description: "从事照相器材维修工作",
    ai_score: 52,
    occupation_code: "4-12-04-01"
  },
  {
    job_name: "自行车维修工",
    category: "修理服务",
    description: "从事自行车维修工作",
    ai_score: 60,
    occupation_code: "4-12-05-01"
  },

  // 文化、体育和娱乐服务人员
  {
    job_name: "导游",
    category: "文化娱乐",
    description: "从事导游服务工作",
    ai_score: 55,
    occupation_code: "4-13-01-01"
  },
  {
    job_name: "公共游览场所服务员",
    category: "文化娱乐",
    description: "从事景区服务工作",
    ai_score: 65,
    occupation_code: "4-13-02-01"
  },
  {
    job_name: "健身教练",
    category: "文化娱乐",
    description: "从事健身指导工作",
    ai_score: 40,
    occupation_code: "4-13-03-01"
  },
  {
    job_name: "社会体育指导员",
    category: "文化娱乐",
    description: "从事体育指导工作",
    ai_score: 38,
    occupation_code: "4-13-03-02"
  },
  {
    job_name: "电影放映员",
    category: "文化娱乐",
    description: "从事电影放映工作",
    ai_score: 75,
    occupation_code: "4-13-04-01"
  },

  // 健康服务人员
  {
    job_name: "健康管理师",
    category: "健康服务",
    description: "从事健康管理工作",
    ai_score: 50,
    occupation_code: "4-14-01-01"
  },
  {
    job_name: "公共营养师",
    category: "健康服务",
    description: "从事营养指导工作",
    ai_score: 55,
    occupation_code: "4-14-02-01"
  },
  {
    job_name: "康复治疗师",
    category: "健康服务",
    description: "从事康复治疗工作",
    ai_score: 40,
    occupation_code: "4-14-03-01"
  },

  // ========== 第五大类：农、林、牧、渔业生产及辅助人员 ==========
  {
    job_name: "农作物种植人员",
    category: "农林牧渔",
    description: "从事农作物种植工作",
    ai_score: 55,
    occupation_code: "5-01-01-01"
  },
  {
    job_name: "园艺作物种植人员",
    category: "农林牧渔",
    description: "从事园艺作物种植工作",
    ai_score: 50,
    occupation_code: "5-01-02-01"
  },
  {
    job_name: "林业生产人员",
    category: "农林牧渔",
    description: "从事林业生产工作",
    ai_score: 48,
    occupation_code: "5-02-01-01"
  },
  {
    job_name: "畜禽饲养人员",
    category: "农林牧渔",
    description: "从事畜禽饲养工作",
    ai_score: 52,
    occupation_code: "5-03-01-01"
  },
  {
    job_name: "水产养殖人员",
    category: "农林牧渔",
    description: "从事水产养殖工作",
    ai_score: 50,
    occupation_code: "5-04-01-01"
  },
  {
    job_name: "渔业捕捞人员",
    category: "农林牧渔",
    description: "从事渔业捕捞工作",
    ai_score: 45,
    occupation_code: "5-04-02-01"
  },
  {
    job_name: "农业机械操作人员",
    category: "农林牧渔",
    description: "从事农业机械操作工作",
    ai_score: 60,
    occupation_code: "5-05-01-01"
  },

  // ========== 第六大类：生产制造及有关人员 ==========
  {
    job_name: "农副产品加工人员",
    category: "生产制造",
    description: "从事农副产品加工工作",
    ai_score: 65,
    occupation_code: "6-01-01-01"
  },
  {
    job_name: "食品加工人员",
    category: "生产制造",
    description: "从事食品加工工作",
    ai_score: 62,
    occupation_code: "6-02-01-01"
  },
  {
    job_name: "纺织工",
    category: "生产制造",
    description: "从事纺织工作",
    ai_score: 75,
    occupation_code: "6-04-01-01"
  },
  {
    job_name: "服装制作工",
    category: "生产制造",
    description: "从事服装制作工作",
    ai_score: 70,
    occupation_code: "6-05-01-01"
  },
  {
    job_name: "木材加工人员",
    category: "生产制造",
    description: "从事木材加工工作",
    ai_score: 68,
    occupation_code: "6-06-01-01"
  },
  {
    job_name: "家具制作工",
    category: "生产制造",
    description: "从事家具制作工作",
    ai_score: 60,
    occupation_code: "6-06-02-01"
  },
  {
    job_name: "造纸工",
    category: "生产制造",
    description: "从事造纸工作",
    ai_score: 72,
    occupation_code: "6-07-01-01"
  },
  {
    job_name: "印刷工",
    category: "生产制造",
    description: "从事印刷工作",
    ai_score: 70,
    occupation_code: "6-08-01-01"
  },
  {
    job_name: "石油炼制工",
    category: "生产制造",
    description: "从事石油炼制工作",
    ai_score: 65,
    occupation_code: "6-10-01-01"
  },
  {
    job_name: "化工生产工",
    category: "生产制造",
    description: "从事化工生产工作",
    ai_score: 62,
    occupation_code: "6-11-01-01"
  },
  {
    job_name: "药品生产人员",
    category: "生产制造",
    description: "从事药品生产工作",
    ai_score: 58,
    occupation_code: "6-12-01-01"
  },
  {
    job_name: "橡胶制品生产工",
    category: "生产制造",
    description: "从事橡胶制品生产工作",
    ai_score: 65,
    occupation_code: "6-14-01-01"
  },
  {
    job_name: "塑料制品生产工",
    category: "生产制造",
    description: "从事塑料制品生产工作",
    ai_score: 68,
    occupation_code: "6-14-02-01"
  },
  {
    job_name: "水泥生产工",
    category: "生产制造",
    description: "从事水泥生产工作",
    ai_score: 65,
    occupation_code: "6-15-01-01"
  },
  {
    job_name: "玻璃制品生产工",
    category: "生产制造",
    description: "从事玻璃制品生产工作",
    ai_score: 62,
    occupation_code: "6-15-02-01"
  },
  {
    job_name: "采矿工",
    category: "生产制造",
    description: "从事采矿工作",
    ai_score: 55,
    occupation_code: "6-16-01-01"
  },
  {
    job_name: "金属冶炼工",
    category: "生产制造",
    description: "从事金属冶炼工作",
    ai_score: 60,
    occupation_code: "6-17-01-01"
  },
  {
    job_name: "金属轧制工",
    category: "生产制造",
    description: "从事金属轧制工作",
    ai_score: 62,
    occupation_code: "6-17-02-01"
  },
  {
    job_name: "机械冷加工工",
    category: "生产制造",
    description: "从事机械冷加工工作",
    ai_score: 58,
    occupation_code: "6-18-01-01"
  },
  {
    job_name: "机械热加工工",
    category: "生产制造",
    description: "从事机械热加工工作",
    ai_score: 55,
    occupation_code: "6-18-02-01"
  },
  {
    job_name: "焊工",
    category: "生产制造",
    description: "从事焊接工作",
    ai_score: 52,
    occupation_code: "6-18-03-01"
  },
  {
    job_name: "钳工",
    category: "生产制造",
    description: "从事钳工工作",
    ai_score: 50,
    occupation_code: "6-18-04-01"
  },
  {
    job_name: "钣金工",
    category: "生产制造",
    description: "从事钣金工作",
    ai_score: 55,
    occupation_code: "6-18-05-01"
  },
  {
    job_name: "金属制品制作工",
    category: "生产制造",
    description: "从事金属制品制作工作",
    ai_score: 58,
    occupation_code: "6-19-01-01"
  },
  {
    job_name: "通用设备制造人员",
    category: "生产制造",
    description: "从事通用设备制造工作",
    ai_score: 55,
    occupation_code: "6-20-01-01"
  },
  {
    job_name: "汽车制造人员",
    category: "生产制造",
    description: "从事汽车制造工作",
    ai_score: 60,
    occupation_code: "6-22-01-01"
  },
  {
    job_name: "铁路车辆制造人员",
    category: "生产制造",
    description: "从事铁路车辆制造工作",
    ai_score: 58,
    occupation_code: "6-23-01-01"
  },
  {
    job_name: "船舶制造人员",
    category: "生产制造",
    description: "从事船舶制造工作",
    ai_score: 55,
    occupation_code: "6-23-02-01"
  },
  {
    job_name: "电气设备制造人员",
    category: "生产制造",
    description: "从事电气设备制造工作",
    ai_score: 58,
    occupation_code: "6-24-01-01"
  },
  {
    job_name: "电子设备制造人员",
    category: "生产制造",
    description: "从事电子设备制造工作",
    ai_score: 65,
    occupation_code: "6-25-01-01"
  },
  {
    job_name: "仪器仪表制造人员",
    category: "生产制造",
    description: "从事仪器仪表制造工作",
    ai_score: 60,
    occupation_code: "6-26-01-01"
  },
  {
    job_name: "电力生产人员",
    category: "生产制造",
    description: "从事电力生产工作",
    ai_score: 55,
    occupation_code: "6-28-01-01"
  },
  {
    job_name: "建筑施工人员",
    category: "生产制造",
    description: "从事建筑施工工作",
    ai_score: 45,
    occupation_code: "6-29-01-01"
  },
  {
    job_name: "砌筑工",
    category: "生产制造",
    description: "从事砌筑工作",
    ai_score: 48,
    occupation_code: "6-29-02-01"
  },
  {
    job_name: "混凝土工",
    category: "生产制造",
    description: "从事混凝土工作",
    ai_score: 52,
    occupation_code: "6-29-03-01"
  },
  {
    job_name: "钢筋工",
    category: "生产制造",
    description: "从事钢筋工作",
    ai_score: 50,
    occupation_code: "6-29-04-01"
  },
  {
    job_name: "架子工",
    category: "生产制造",
    description: "从事架子搭建工作",
    ai_score: 42,
    occupation_code: "6-29-05-01"
  },
  {
    job_name: "电工",
    category: "生产制造",
    description: "从事电气安装和维修工作",
    ai_score: 48,
    occupation_code: "6-29-06-01"
  },
  {
    job_name: "起重装卸机械操作工",
    category: "生产制造",
    description: "从事起重装卸工作",
    ai_score: 55,
    occupation_code: "6-30-01-01"
  },
  {
    job_name: "检验员",
    category: "生产制造",
    description: "从事产品质量检验工作",
    ai_score: 72,
    occupation_code: "6-31-01-01"
  },
  {
    job_name: "包装工",
    category: "生产制造",
    description: "从事产品包装工作",
    ai_score: 80,
    occupation_code: "6-31-02-01"
  },

  // ========== 第七大类：军人 ==========
  {
    job_name: "军官",
    category: "军人",
    description: "从事军事指挥和管理工作",
    ai_score: 15,
    occupation_code: "7-00-01-01"
  },
  {
    job_name: "士兵",
    category: "军人",
    description: "从事军事训练和作战任务",
    ai_score: 18,
    occupation_code: "7-00-01-02"
  },

  // ========== 第八大类：不便分类的其他从业人员 ==========
  {
    job_name: "其他从业人员",
    category: "其他",
    description: "从事其他未分类职业",
    ai_score: 50,
    occupation_code: "8-00-00-00"
  }
]
