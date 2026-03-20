import type { Occupation } from "@/types"
import { enhanceOccupations } from "@/lib/enhanceData"

const rawOccupations: Occupation[] = [
  // ========== 第一大类：党的机关、国家机关、群众团体和社会组织、企事业单位负责人 ==========
  {
    job_name: "中国共产党机关负责人",
    category: "负责人",
    description: "负责中国共产党机关的领导和管理",
    ai_score: 8,
    occupation_code: "1-01-00-01"
  },
  {
    job_name: "国家行政机关负责人",
    category: "负责人",
    description: "负责国家行政机关的领导和管理",
    ai_score: 10,
    occupation_code: "1-02-01-01"
  },
  {
    job_name: "人民法院负责人",
    category: "负责人",
    description: "负责人民法院的审判和管理工作",
    ai_score: 12,
    occupation_code: "1-02-02-01"
  },
  {
    job_name: "人民检察院负责人",
    category: "负责人",
    description: "负责人民检察院的检察工作",
    ai_score: 12,
    occupation_code: "1-02-02-02"
  },
  {
    job_name: "民主党派和工商联负责人",
    category: "负责人",
    description: "负责民主党派和工商联的领导工作",
    ai_score: 10,
    occupation_code: "1-03-01-01"
  },
  {
    job_name: "社会团体负责人",
    category: "负责人",
    description: "负责社会团体的管理和活动组织",
    ai_score: 15,
    occupation_code: "1-04-01-01"
  },
  {
    job_name: "基层群众自治组织负责人",
    category: "负责人",
    description: "负责社区居民委员会或村民委员会的管理",
    ai_score: 18,
    occupation_code: "1-05-00-01"
  },
  {
    job_name: "企业董事",
    category: "负责人",
    description: "负责企业重大决策和监督管理",
    ai_score: 45,
    occupation_code: "1-06-01-01"
  },
  {
    job_name: "企业总经理",
    category: "负责人",
    description: "负责企业日常经营管理和决策",
    ai_score: 28,
    occupation_code: "1-06-01-02"
  },
  {
    job_name: "事业单位负责人",
    category: "负责人",
    description: "负责事业单位的管理和运营",
    ai_score: 15,
    occupation_code: "1-06-02-01"
  },
  {
    job_name: "企业职能部门经理",
    category: "负责人",
    description: "负责企业职能部门的管理工作",
    ai_score: 28,
    occupation_code: "1-06-01-03"
  },
  {
    job_name: "企业生产经理",
    category: "负责人",
    description: "负责企业生产运营管理",
    ai_score: 32,
    occupation_code: "1-06-01-04"
  },
  {
    job_name: "企业销售经理",
    category: "负责人",
    description: "负责企业销售团队管理",
    ai_score: 35,
    occupation_code: "1-06-01-05"
  },
  {
    job_name: "企业人力资源经理",
    category: "负责人",
    description: "负责企业人力资源管理",
    ai_score: 38,
    occupation_code: "1-06-01-06"
  },
  {
    job_name: "企业财务经理",
    category: "负责人",
    description: "负责企业财务管理",
    ai_score: 42,
    occupation_code: "1-06-01-07"
  },
  {
    job_name: "农业经理人",
    category: "负责人",
    description: "负责农业企业经营管理",
    ai_score: 28,
    occupation_code: "1-06-01-08"
  },

  // ========== 第二大类：专业技术人员 ==========
  // 科学研究人员
  {
    job_name: "数学研究人员",
    category: "科学研究人员",
    description: "从事数学理论和应用研究",
    ai_score: 45,
    occupation_code: "2-01-01-01"
  },
  {
    job_name: "物理学研究人员",
    category: "科学研究人员",
    description: "从事物理学理论和实验研究",
    ai_score: 45,
    occupation_code: "2-01-01-02"
  },
  {
    job_name: "化学研究人员",
    category: "科学研究人员",
    description: "从事化学理论和应用研究",
    ai_score: 45,
    occupation_code: "2-01-01-03"
  },
  {
    job_name: "天文学研究人员",
    category: "科学研究人员",
    description: "从事天文学观测和研究",
    ai_score: 18,
    occupation_code: "2-01-01-04"
  },
  {
    job_name: "地球科学研究人员",
    category: "科学研究人员",
    description: "从事地球科学理论和应用研究",
    ai_score: 45,
    occupation_code: "2-01-01-05"
  },
  {
    job_name: "生物学研究人员",
    category: "科学研究人员",
    description: "从事生物学理论和应用研究",
    ai_score: 45,
    occupation_code: "2-01-01-06"
  },
  {
    job_name: "医学研究人员",
    category: "科学研究人员",
    description: "从事医学理论和临床研究",
    ai_score: 45,
    occupation_code: "2-01-01-07"
  },
  {
    job_name: "农业科学研究人员",
    category: "科学研究人员",
    description: "从事农业科学理论和应用研究",
    ai_score: 45,
    occupation_code: "2-01-02-01"
  },
  {
    job_name: "社会科学研究人员",
    category: "科学研究人员",
    description: "从事社会科学理论和应用研究",
    ai_score: 45,
    occupation_code: "2-01-03-01"
  },
  {
    job_name: "历史学研究人员",
    category: "科学研究人员",
    description: "从事历史学研究",
    ai_score: 22,
    occupation_code: "2-01-03-02"
  },
  {
    job_name: "哲学研究人员",
    category: "科学研究人员",
    description: "从事哲学研究",
    ai_score: 15,
    occupation_code: "2-01-03-03"
  },
  {
    job_name: "文学研究人员",
    category: "科学研究人员",
    description: "从事文学研究",
    ai_score: 18,
    occupation_code: "2-01-03-04"
  },

  // 工程技术人员
  {
    job_name: "土木建筑工程技术人员",
    category: "工程技术人员",
    description: "从事土木建筑工程设计和技术服务",
    ai_score: 42,
    occupation_code: "2-02-01-01"
  },
  {
    job_name: "建筑设计师",
    category: "工程技术人员",
    description: "从事建筑设计和规划工作",
    ai_score: 45,
    occupation_code: "2-02-01-02"
  },
  {
    job_name: "结构工程师",
    category: "工程技术人员",
    description: "从事建筑结构设计和计算",
    ai_score: 45,
    occupation_code: "2-02-01-03"
  },
  {
    job_name: "地球物理地球化学与遥感勘查工程技术人员",
    category: "工程技术人员",
    description: "从事地球物理、地球化学与遥感勘查技术服务",
    ai_score: 42,
    occupation_code: "2-02-01-04"
  },
  {
    job_name: "大地测量工程技术人员",
    category: "工程技术人员",
    description: "从事大地测量技术服务",
    ai_score: 42,
    occupation_code: "2-02-02-01"
  },
  {
    job_name: "工程测量工程技术人员",
    category: "工程技术人员",
    description: "从事工程测量技术服务",
    ai_score: 42,
    occupation_code: "2-02-02-02"
  },
  {
    job_name: "摄影测量与遥感工程技术人员",
    category: "工程技术人员",
    description: "从事摄影测量与遥感技术服务",
    ai_score: 42,
    occupation_code: "2-02-02-03"
  },
  {
    job_name: "地图制图工程技术人员",
    category: "工程技术人员",
    description: "从事地图制图技术服务",
    ai_score: 42,
    occupation_code: "2-02-02-04"
  },
  {
    job_name: "海洋测绘工程技术人员",
    category: "工程技术人员",
    description: "从事海洋测绘技术服务",
    ai_score: 42,
    occupation_code: "2-02-02-05"
  },
  {
    job_name: "地理国情监测工程技术人员",
    category: "工程技术人员",
    description: "从事地理国情监测技术服务",
    ai_score: 42,
    occupation_code: "2-02-02-06"
  },
  {
    job_name: "地理信息系统工程技术人员",
    category: "工程技术人员",
    description: "从事地理信息系统技术服务",
    ai_score: 42,
    occupation_code: "2-02-02-07"
  },
  {
    job_name: "导航与位置服务工程技术人员",
    category: "工程技术人员",
    description: "从事导航与位置服务技术服务",
    ai_score: 42,
    occupation_code: "2-02-02-08"
  },
  {
    job_name: "地质测绘工程技术人员",
    category: "工程技术人员",
    description: "从事地质测绘技术服务",
    ai_score: 42,
    occupation_code: "2-02-02-09"
  },
  {
    job_name: "机械工程技术人员",
    category: "工程技术人员",
    description: "从事机械产品设计和技术服务",
    ai_score: 42,
    occupation_code: "2-02-03-01"
  },
  {
    job_name: "机械设计师",
    category: "工程技术人员",
    description: "从事机械产品设计",
    ai_score: 45,
    occupation_code: "2-02-03-02"
  },
  {
    job_name: "自动控制工程技术人员",
    category: "工程技术人员",
    description: "从事自动控制系统设计和技术服务",
    ai_score: 42,
    occupation_code: "2-02-03-03"
  },
  {
    job_name: "电子工程技术人员",
    category: "工程技术人员",
    description: "从事电子产品设计和技术服务",
    ai_score: 42,
    occupation_code: "2-02-04-01"
  },
  {
    job_name: "电气工程技术人员",
    category: "工程技术人员",
    description: "从事电气系统设计和技术服务",
    ai_score: 42,
    occupation_code: "2-02-05-01"
  },
  {
    job_name: "电力工程技术人员",
    category: "工程技术人员",
    description: "从事电力系统设计和技术服务",
    ai_score: 42,
    occupation_code: "2-02-06-01"
  },
  {
    job_name: "化工工程技术人员",
    category: "工程技术人员",
    description: "从事化工产品设计和技术服务",
    ai_score: 42,
    occupation_code: "2-02-07-01"
  },
  {
    job_name: "冶金工程技术人员",
    category: "工程技术人员",
    description: "从事冶金工艺设计和技术服务",
    ai_score: 38,
    occupation_code: "2-02-08-01"
  },
  {
    job_name: "矿业工程技术人员",
    category: "工程技术人员",
    description: "从事矿山开采设计和技术服务",
    ai_score: 35,
    occupation_code: "2-02-09-01"
  },
  {
    job_name: "石油工程技术人员",
    category: "工程技术人员",
    description: "从事石油开采设计和技术服务",
    ai_score: 38,
    occupation_code: "2-02-10-01"
  },
  {
    job_name: "雷达导航工程技术人员",
    category: "工程技术人员",
    description: "从事雷达导航技术服务",
    ai_score: 42,
    occupation_code: "2-02-10-02"
  },
  {
    job_name: "通信工程技术人员",
    category: "工程技术人员",
    description: "从事通信技术服务",
    ai_score: 42,
    occupation_code: "2-02-10-03"
  },
  {
    job_name: "广播视听设备工程技术人员",
    category: "工程技术人员",
    description: "从事广播视听设备技术服务",
    ai_score: 42,
    occupation_code: "2-02-10-04"
  },
  {
    job_name: "纺织工程技术人员",
    category: "工程技术人员",
    description: "从事纺织工艺设计和技术服务",
    ai_score: 42,
    occupation_code: "2-02-11-01"
  },
  {
    job_name: "食品工程技术人员",
    category: "工程技术人员",
    description: "从事食品工艺设计和技术服务",
    ai_score: 42,
    occupation_code: "2-02-12-01"
  },
  {
    job_name: "气象观测工程技术人员",
    category: "工程技术人员",
    description: "从事气象观测技术服务",
    ai_score: 42,
    occupation_code: "2-02-13-01"
  },
  {
    job_name: "天气预报工程技术人员",
    category: "工程技术人员",
    description: "从事天气预报技术服务",
    ai_score: 62,
    occupation_code: "2-02-13-02"
  },
  {
    job_name: "气候监测预测工程技术人员",
    category: "工程技术人员",
    description: "从事气候监测预测技术服务",
    ai_score: 42,
    occupation_code: "2-02-13-03"
  },
  {
    job_name: "气象服务工程技术人员",
    category: "工程技术人员",
    description: "从事气象服务技术服务",
    ai_score: 42,
    occupation_code: "2-02-13-04"
  },
  {
    job_name: "人工影响天气工程技术人员",
    category: "工程技术人员",
    description: "从事人工影响天气技术服务",
    ai_score: 42,
    occupation_code: "2-02-13-05"
  },
  {
    job_name: "地震监测预测工程技术人员",
    category: "工程技术人员",
    description: "从事地震监测预测技术服务",
    ai_score: 42,
    occupation_code: "2-02-14-01"
  },
  {
    job_name: "测绘工程技术人员",
    category: "工程技术人员",
    description: "从事测绘技术服务",
    ai_score: 42,
    occupation_code: "2-02-15-01"
  },
  {
    job_name: "水利工程技术人员",
    category: "工程技术人员",
    description: "从事水利工程设计和技术服务",
    ai_score: 38,
    occupation_code: "2-02-16-01"
  },
  {
    job_name: "海洋工程技术人员",
    category: "工程技术人员",
    description: "从事海洋工程技术服务",
    ai_score: 35,
    occupation_code: "2-02-17-01"
  },
  {
    job_name: "海洋调查与监测工程技术人员",
    category: "工程技术人员",
    description: "从事海洋调查与监测技术服务",
    ai_score: 42,
    occupation_code: "2-02-17-02"
  },
  {
    job_name: "海洋环境预报工程技术人员",
    category: "工程技术人员",
    description: "从事海洋环境预报技术服务",
    ai_score: 42,
    occupation_code: "2-02-17-03"
  },
  {
    job_name: "海洋工程勘察设计工程技术人员",
    category: "工程技术人员",
    description: "从事海洋工程勘察设计技术服务",
    ai_score: 35,
    occupation_code: "2-02-17-04"
  },
  {
    job_name: "林业工程技术人员",
    category: "工程技术人员",
    description: "从事林业技术服务",
    ai_score: 28,
    occupation_code: "2-02-18-01"
  },
  {
    job_name: "环境工程技术人员",
    category: "工程技术人员",
    description: "从事环境保护技术服务",
    ai_score: 38,
    occupation_code: "2-02-19-01"
  },
  {
    job_name: "安全工程技术人员",
    category: "工程技术人员",
    description: "从事安全生产技术服务",
    ai_score: 35,
    occupation_code: "2-02-20-01"
  },
  {
    job_name: "标准化工程技术人员",
    category: "工程技术人员",
    description: "从事标准化技术服务",
    ai_score: 42,
    occupation_code: "2-02-21-01"
  },
  {
    job_name: "计量工程技术人员",
    category: "工程技术人员",
    description: "从事计量技术服务",
    ai_score: 42,
    occupation_code: "2-02-21-02"
  },
  {
    job_name: "质量工程技术人员",
    category: "工程技术人员",
    description: "从事质量管理技术服务",
    ai_score: 42,
    occupation_code: "2-02-21-03"
  },
  {
    job_name: "项目管理工程技术人员",
    category: "工程技术人员",
    description: "从事项目管理技术服务",
    ai_score: 38,
    occupation_code: "2-02-22-01"
  },
  {
    job_name: "物流工程技术人员",
    category: "工程技术人员",
    description: "从事物流系统设计和技术服务",
    ai_score: 42,
    occupation_code: "2-02-23-01"
  },
  {
    job_name: "信息管理工程技术人员",
    category: "工程技术人员",
    description: "从事信息管理技术服务",
    ai_score: 42,
    occupation_code: "2-02-24-01"
  },
  {
    job_name: "数据分析处理工程技术人员",
    category: "工程技术人员",
    description: "从事数据分析处理技术服务",
    ai_score: 62,
    occupation_code: "2-02-25-01"
  },
  {
    job_name: "供应链工程技术人员",
    category: "工程技术人员",
    description: "从事供应链系统设计和技术服务",
    ai_score: 42,
    occupation_code: "2-02-26-01"
  },
  {
    job_name: "工业设计工程技术人员",
    category: "工程技术人员",
    description: "从事工业设计技术服务",
    ai_score: 40,
    occupation_code: "2-02-27-01"
  },

  // 数字技术工程技术人员（2022年版新增，标识为S）
  {
    job_name: "人工智能工程技术人员",
    category: "数字技术人员",
    description: "从事人工智能算法研究、系统设计和开发应用",
    ai_score: 48,
    occupation_code: "2-02-38-01"
  },
  {
    job_name: "物联网工程技术人员",
    category: "数字技术人员",
    description: "从事物联网系统架构设计、设备开发和运维",
    ai_score: 42,
    occupation_code: "2-02-38-02"
  },
  {
    job_name: "大数据工程技术人员",
    category: "数字技术人员",
    description: "从事大数据采集、处理、分析和应用开发",
    ai_score: 52,
    occupation_code: "2-02-38-03"
  },
  {
    job_name: "云计算工程技术人员",
    category: "数字技术人员",
    description: "从事云计算平台架构设计、开发和运维",
    ai_score: 48,
    occupation_code: "2-02-38-04"
  },
  {
    job_name: "智能制造工程技术人员",
    category: "数字技术人员",
    description: "从事智能制造系统规划、设计、集成和运维",
    ai_score: 40,
    occupation_code: "2-02-38-05"
  },
  {
    job_name: "工业互联网工程技术人员",
    category: "数字技术人员",
    description: "从事工业互联网平台建设和应用开发",
    ai_score: 42,
    occupation_code: "2-02-38-06"
  },
  {
    job_name: "虚拟现实工程技术人员",
    category: "数字技术人员",
    description: "从事虚拟现实系统设计和开发应用",
    ai_score: 40,
    occupation_code: "2-02-38-07"
  },
  {
    job_name: "区块链工程技术人员",
    category: "数字技术人员",
    description: "从事区块链系统架构设计和开发应用",
    ai_score: 42,
    occupation_code: "2-02-38-08"
  },
  {
    job_name: "集成电路工程技术人员",
    category: "数字技术人员",
    description: "从事集成电路设计、验证、测试和应用",
    ai_score: 38,
    occupation_code: "2-02-38-09"
  },
  {
    job_name: "机器人工程技术人员",
    category: "数字技术人员",
    description: "从事机器人系统设计、开发和集成应用",
    ai_score: 40,
    occupation_code: "2-02-38-10"
  },
  {
    job_name: "增材制造工程技术人员",
    category: "数字技术人员",
    description: "从事增材制造（3D打印）技术研发和应用",
    ai_score: 35,
    occupation_code: "2-02-38-11"
  },
  {
    job_name: "数据安全工程技术人员",
    category: "数字技术人员",
    description: "从事数据安全技术研发和应用",
    ai_score: 35,
    occupation_code: "2-02-38-12"
  },
  {
    job_name: "密码工程技术人员",
    category: "数字技术人员",
    description: "从事密码技术研发和应用",
    ai_score: 38,
    occupation_code: "2-02-38-13"
  },
  {
    job_name: "计算机软件工程技术人员",
    category: "数字技术人员",
    description: "从事计算机软件设计、开发和维护",
    ai_score: 42,
    occupation_code: "2-02-10-03"
  },
  {
    job_name: "计算机网络工程技术人员",
    category: "数字技术人员",
    description: "从事计算机网络设计、建设和维护",
    ai_score: 42,
    occupation_code: "2-02-10-04"
  },
  {
    job_name: "信息系统分析工程技术人员",
    category: "数字技术人员",
    description: "从事信息系统分析和设计",
    ai_score: 42,
    occupation_code: "2-02-10-05"
  },
  {
    job_name: "嵌入式系统设计工程技术人员",
    category: "数字技术人员",
    description: "从事嵌入式系统设计和开发",
    ai_score: 42,
    occupation_code: "2-02-10-06"
  },
  {
    job_name: "信息安全工程技术人员",
    category: "数字技术人员",
    description: "从事信息安全技术研发和应用",
    ai_score: 35,
    occupation_code: "2-02-10-07"
  },
  {
    job_name: "信息系统运行维护工程技术人员",
    category: "数字技术人员",
    description: "从事信息系统运行维护",
    ai_score: 42,
    occupation_code: "2-02-10-08"
  },
  {
    job_name: "数据库工程技术人员",
    category: "数字技术人员",
    description: "从事数据库设计、开发和运维",
    ai_score: 42,
    occupation_code: "2-02-10-09"
  },
  {
    job_name: "碳管理工程技术人员",
    category: "工程技术人员",
    description: "从事碳排放管理和减排技术服务",
    ai_score: 42,
    occupation_code: "2-02-39-01"
  },

  // 农业技术人员
  {
    job_name: "农艺师",
    category: "农业技术人员",
    description: "从事农作物种植技术指导",
    ai_score: 32,
    occupation_code: "2-03-01-01"
  },
  {
    job_name: "园艺师",
    category: "农业技术人员",
    description: "从事园艺作物种植技术指导",
    ai_score: 28,
    occupation_code: "2-03-01-02"
  },
  {
    job_name: "土壤肥料技术人员",
    category: "农业技术人员",
    description: "从事土壤肥料技术服务",
    ai_score: 42,
    occupation_code: "2-03-02-01"
  },
  {
    job_name: "植物保护技术人员",
    category: "农业技术人员",
    description: "从事植物病虫害防治技术服务",
    ai_score: 42,
    occupation_code: "2-03-03-01"
  },
  {
    job_name: "农业技术推广人员",
    category: "农业技术人员",
    description: "从事农业技术推广服务",
    ai_score: 28,
    occupation_code: "2-03-04-01"
  },
  {
    job_name: "畜牧技术人员",
    category: "农业技术人员",
    description: "从事畜牧养殖技术服务",
    ai_score: 28,
    occupation_code: "2-03-05-01"
  },
  {
    job_name: "兽医",
    category: "农业技术人员",
    description: "从事动物疾病诊疗和预防",
    ai_score: 22,
    occupation_code: "2-03-06-01"
  },
  {
    job_name: "水产技术人员",
    category: "农业技术人员",
    description: "从事水产养殖技术服务",
    ai_score: 28,
    occupation_code: "2-03-07-01"
  },
  {
    job_name: "农业机械化技术人员",
    category: "农业技术人员",
    description: "从事农业机械化技术服务",
    ai_score: 42,
    occupation_code: "2-03-08-01"
  },
  {
    job_name: "农业数字化技术员",
    category: "农业技术人员",
    description: "从事农业数字化技术服务",
    ai_score: 40,
    occupation_code: "2-03-09-01"
  },

  // 医疗卫生技术人员
  {
    job_name: "西医医师",
    category: "医疗卫生人员",
    description: "从事西医临床诊疗工作",
    ai_score: 28,
    occupation_code: "2-05-01-01"
  },
  {
    job_name: "中医医师",
    category: "医疗卫生人员",
    description: "从事中医临床诊疗工作",
    ai_score: 15,
    occupation_code: "2-05-01-02"
  },
  {
    job_name: "中西医结合医师",
    category: "医疗卫生人员",
    description: "从事中西医结合临床诊疗工作",
    ai_score: 28,
    occupation_code: "2-05-01-03"
  },
  {
    job_name: "民族医医师",
    category: "医疗卫生人员",
    description: "从事民族医临床诊疗工作",
    ai_score: 12,
    occupation_code: "2-05-01-04"
  },
  {
    job_name: "公共卫生医师",
    category: "医疗卫生人员",
    description: "从事公共卫生服务",
    ai_score: 28,
    occupation_code: "2-05-01-05"
  },
  {
    job_name: "口腔医师",
    category: "医疗卫生人员",
    description: "从事口腔疾病诊疗工作",
    ai_score: 28,
    occupation_code: "2-05-01-06"
  },
  {
    job_name: "放射科医师",
    category: "医疗卫生人员",
    description: "从事医学影像诊断工作",
    ai_score: 45,
    occupation_code: "2-05-01-07"
  },
  {
    job_name: "麻醉科医师",
    category: "医疗卫生人员",
    description: "从事临床麻醉工作",
    ai_score: 28,
    occupation_code: "2-05-01-08"
  },
  {
    job_name: "病理科医师",
    category: "医疗卫生人员",
    description: "从事病理诊断工作",
    ai_score: 48,
    occupation_code: "2-05-01-09"
  },
  {
    job_name: "护理人员",
    category: "医疗卫生人员",
    description: "从事临床护理工作",
    ai_score: 45,
    occupation_code: "2-05-02-01"
  },
  {
    job_name: "药剂人员",
    category: "医疗卫生人员",
    description: "从事药品调剂和管理工作",
    ai_score: 42,
    occupation_code: "2-05-03-01"
  },
  {
    job_name: "医学检验人员",
    category: "医疗卫生人员",
    description: "从事医学检验工作",
    ai_score: 52,
    occupation_code: "2-05-04-01"
  },
  {
    job_name: "医学影像技术人员",
    category: "医疗卫生人员",
    description: "从事医学影像技术工作",
    ai_score: 42,
    occupation_code: "2-05-05-01"
  },
  {
    job_name: "康复治疗人员",
    category: "医疗卫生人员",
    description: "从事康复治疗工作",
    ai_score: 20,
    occupation_code: "2-05-06-01"
  },
  {
    job_name: "公共卫生人员",
    category: "医疗卫生人员",
    description: "从事公共卫生服务工作",
    ai_score: 45,
    occupation_code: "2-05-07-01"
  },
  {
    job_name: "健康管理师",
    category: "医疗卫生人员",
    description: "从事健康管理工作",
    ai_score: 38,
    occupation_code: "2-05-08-01"
  },
  {
    job_name: "心理咨询师",
    category: "医疗卫生人员",
    description: "从事心理咨询工作",
    ai_score: 22,
    occupation_code: "2-05-09-01"
  },
  {
    job_name: "营养师",
    category: "医疗卫生人员",
    description: "从事营养指导和管理工作",
    ai_score: 35,
    occupation_code: "2-05-10-01"
  },
  {
    job_name: "妇幼保健员",
    category: "医疗卫生人员",
    description: "从事妇幼保健服务工作",
    ai_score: 20,
    occupation_code: "2-05-11-01"
  },
  {
    job_name: "消毒员",
    category: "医疗卫生人员",
    description: "从事医疗消毒工作",
    ai_score: 45,
    occupation_code: "2-05-12-01"
  },

  // 教学人员
  {
    job_name: "高等教育教师",
    category: "教学人员",
    description: "从事高等教育教学工作",
    ai_score: 32,
    occupation_code: "2-08-01-01"
  },
  {
    job_name: "中等职业教育教师",
    category: "教学人员",
    description: "从事中等职业教育教学工作",
    ai_score: 28,
    occupation_code: "2-08-02-01"
  },
  {
    job_name: "中学教师",
    category: "教学人员",
    description: "从事中学教育教学工作",
    ai_score: 25,
    occupation_code: "2-08-03-01"
  },
  {
    job_name: "小学教师",
    category: "教学人员",
    description: "从事小学教育教学工作",
    ai_score: 22,
    occupation_code: "2-08-04-01"
  },
  {
    job_name: "幼儿教师",
    category: "教学人员",
    description: "从事幼儿教育教学工作",
    ai_score: 15,
    occupation_code: "2-08-05-01"
  },
  {
    job_name: "特殊教育教师",
    category: "教学人员",
    description: "从事特殊教育教学工作",
    ai_score: 12,
    occupation_code: "2-08-06-01"
  },
  {
    job_name: "培训师",
    category: "教学人员",
    description: "从事职业培训工作",
    ai_score: 45,
    occupation_code: "2-08-07-01"
  },

  // 法律专业人员
  {
    job_name: "法官",
    category: "法律专业人员",
    description: "从事审判工作",
    ai_score: 18,
    occupation_code: "2-07-01-01"
  },
  {
    job_name: "检察官",
    category: "法律专业人员",
    description: "从事检察工作",
    ai_score: 18,
    occupation_code: "2-07-01-02"
  },
  {
    job_name: "律师",
    category: "法律专业人员",
    description: "从事法律服务工作",
    ai_score: 35,
    occupation_code: "2-07-02-01"
  },
  {
    job_name: "公证员",
    category: "法律专业人员",
    description: "从事公证工作",
    ai_score: 45,
    occupation_code: "2-07-03-01"
  },
  {
    job_name: "司法鉴定人员",
    category: "法律专业人员",
    description: "从事司法鉴定工作",
    ai_score: 45,
    occupation_code: "2-07-04-01"
  },
  {
    job_name: "书记员",
    category: "法律专业人员",
    description: "从事法庭记录工作",
    ai_score: 55,
    occupation_code: "2-07-05-01"
  },

  // 经济和金融专业人员
  {
    job_name: "经济专业人员",
    category: "金融经济人员",
    description: "从事经济分析和咨询工作",
    ai_score: 45,
    occupation_code: "2-06-01-01"
  },
  {
    job_name: "统计专业人员",
    category: "金融经济人员",
    description: "从事统计分析和数据处理工作",
    ai_score: 55,
    occupation_code: "2-06-02-01"
  },
  {
    job_name: "会计专业人员",
    category: "金融经济人员",
    description: "从事会计核算和财务管理工作",
    ai_score: 62,
    occupation_code: "2-06-03-01"
  },
  {
    job_name: "审计专业人员",
    category: "金融经济人员",
    description: "从事审计工作",
    ai_score: 58,
    occupation_code: "2-06-04-01"
  },
  {
    job_name: "税务专业人员",
    category: "金融经济人员",
    description: "从事税务工作",
    ai_score: 45,
    occupation_code: "2-06-05-01"
  },
  {
    job_name: "评估专业人员",
    category: "金融经济人员",
    description: "从事资产评估工作",
    ai_score: 48,
    occupation_code: "2-06-06-01"
  },
  {
    job_name: "拍卖师",
    category: "金融经济人员",
    description: "从事拍卖工作",
    ai_score: 35,
    occupation_code: "2-06-07-01"
  },
  {
    job_name: "银行业务人员",
    category: "金融服务人员",
    description: "从事银行业务工作",
    ai_score: 52,
    occupation_code: "2-06-08-01"
  },
  {
    job_name: "保险业务人员",
    category: "金融服务人员",
    description: "从事保险业务工作",
    ai_score: 48,
    occupation_code: "2-06-09-01"
  },
  {
    job_name: "证券专业人员",
    category: "金融服务人员",
    description: "从事证券业务工作",
    ai_score: 55,
    occupation_code: "2-06-10-01"
  },
  {
    job_name: "期货专业人员",
    category: "金融服务人员",
    description: "从事期货业务工作",
    ai_score: 52,
    occupation_code: "2-06-11-01"
  },
  {
    job_name: "投资专业人员",
    category: "金融服务人员",
    description: "从事投资管理工作",
    ai_score: 48,
    occupation_code: "2-06-12-01"
  },
  {
    job_name: "金融科技师",
    category: "金融服务人员",
    description: "从事金融科技研发和应用",
    ai_score: 45,
    occupation_code: "2-06-14-00"
  },
  {
    job_name: "数字化管理师",
    category: "金融经济人员",
    description: "从事企业数字化管理工作",
    ai_score: 42,
    occupation_code: "2-06-07-13"
  },

  // 新闻出版专业人员
  {
    job_name: "记者",
    category: "新闻出版人员",
    description: "从事新闻采访和报道工作",
    ai_score: 42,
    occupation_code: "2-10-01-01"
  },
  {
    job_name: "编辑",
    category: "新闻出版人员",
    description: "从事编辑工作",
    ai_score: 48,
    occupation_code: "2-10-01-02"
  },
  {
    job_name: "数字出版编辑",
    category: "新闻出版人员",
    description: "从事数字出版编辑工作",
    ai_score: 48,
    occupation_code: "2-10-02-04"
  },
  {
    job_name: "网络编辑",
    category: "新闻出版人员",
    description: "从事网络内容编辑工作",
    ai_score: 48,
    occupation_code: "2-10-02-05"
  },
  {
    job_name: "校对人员",
    category: "新闻出版人员",
    description: "从事校对工作",
    ai_score: 72,
    occupation_code: "2-10-03-01"
  },
  {
    job_name: "翻译人员",
    category: "新闻出版人员",
    description: "从事翻译工作",
    ai_score: 78,
    occupation_code: "2-10-04-01"
  },
  {
    job_name: "播音员",
    category: "新闻出版人员",
    description: "从事播音工作",
    ai_score: 38,
    occupation_code: "2-10-05-01"
  },
  {
    job_name: "主持人",
    category: "新闻出版人员",
    description: "从事主持工作",
    ai_score: 18,
    occupation_code: "2-10-05-02"
  },

  // 文化艺术专业人员
  {
    job_name: "文学创作人员",
    category: "文化艺术人员",
    description: "从事文学创作工作",
    ai_score: 35,
    occupation_code: "2-09-01-01"
  },
  {
    job_name: "编剧",
    category: "文化艺术人员",
    description: "从事剧本创作工作",
    ai_score: 38,
    occupation_code: "2-09-01-02"
  },
  {
    job_name: "导演",
    category: "文化艺术人员",
    description: "从事导演工作",
    ai_score: 20,
    occupation_code: "2-09-02-01"
  },
  {
    job_name: "演员",
    category: "文化艺术人员",
    description: "从事表演工作",
    ai_score: 15,
    occupation_code: "2-09-02-02"
  },
  {
    job_name: "指挥",
    category: "文化艺术人员",
    description: "从事音乐指挥工作",
    ai_score: 8,
    occupation_code: "2-09-03-01"
  },
  {
    job_name: "作曲家",
    category: "文化艺术人员",
    description: "从事音乐创作工作",
    ai_score: 25,
    occupation_code: "2-09-03-02"
  },
  {
    job_name: "演奏员",
    category: "文化艺术人员",
    description: "从事乐器演奏工作",
    ai_score: 20,
    occupation_code: "2-09-03-03"
  },
  {
    job_name: "歌唱演员",
    category: "文化艺术人员",
    description: "从事歌唱表演工作",
    ai_score: 15,
    occupation_code: "2-09-03-04"
  },
  {
    job_name: "舞蹈演员",
    category: "文化艺术人员",
    description: "从事舞蹈表演工作",
    ai_score: 15,
    occupation_code: "2-09-04-01"
  },
  {
    job_name: "美术专业人员",
    category: "文化艺术人员",
    description: "从事美术创作工作",
    ai_score: 28,
    occupation_code: "2-09-05-01"
  },
  {
    job_name: "设计人员",
    category: "文化艺术人员",
    description: "从事设计工作",
    ai_score: 42,
    occupation_code: "2-09-06-01"
  },
  {
    job_name: "数字媒体艺术专业人员",
    category: "文化艺术人员",
    description: "从事数字媒体艺术创作工作",
    ai_score: 45,
    occupation_code: "2-09-06-07"
  },
  {
    job_name: "摄影家",
    category: "文化艺术人员",
    description: "从事摄影创作工作",
    ai_score: 35,
    occupation_code: "2-09-07-01"
  },
  {
    job_name: "文物鉴定人员",
    category: "文化艺术人员",
    description: "从事文物鉴定工作",
    ai_score: 20,
    occupation_code: "2-09-08-01"
  },
  {
    job_name: "图书资料专业人员",
    category: "文化艺术人员",
    description: "从事图书资料管理工作",
    ai_score: 45,
    occupation_code: "2-09-09-01"
  },
  {
    job_name: "档案专业人员",
    category: "文化艺术人员",
    description: "从事档案管理工作",
    ai_score: 48,
    occupation_code: "2-09-10-01"
  },

  // 体育专业人员
  {
    job_name: "教练员",
    category: "体育专业人员",
    description: "从事体育训练指导工作",
    ai_score: 20,
    occupation_code: "2-11-01-01"
  },
  {
    job_name: "裁判员",
    category: "体育专业人员",
    description: "从事体育竞赛裁判工作",
    ai_score: 15,
    occupation_code: "2-11-02-01"
  },
  {
    job_name: "运动员",
    category: "体育专业人员",
    description: "从事体育竞技工作",
    ai_score: 8,
    occupation_code: "2-11-03-01"
  },

  // ========== 第三大类：办事人员和有关人员 ==========
  {
    job_name: "行政业务办理人员",
    category: "行政办事人员",
    description: "从事行政业务办理工作",
    ai_score: 48,
    occupation_code: "3-01-01-01"
  },
  {
    job_name: "行政事务处理人员",
    category: "行政办事人员",
    description: "从事行政事务处理工作",
    ai_score: 52,
    occupation_code: "3-01-01-02"
  },
  {
    job_name: "秘书",
    category: "行政办事人员",
    description: "从事秘书工作",
    ai_score: 55,
    occupation_code: "3-01-02-01"
  },
  {
    job_name: "公关员",
    category: "行政办事人员",
    description: "从事公共关系工作",
    ai_score: 42,
    occupation_code: "3-01-02-02"
  },
  {
    job_name: "收发员",
    category: "行政办事人员",
    description: "从事文件收发工作",
    ai_score: 62,
    occupation_code: "3-01-03-01"
  },
  {
    job_name: "打字员",
    category: "行政办事人员",
    description: "从事打字工作",
    ai_score: 85,
    occupation_code: "3-01-03-02"
  },
  {
    job_name: "速录师",
    category: "行政办事人员",
    description: "从事速录工作",
    ai_score: 78,
    occupation_code: "3-01-03-03"
  },
  {
    job_name: "计算机操作员",
    category: "行政办事人员",
    description: "从事计算机操作工作",
    ai_score: 58,
    occupation_code: "3-01-04-01"
  },
  {
    job_name: "档案数字化管理师",
    category: "行政办事人员",
    description: "从事档案数字化管理工作",
    ai_score: 42,
    occupation_code: "3-01-05-01"
  },

  // 安全和消防人员
  {
    job_name: "保安员",
    category: "安全消防人员",
    description: "从事安全保卫工作",
    ai_score: 35,
    occupation_code: "3-02-01-01"
  },
  {
    job_name: "消防员",
    category: "安全消防人员",
    description: "从事消防救援工作",
    ai_score: 15,
    occupation_code: "3-02-02-01"
  },
  {
    job_name: "消防设施操作员",
    category: "安全消防人员",
    description: "从事消防设施操作工作",
    ai_score: 32,
    occupation_code: "3-02-02-02"
  },
  {
    job_name: "安全防范系统安装维护员",
    category: "安全消防人员",
    description: "从事安全防范系统安装维护工作",
    ai_score: 38,
    occupation_code: "3-02-03-01"
  },

  // ========== 第四大类：社会生产服务和生活服务人员 ==========
  // 批发与零售服务人员
  {
    job_name: "营业员",
    category: "销售服务人员",
    description: "从事商品销售工作",
    ai_score: 45,
    occupation_code: "4-01-01-01"
  },
  {
    job_name: "收银员",
    category: "销售服务人员",
    description: "从事收银工作",
    ai_score: 75,
    occupation_code: "4-01-01-02"
  },
  {
    job_name: "推销员",
    category: "销售服务人员",
    description: "从事商品推销工作",
    ai_score: 38,
    occupation_code: "4-01-02-01"
  },
  {
    job_name: "采购员",
    category: "销售服务人员",
    description: "从事采购工作",
    ai_score: 42,
    occupation_code: "4-01-03-01"
  },
  {
    job_name: "电子商务师",
    category: "销售服务人员",
    description: "从事电子商务运营工作",
    ai_score: 52,
    occupation_code: "4-01-06-01"
  },
  {
    job_name: "互联网营销师",
    category: "销售服务人员",
    description: "从事互联网营销工作",
    ai_score: 42,
    occupation_code: "4-01-06-02"
  },
  {
    job_name: "供应链管理师",
    category: "销售服务人员",
    description: "从事供应链管理工作",
    ai_score: 45,
    occupation_code: "4-02-06-05"
  },
  {
    job_name: "全媒体运营师",
    category: "销售服务人员",
    description: "从事全媒体运营工作",
    ai_score: 45,
    occupation_code: "4-13-01-05"
  },

  // 交通运输服务人员
  {
    job_name: "轨道交通运输服务人员",
    category: "交通运输人员",
    description: "从事轨道交通客运服务",
    ai_score: 45,
    occupation_code: "4-02-01-01"
  },
  {
    job_name: "道路运输服务人员",
    category: "交通运输人员",
    description: "从事道路运输服务",
    ai_score: 38,
    occupation_code: "4-02-02-01"
  },
  {
    job_name: "水上运输服务人员",
    category: "交通运输人员",
    description: "从事水上运输服务",
    ai_score: 32,
    occupation_code: "4-02-03-01"
  },
  {
    job_name: "航空运输服务人员",
    category: "交通运输人员",
    description: "从事航空运输服务",
    ai_score: 35,
    occupation_code: "4-02-04-01"
  },
  {
    job_name: "装卸搬运人员",
    category: "交通运输人员",
    description: "从事装卸搬运工作",
    ai_score: 55,
    occupation_code: "4-02-05-01"
  },

  // 住宿和餐饮服务人员
  {
    job_name: "前厅服务员",
    category: "住宿服务人员",
    description: "从事酒店前厅服务工作",
    ai_score: 45,
    occupation_code: "4-03-01-01"
  },
  {
    job_name: "客房服务员",
    category: "住宿服务人员",
    description: "从事酒店客房服务工作",
    ai_score: 45,
    occupation_code: "4-03-01-02"
  },
  {
    job_name: "中式烹调师",
    category: "餐饮服务人员",
    description: "从事中式菜肴烹调工作",
    ai_score: 22,
    occupation_code: "4-03-02-01"
  },
  {
    job_name: "中式面点师",
    category: "餐饮服务人员",
    description: "从事中式面点制作工作",
    ai_score: 22,
    occupation_code: "4-03-02-02"
  },
  {
    job_name: "西式烹调师",
    category: "餐饮服务人员",
    description: "从事西式菜肴烹调工作",
    ai_score: 22,
    occupation_code: "4-03-02-03"
  },
  {
    job_name: "西式面点师",
    category: "餐饮服务人员",
    description: "从事西式面点制作工作",
    ai_score: 22,
    occupation_code: "4-03-02-04"
  },
  {
    job_name: "餐厅服务员",
    category: "餐饮服务人员",
    description: "从事餐厅服务工作",
    ai_score: 45,
    occupation_code: "4-03-03-01"
  },
  {
    job_name: "茶艺师",
    category: "餐饮服务人员",
    description: "从事茶艺服务工作",
    ai_score: 28,
    occupation_code: "4-03-03-02"
  },
  {
    job_name: "咖啡师",
    category: "餐饮服务人员",
    description: "从事咖啡制作和服务工作",
    ai_score: 32,
    occupation_code: "4-03-03-03"
  },
  {
    job_name: "调酒师",
    category: "餐饮服务人员",
    description: "从事调酒服务工作",
    ai_score: 22,
    occupation_code: "4-03-03-04"
  },

  // 信息传输、软件和信息技术服务人员
  {
    job_name: "信息通信网络机务员",
    category: "信息技术服务人员",
    description: "从事信息通信网络机务工作",
    ai_score: 48,
    occupation_code: "4-04-02-01"
  },
  {
    job_name: "信息通信网络动力机务员",
    category: "信息技术服务人员",
    description: "从事信息通信网络动力机务工作",
    ai_score: 48,
    occupation_code: "4-04-02-03"
  },
  {
    job_name: "无线电监测与设备运维员",
    category: "信息技术服务人员",
    description: "从事无线电监测与设备运维工作",
    ai_score: 45,
    occupation_code: "4-04-02-05"
  },
  {
    job_name: "信息通信网络运行管理员",
    category: "信息技术服务人员",
    description: "从事信息通信网络运行管理工作",
    ai_score: 48,
    occupation_code: "4-04-04-01"
  },
  {
    job_name: "网络与信息安全管理员",
    category: "信息技术服务人员",
    description: "从事网络与信息安全管理工作",
    ai_score: 48,
    occupation_code: "4-04-04-02"
  },
  {
    job_name: "信息通信信息化系统管理员",
    category: "信息技术服务人员",
    description: "从事信息通信信息化系统管理工作",
    ai_score: 45,
    occupation_code: "4-04-04-03"
  },
  {
    job_name: "信息安全测试员",
    category: "信息技术服务人员",
    description: "从事信息安全测试工作",
    ai_score: 45,
    occupation_code: "4-04-04-04"
  },
  {
    job_name: "数字化解决方案设计师",
    category: "信息技术服务人员",
    description: "从事数字化解决方案设计工作",
    ai_score: 45,
    occupation_code: "4-04-04-05"
  },
  {
    job_name: "密码技术应用员",
    category: "信息技术服务人员",
    description: "从事密码技术应用工作",
    ai_score: 45,
    occupation_code: "4-04-04-06"
  },
  {
    job_name: "计算机程序设计员",
    category: "信息技术服务人员",
    description: "从事计算机程序设计工作",
    ai_score: 55,
    occupation_code: "4-04-05-01"
  },
  {
    job_name: "计算机软件测试员",
    category: "信息技术服务人员",
    description: "从事计算机软件测试工作",
    ai_score: 62,
    occupation_code: "4-04-05-02"
  },
  {
    job_name: "数据库运行管理员",
    category: "信息技术服务人员",
    description: "从事数据库运行管理工作",
    ai_score: 48,
    occupation_code: "4-04-05-04"
  },
  {
    job_name: "人工智能训练师",
    category: "信息技术服务人员",
    description: "从事人工智能训练工作",
    ai_score: 45,
    occupation_code: "4-04-05-05"
  },
  {
    job_name: "区块链应用操作员",
    category: "信息技术服务人员",
    description: "从事区块链应用操作工作",
    ai_score: 42,
    occupation_code: "4-04-05-06"
  },
  {
    job_name: "服务机器人应用技术员",
    category: "信息技术服务人员",
    description: "从事服务机器人应用技术工作",
    ai_score: 45,
    occupation_code: "4-04-05-07"
  },
  {
    job_name: "电子数据取证分析师",
    category: "信息技术服务人员",
    description: "从事电子数据取证分析工作",
    ai_score: 55,
    occupation_code: "4-04-05-08"
  },
  {
    job_name: "信息系统适配验证师",
    category: "信息技术服务人员",
    description: "从事信息系统适配验证工作",
    ai_score: 45,
    occupation_code: "4-04-05-09"
  },
  {
    job_name: "数字孪生应用技术员",
    category: "信息技术服务人员",
    description: "从事数字孪生应用技术工作",
    ai_score: 45,
    occupation_code: "4-04-05-10"
  },
  {
    job_name: "虚拟现实产品设计师",
    category: "信息技术服务人员",
    description: "从事虚拟现实产品设计工作",
    ai_score: 40,
    occupation_code: "4-04-05-11"
  },

  // 居民服务人员
  {
    job_name: "家政服务员",
    category: "居民服务人员",
    description: "从事家政服务工作",
    ai_score: 18,
    occupation_code: "4-10-01-01"
  },
  {
    job_name: "养老护理员",
    category: "居民服务人员",
    description: "从事老年人护理工作",
    ai_score: 12,
    occupation_code: "4-10-01-02"
  },
  {
    job_name: "育婴员",
    category: "居民服务人员",
    description: "从事婴幼儿护理工作",
    ai_score: 12,
    occupation_code: "4-10-01-03"
  },
  {
    job_name: "保育员",
    category: "居民服务人员",
    description: "从事儿童保育工作",
    ai_score: 45,
    occupation_code: "4-10-01-04"
  },
  {
    job_name: "保洁员",
    category: "居民服务人员",
    description: "从事清洁保洁工作",
    ai_score: 45,
    occupation_code: "4-10-02-01"
  },
  {
    job_name: "洗衣师",
    category: "居民服务人员",
    description: "从事洗衣服务工作",
    ai_score: 38,
    occupation_code: "4-10-03-01"
  },
  {
    job_name: "美容师",
    category: "居民服务人员",
    description: "从事美容服务工作",
    ai_score: 20,
    occupation_code: "4-10-04-01"
  },
  {
    job_name: "美发师",
    category: "居民服务人员",
    description: "从事美发服务工作",
    ai_score: 18,
    occupation_code: "4-10-04-02"
  },
  {
    job_name: "化妆师",
    category: "居民服务人员",
    description: "从事化妆服务工作",
    ai_score: 22,
    occupation_code: "4-10-04-03"
  },
  {
    job_name: "美甲师",
    category: "居民服务人员",
    description: "从事美甲服务工作",
    ai_score: 28,
    occupation_code: "4-10-04-04"
  },
  {
    job_name: "按摩师",
    category: "居民服务人员",
    description: "从事按摩服务工作",
    ai_score: 20,
    occupation_code: "4-10-05-01"
  },
  {
    job_name: "修脚师",
    category: "居民服务人员",
    description: "从事修脚服务工作",
    ai_score: 15,
    occupation_code: "4-10-05-02"
  },
  {
    job_name: "婚姻介绍工作人员",
    category: "居民服务人员",
    description: "从事婚姻介绍服务工作",
    ai_score: 35,
    occupation_code: "4-10-06-01"
  },
  {
    job_name: "殡葬服务人员",
    category: "居民服务人员",
    description: "从事殡葬服务工作",
    ai_score: 15,
    occupation_code: "4-10-07-01"
  },

  // 修理制作服务人员
  {
    job_name: "汽车维修工",
    category: "修理服务人员",
    description: "从事汽车维修工作",
    ai_score: 38,
    occupation_code: "4-12-01-01"
  },
  {
    job_name: "信息通信网络终端维修员",
    category: "修理服务人员",
    description: "从事信息通信网络终端维修工作",
    ai_score: 48,
    occupation_code: "4-12-02-03"
  },
  {
    job_name: "家用电器产品维修工",
    category: "修理服务人员",
    description: "从事家用电器维修工作",
    ai_score: 42,
    occupation_code: "4-12-03-01"
  },
  {
    job_name: "钟表维修工",
    category: "修理服务人员",
    description: "从事钟表维修工作",
    ai_score: 32,
    occupation_code: "4-12-04-01"
  },
  {
    job_name: "自行车维修工",
    category: "修理服务人员",
    description: "从事自行车维修工作",
    ai_score: 38,
    occupation_code: "4-12-05-01"
  },
  {
    job_name: "鞋帽修理人员",
    category: "修理服务人员",
    description: "从事鞋帽修理工作",
    ai_score: 32,
    occupation_code: "4-12-06-01"
  },

  // 文化、体育和娱乐服务人员
  {
    job_name: "导游",
    category: "文化娱乐人员",
    description: "从事导游服务工作",
    ai_score: 42,
    occupation_code: "4-13-02-01"
  },
  {
    job_name: "展览讲解员",
    category: "文化娱乐人员",
    description: "从事展览讲解工作",
    ai_score: 45,
    occupation_code: "4-13-02-02"
  },
  {
    job_name: "社会体育指导员",
    category: "文化娱乐人员",
    description: "从事社会体育指导工作",
    ai_score: 25,
    occupation_code: "4-13-03-01"
  },
  {
    job_name: "健身教练",
    category: "文化娱乐人员",
    description: "从事健身指导工作",
    ai_score: 20,
    occupation_code: "4-13-03-02"
  },
  {
    job_name: "电子竞技员",
    category: "文化娱乐人员",
    description: "从事电子竞技工作",
    ai_score: 35,
    occupation_code: "4-13-05-01"
  },
  {
    job_name: "电影放映员",
    category: "文化娱乐人员",
    description: "从事电影放映工作",
    ai_score: 45,
    occupation_code: "4-13-04-01"
  },

  // 其他服务人员
  {
    job_name: "智能楼宇管理员",
    category: "其他服务人员",
    description: "从事智能楼宇管理工作",
    ai_score: 42,
    occupation_code: "4-06-01-04"
  },
  {
    job_name: "商务数据分析师",
    category: "其他服务人员",
    description: "从事商务数据分析工作",
    ai_score: 55,
    occupation_code: "4-07-02-05"
  },
  {
    job_name: "航空气象员",
    category: "其他服务人员",
    description: "从事航空气象服务工作",
    ai_score: 58,
    occupation_code: "4-08-01-01"
  },
  {
    job_name: "大地测量员",
    category: "其他服务人员",
    description: "从事大地测量工作",
    ai_score: 55,
    occupation_code: "4-08-03-01"
  },
  {
    job_name: "摄影测量员",
    category: "其他服务人员",
    description: "从事摄影测量工作",
    ai_score: 62,
    occupation_code: "4-08-03-02"
  },
  {
    job_name: "工程测量员",
    category: "其他服务人员",
    description: "从事工程测量工作",
    ai_score: 52,
    occupation_code: "4-08-03-04"
  },
  {
    job_name: "海洋测绘员",
    category: "其他服务人员",
    description: "从事海洋测绘工作",
    ai_score: 52,
    occupation_code: "4-08-03-06"
  },
  {
    job_name: "建筑信息模型技术员",
    category: "其他服务人员",
    description: "从事建筑信息模型技术工作",
    ai_score: 42,
    occupation_code: "4-08-08-23"
  },
  {
    job_name: "工业设计工艺师",
    category: "其他服务人员",
    description: "从事工业设计工艺工作",
    ai_score: 40,
    occupation_code: "4-08-08-26"
  },
  {
    job_name: "桌面游戏设计师",
    category: "其他服务人员",
    description: "从事桌面游戏设计工作",
    ai_score: 38,
    occupation_code: "4-08-08-29"
  },
  {
    job_name: "碳汇计量评估师",
    category: "其他服务人员",
    description: "从事碳汇计量评估工作",
    ai_score: 48,
    occupation_code: "4-09-07-05"
  },

  // ========== 第五大类：农、林、牧、渔业生产及辅助人员 ==========
  {
    job_name: "农作物生产人员",
    category: "农林牧渔人员",
    description: "从事农作物种植生产工作",
    ai_score: 45,
    occupation_code: "5-01-01-01"
  },
  {
    job_name: "园艺作物生产人员",
    category: "农林牧渔人员",
    description: "从事园艺作物种植生产工作",
    ai_score: 45,
    occupation_code: "5-01-02-01"
  },
  {
    job_name: "中药材种植人员",
    category: "农林牧渔人员",
    description: "从事中药材种植生产工作",
    ai_score: 45,
    occupation_code: "5-01-03-01"
  },
  {
    job_name: "林业生产人员",
    category: "农林牧渔人员",
    description: "从事林业生产工作",
    ai_score: 28,
    occupation_code: "5-02-01-01"
  },
  {
    job_name: "畜禽生产人员",
    category: "农林牧渔人员",
    description: "从事畜禽养殖生产工作",
    ai_score: 30,
    occupation_code: "5-03-01-01"
  },
  {
    job_name: "水产捕捞及养殖人员",
    category: "农林牧渔人员",
    description: "从事水产捕捞和养殖工作",
    ai_score: 28,
    occupation_code: "5-04-01-01"
  },
  {
    job_name: "农业数字化技术员",
    category: "农林牧渔人员",
    description: "从事农业数字化技术服务工作",
    ai_score: 40,
    occupation_code: "5-05-01-03"
  },

  // ========== 第六大类：生产制造及有关人员 ==========
  // 农副产品加工人员
  {
    job_name: "粮油加工人员",
    category: "生产制造人员",
    description: "从事粮油加工工作",
    ai_score: 48,
    occupation_code: "6-01-01-01"
  },
  {
    job_name: "制糖人员",
    category: "生产制造人员",
    description: "从事制糖工作",
    ai_score: 45,
    occupation_code: "6-01-02-01"
  },
  {
    job_name: "畜禽制品加工人员",
    category: "生产制造人员",
    description: "从事畜禽制品加工工作",
    ai_score: 30,
    occupation_code: "6-01-03-01"
  },
  {
    job_name: "水产品加工人员",
    category: "生产制造人员",
    description: "从事水产品加工工作",
    ai_score: 28,
    occupation_code: "6-01-04-01"
  },
  {
    job_name: "果蔬坚果加工人员",
    category: "生产制造人员",
    description: "从事果蔬坚果加工工作",
    ai_score: 42,
    occupation_code: "6-01-05-01"
  },

  // 原材料加工人员
  {
    job_name: "化工产品生产人员",
    category: "生产制造人员",
    description: "从事化工产品生产工作",
    ai_score: 42,
    occupation_code: "6-11-01-01"
  },
  {
    job_name: "化工总控工",
    category: "生产制造人员",
    description: "从事化工生产控制工作",
    ai_score: 42,
    occupation_code: "6-11-01-03"
  },
  {
    job_name: "炼铁人员",
    category: "生产制造人员",
    description: "从事炼铁工作",
    ai_score: 38,
    occupation_code: "6-02-01-01"
  },
  {
    job_name: "炼钢人员",
    category: "生产制造人员",
    description: "从事炼钢工作",
    ai_score: 38,
    occupation_code: "6-02-02-01"
  },
  {
    job_name: "有色金属冶炼人员",
    category: "生产制造人员",
    description: "从事有色金属冶炼工作",
    ai_score: 42,
    occupation_code: "6-02-03-01"
  },

  // 机械制造加工人员
  {
    job_name: "机械冷加工人员",
    category: "生产制造人员",
    description: "从事机械冷加工工作",
    ai_score: 48,
    occupation_code: "6-18-01-01"
  },
  {
    job_name: "机械热加工人员",
    category: "生产制造人员",
    description: "从事机械热加工工作",
    ai_score: 42,
    occupation_code: "6-18-02-01"
  },
  {
    job_name: "特种加工设备操作人员",
    category: "生产制造人员",
    description: "从事特种加工设备操作工作",
    ai_score: 45,
    occupation_code: "6-18-03-01"
  },
  {
    job_name: "增材制造设备操作员",
    category: "生产制造人员",
    description: "从事增材制造设备操作工作",
    ai_score: 35,
    occupation_code: "6-18-01-13"
  },

  // 电子元器件制造人员
  {
    job_name: "电子元件制造人员",
    category: "生产制造人员",
    description: "从事电子元件制造工作",
    ai_score: 52,
    occupation_code: "6-25-01-01"
  },
  {
    job_name: "电子器件制造人员",
    category: "生产制造人员",
    description: "从事电子器件制造工作",
    ai_score: 52,
    occupation_code: "6-25-02-01"
  },
  {
    job_name: "计算机零部件制造人员",
    category: "生产制造人员",
    description: "从事计算机零部件制造工作",
    ai_score: 55,
    occupation_code: "6-25-03-01"
  },

  // 工业机器人系统操作人员
  {
    job_name: "工业机器人系统运维员",
    category: "生产制造人员",
    description: "从事工业机器人系统运维工作",
    ai_score: 42,
    occupation_code: "6-31-07-01"
  },
  {
    job_name: "工业视觉系统运维员",
    category: "生产制造人员",
    description: "从事工业视觉系统运维工作",
    ai_score: 45,
    occupation_code: "6-31-07-02"
  },
  {
    job_name: "工业机器人系统操作员",
    category: "生产制造人员",
    description: "从事工业机器人系统操作工作",
    ai_score: 42,
    occupation_code: "6-31-07-03"
  },

  // 建筑施工人员
  {
    job_name: "砌筑工",
    category: "建筑施工人员",
    description: "从事砌筑工作",
    ai_score: 32,
    occupation_code: "6-29-01-01"
  },
  {
    job_name: "混凝土工",
    category: "建筑施工人员",
    description: "从事混凝土施工工作",
    ai_score: 18,
    occupation_code: "6-29-01-02"
  },
  {
    job_name: "钢筋工",
    category: "建筑施工人员",
    description: "从事钢筋加工和安装工作",
    ai_score: 18,
    occupation_code: "6-29-01-03"
  },
  {
    job_name: "架子工",
    category: "建筑施工人员",
    description: "从事脚手架搭设工作",
    ai_score: 20,
    occupation_code: "6-29-01-04"
  },
  {
    job_name: "防水工",
    category: "建筑施工人员",
    description: "从事建筑防水工作",
    ai_score: 32,
    occupation_code: "6-29-01-05"
  },
  {
    job_name: "装饰装修工",
    category: "建筑施工人员",
    description: "从事建筑装饰装修工作",
    ai_score: 35,
    occupation_code: "6-29-02-01"
  },
  {
    job_name: "电工",
    category: "建筑施工人员",
    description: "从事电气安装工作",
    ai_score: 42,
    occupation_code: "6-29-03-01"
  },
  {
    job_name: "焊工",
    category: "建筑施工人员",
    description: "从事焊接工作",
    ai_score: 38,
    occupation_code: "6-29-03-02"
  },

  // ========== 第七大类：军人 ==========
  {
    job_name: "军人",
    category: "军人",
    description: "从事军事工作",
    ai_score: 8,
    occupation_code: "7-00-00-00"
  },

  // ========== 第八大类：不便分类的其他从业人员 ==========
  {
    job_name: "其他从业人员",
    category: "其他人员",
    description: "从事其他工作",
    ai_score: 45,
    occupation_code: "8-00-00-00"
  }
]

export const occupations = enhanceOccupations(rawOccupations)
