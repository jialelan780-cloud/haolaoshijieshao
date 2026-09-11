export const chapters = [
  { id: "national", short: "全国布局", question: "好老师是谁？" },
  { id: "brand", short: "品牌实力", question: "为什么选择好老师？" },
  { id: "opportunity", short: "为什么升本", question: "本科会带来什么可能？" },
  {
    id: "education",
    short: "升学路径",
    question: "统招与继续教育有什么不同？",
  },
  { id: "policy", short: "浙江政策", question: "浙江专升本怎么考？" },
  { id: "major-path", short: "专业查询", question: "我的专业属于什么类别？" },
  { id: "scores", short: "省控线", question: "到底要考多少分？" },
  { id: "learning", short: "教学服务", question: "怎么陪你走到本科？" },
  { id: "teachers", short: "核心师资", question: "谁来教你？" },
  { id: "app-learning", short: "每日学习", question: "报名后每天怎么学？" },
  { id: "three-years", short: "三年规划", question: "大学三年到底怎么学？" },
  { id: "schedule", short: "上课安排", question: "秋季与集训怎么上课？" },
  { id: "campus", short: "集训住宿", question: "集训期间住在哪里？" },
  { id: "next-step", short: "我的下一步", question: "现在可以做什么？" },
];
export type GalleryImage = { src: string; title: string; caption?: string };
export const faculty = [
  {
    id: "qiao",
    portrait: { width: "303.55%", left: "-187.1%", top: "-73.45%" },
    name: "乔老师",
    subject: "高等数学",
    position: "理科体系构建与高分训练",
    education: "滨江校区数学核心带班老师",
    specialties: ["高数基础重构", "题型拆解", "错题巩固"],
    fit: "数学体系需要梳理、目标公办本科的理工/经管类学生",
    total: 110,
    admitted: 106,
    public: 84,
    headline: "106 / 110 人录取本科",
    detail: "2026届圆梦、全日制、凌云3个理科班；公办录取84人。",
  },
  {
    id: "zhou",
    portrait: { width: "384.08%", left: "-140.82%", top: "-122.55%" },
    name: "周老师",
    subject: "高等数学",
    position: "基础衔接与稳定提分",
    education: "滨江校区数学核心带班老师",
    specialties: ["知识结构梳理", "题型归纳", "阶段测试"],
    fit: "基础偏弱、需要稳定学习节奏与持续反馈的学生",
    total: 110,
    admitted: 106,
    public: 82,
    headline: "106 / 110 人录取本科",
    detail: "2026届3个理科班；公办录取82人，班级最高总分275。",
  },
  {
    id: "chai",
    portrait: { width: "303.87%", left: "-190.32%", top: "-0.0%" },
    name: "柴老师",
    subject: "英语",
    position: "方法引导与过程督学",
    education: "同济大学文学硕士",
    specialties: ["英语学习方法", "文理双线带班", "任务督学"],
    fit: "需要方法指导、学习习惯与过程管理的学生",
    total: null,
    admitted: null,
    public: null,
    headline: "文理双线 · 教学与督学",
    detail: "结合文理科学生需求，衔接英语学习方法、任务督学与过程反馈。",
  },
  {
    id: "shi",
    portrait: { width: "314.0%", left: "-198.33%", top: "-6.67%" },
    name: "石老师",
    subject: "大学语文",
    position: "文科与艺术方向系统教学",
    education: "复旦大学文学博士",
    specialties: ["古代文学", "阅读分析", "写作表达"],
    fit: "语文需要系统梳理、面向文史或艺术类别的学生",
    total: 90,
    admitted: 78,
    public: 58,
    headline: "78 / 90 人录取本科",
    detail: "2026届3个文科班；公办录取58人，艺术类上岸53人。",
  },
];
export const opportunities = [
  {
    title: "就业与校招",
    before: "可关注接受专科学历的岗位与技能通道。",
    after: "能够进一步了解要求本科学历的校招和社会招聘岗位。",
    note: "岗位仍可能要求专业、技能、经验等条件。",
  },
  {
    title: "考公与考编",
    before: "按职位表筛选接受专科学历的岗位。",
    after: "可扩大到符合本科层次要求的职位范围。",
    note: "是否可报，还要核对专业、学位、身份等条件。",
  },
  {
    title: "继续读研",
    before: "通常需毕业满2年并满足院校学业要求，以同等学力身份报考。",
    after: "可按本科毕业生相应条件报考硕士研究生。",
    note: "部分专业另有要求；依据2026硕士招生规定。",
  },
  {
    title: "专业与长期发展",
    before: "可以先就业，在岗位上积累经验与技能。",
    after: "继续接受本科专业训练，积累项目、实习和校园资源。",
    note: "学历拓宽选择，发展仍取决于能力与持续学习。",
  },
];
export const educationRows = [
  [
    "学习路径",
    "普通高校专升本",
    "成人高等学历教育",
    "高等教育自学考试",
    "开放教育等",
  ],
  [
    "核心形式",
    "录取后在本科院校全日制学习",
    "按院校安排进行非脱产学习",
    "自学或助学，参加课程考试",
    "按学校培养与学习安排进行",
  ],
  [
    "适用对象",
    "符合浙江当年报考条件的考生",
    "符合对应招生条件的人群",
    "符合专业和毕业申请条件的人群",
    "符合对应招生条件的人群",
  ],
  [
    "毕业与学位",
    "达标取得本科毕业证；符合条件授予学士学位",
    "完成培养要求申请毕业；学位另有条件",
    "通过规定课程等要求申请毕业；学位另有条件",
    "完成学校要求申请毕业；学位另有条件",
  ],
];
export const policySteps = [
  ["01", "专科入学", "了解报考资格"],
  ["02", "专业定类", "确认类别与科目"],
  ["03", "大一大二", "打基础、做规划"],
  ["04", "大三报名", "同时填报志愿"],
  ["05", "统一考试", "按所选类别应考"],
  ["06", "投档录取", "符合条件可征求志愿"],
  ["07", "入学复核", "按录取院校要求办理"],
  ["08", "本科就读", "完成本科培养要求"],
];
export const subjectsFor = (category: string) =>
  ["文史类", "法学类", "教育类", "艺术类"].includes(category)
    ? ["大学语文", "英语"]
    : ["高等数学", "英语"];
export const categories = [
  "文史类",
  "理工类",
  "经管类",
  "法学类",
  "教育类",
  "农学类",
  "医学类",
  "艺术类",
];
export const controlLines = {
  years: [2022, 2023, 2024, 2025, 2026],
  rows: [
    { category: "文史类", values: [218, 221, 213, 213, 222] },
    { category: "理工类", values: [183, 182, 171, 187, 182] },
    { category: "经管类", values: [182, 188, 173, 175, 156] },
    { category: "法学类", values: [182, 177, 144, 185, 198] },
    { category: "教育类", values: [222, 227, 211, 217, 226] },
    { category: "农学类", values: [165, 179, 170, 137, 214] },
    { category: "医学类", values: [231, 211, 189, 195, 220] },
    { category: "艺术类", values: [196, 206, 198, 201, 210] },
  ],
  sources: [
    {
      title: "2022 · 浙江省教育考试院",
      url: "https://www.zjzs.net/art/2022/5/30/art_49_5673.html",
    },
    {
      title: "2023–2025 · 高校招生网历年数据",
      url: "https://zs.zjgsdx.edu.cn/zsxxzsb/zsxxlnsj",
    },
    {
      title: "2026 · 浙江省教育考试院",
      url: "https://www.zjzs.net/art/2026/5/7/art_156_12242.html",
    },
  ],
};
export const serviceSteps = [
  {
    stage: "起点",
    title: "先了解你",
    steps: ["基础测评", "学习分析", "分阶段规划"],
    text: "了解基础、时间与目标，明确从哪里开始。",
  },
  {
    stage: "日常",
    title: "把计划做到每天",
    steps: ["正式课程", "任务督学", "作业与打卡"],
    text: "课堂、APP与督学手册配合，持续积累。",
  },
  {
    stage: "进阶",
    title: "根据结果调整",
    steps: ["阶段测试", "错题分析", "冲刺训练"],
    text: "看清薄弱点，再安排下一轮巩固。",
  },
  {
    stage: "录取",
    title: "认真做好选择",
    steps: ["报名前志愿规划", "投档与征求志愿跟进", "录取与入学"],
    text: "结合类别、目标与院校要求，推进升学环节。",
  },
];
export const quizBank = {
  english: [
    {
      id: "en1",
      skill: "时态",
      question: "She ___ English every day.",
      options: ["study", "studies", "studying", "studied"],
      answer: 1,
      explanation:
        "every day 表示经常性动作；主语She为第三人称单数，使用studies。",
    },
    {
      id: "en2",
      skill: "词汇",
      question: "“improve” 最接近哪个意思？",
      options: ["忘记", "借用", "改善、提高", "结束"],
      answer: 2,
      explanation: "improve 表示改善或提高，例如 improve your English。",
    },
    {
      id: "en3",
      skill: "阅读理解",
      question:
        "Tom missed the bus, so he walked to school. Tom 为什么步行去学校？",
      options: ["他错过了公交车", "学校很远", "他不喜欢公交车", "公交车很便宜"],
      answer: 0,
      explanation: "missed the bus 表示错过公交车，so 后面给出结果。",
    },
  ],
  math: [
    {
      id: "math1",
      skill: "方程",
      question: "若 2x + 3 = 11，则 x = ?",
      options: ["3", "4", "5", "7"],
      answer: 1,
      explanation: "两边减3得到2x=8，再除以2得到x=4。",
    },
    {
      id: "math2",
      skill: "函数",
      question: "函数 y = 1 / (x − 2) 的定义域应排除哪个值？",
      options: ["0", "1", "2", "所有负数"],
      answer: 2,
      explanation: "分母不能为0，因此x不能等于2。",
    },
    {
      id: "math3",
      skill: "导数基础",
      question: "函数 f(x) = x² 的导数是？",
      options: ["x", "2x", "x³", "2"],
      answer: 1,
      explanation: "幂函数求导：(xⁿ)′ = nxⁿ⁻¹，因此(x²)′=2x。",
    },
  ],
  chinese: [
    {
      id: "cn1",
      skill: "文学常识",
      question: "《背影》的作者是？",
      options: ["鲁迅", "朱自清", "老舍", "巴金"],
      answer: 1,
      explanation: "《背影》是朱自清的散文。",
    },
    {
      id: "cn2",
      skill: "文言理解",
      question: "“学而时习之”中的“时”应理解为？",
      options: ["时间很长", "按时、时常", "当时的人", "时机不对"],
      answer: 1,
      explanation: "此处“时”表示按时、时常，修饰“习”。",
    },
    {
      id: "cn3",
      skill: "修辞辨析",
      question: "“书籍是人类进步的阶梯”使用了哪种修辞？",
      options: ["比喻", "反问", "排比", "反复"],
      answer: 0,
      explanation: "把书籍比作阶梯，属于比喻。",
    },
  ],
};
