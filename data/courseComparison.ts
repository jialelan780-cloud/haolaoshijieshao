import { coursePlans } from "./promo";

// Course scope and study stages follow the latest school-provided explanation.
// Teacher tiers and agreement amounts also appear on the supplied 2026 price list.
export const holidayCampStages = [
  { year: "大一", season: "暑假集训" },
  { year: "大二", season: "寒假集训" },
  { year: "大二", season: "暑假集训" },
  { year: "大三", season: "寒假集训" },
];

export const sharedCourseServices = [
  {
    title: "平时课 + 周末课",
    lead: "每个主要班型，都包含学期课",
    text: "平时上课与周末上课结合，学习英语和高等数学／大学语文，按报考类别与班级课表安排。",
  },
  {
    title: "阶段测评 + 学科答疑",
    lead: "学完有检测，问题有人解答",
    text: "通过全阶段测评了解学习情况，配合各学科答疑辅导，发现问题后继续巩固。",
  },
  {
    title: "任务督学 + 备考支持",
    lead: "把学习计划落实到日常",
    text: "学科任务辅导、督学与备考心理辅导，帮助学生持续完成学习任务。",
  },
  {
    title: "志愿填报服务",
    lead: "从课程学习衔接到志愿选择",
    text: "结合报考类别、目标院校与专业要求提供志愿指导，具体时间跟随当年考试院安排。",
  },
];

const differences = [
  {
    price: 15800,
    holiday: "四选三",
    campCount: 3,
    duration: "60天",
    period: "考前60天集训",
    refund: "无该项保障",
    refundDetail: "未列入成绩未上线退费保障",
    focus: "兼顾实习安排",
    recommended: false,
  },
  {
    price: 18800,
    holiday: "四选三",
    campCount: 3,
    duration: "80天",
    period: "考前80天集训",
    refund: "无该项保障",
    refundDetail: "未列入成绩未上线退费保障",
    focus: "比15800档多20天",
    recommended: false,
  },
  {
    price: 21800,
    holiday: "四个全含",
    campCount: 4,
    duration: "120天",
    period: "大三12月—考试前一天",
    refund: "按协议退5000元",
    refundDetail: "未上线本科，须符合协议条件",
    focus: "完整衔接复习、练测与冲刺",
    recommended: true,
  },
  {
    price: 25800,
    holiday: "四个全含",
    campCount: 4,
    duration: "120天",
    period: "大三12月—考试前一天",
    refund: "按协议退5000元",
    refundDetail: "未上线本科，须符合协议条件",
    focus: "120天课期，教师级别提升",
    recommended: false,
  },
  {
    price: 28800,
    holiday: "四个全含",
    campCount: 4,
    duration: "约8个月",
    period: "大三9月—考试前一天",
    refund: "按协议退8000元",
    refundDetail: "未上线本科，须符合协议条件",
    focus: "封闭集训，上五休二",
    recommended: false,
  },
  {
    price: 32800,
    holiday: "四个全含",
    campCount: 4,
    duration: "约8个月",
    period: "大三9月—考试前一天",
    refund: "按协议全额退款",
    refundDetail: "未上线本科，须符合协议条件",
    focus: "更长课期，增加协议保障",
    recommended: false,
  },
];

export const mainCoursePlans = differences.map((difference) => {
  const original = coursePlans.find((plan) => plan.price === difference.price)!;
  return { ...original, ...difference };
});

export const examPreparationStages = [
  {
    date: "12月—1月",
    title: "两科总复习",
    badge: "约1个半月",
    description: "系统梳理英语 + 高等数学／大学语文，把零散知识连成体系。",
    tasks: [
      "回顾核心知识与常考题型",
      "查漏补缺，巩固薄弱模块",
      "为后续整卷训练打好基础",
    ],
  },
  {
    date: "春节后 · 2月—3月",
    title: "18套试卷训练",
    badge: "真题 + 模拟 + 单元检测",
    description:
      "从知识复习转入试卷练测，用真题、模拟卷和单元测试检验学习成果。",
    tasks: [
      "4套真题，熟悉考试题型",
      "4套模拟卷，训练作答节奏",
      "10套单元测试，定位知识短板",
    ],
  },
  {
    date: "3月中旬",
    title: "一对一填报志愿",
    badge: "最多8个志愿",
    description:
      "首次志愿在考试之前填报。老师一对一指导填写，结合类别与院校要求安排志愿。",
    tasks: [
      "明确可报院校与本科专业",
      "结合学习情况讨论志愿梯度",
      "按当年通知完成报名与志愿填报",
    ],
  },
  {
    date: "志愿填报后 · 3月—4月",
    title: "最后的考前冲刺",
    badge: "持续到考试前一天",
    description:
      "完成志愿填报后，继续集中复习与训练，把最后的时间用在关键知识和薄弱环节上。",
    tasks: [
      "回看错题，巩固高频考点",
      "保持限时训练与答题节奏",
      "按班级安排完成考前复习",
    ],
  },
];
