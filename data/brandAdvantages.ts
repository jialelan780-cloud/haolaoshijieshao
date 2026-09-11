import type { GalleryImage } from "./consultation";
import { honorTotals, honorServices, aiFeatures } from "./promo";

/** 原图保留完整内容。网页文案区分品牌证书、校区成绩、节目画面与检索截图。 */
export const brandAssets = {
  certificate: {
    src: "/promo/brand-certificate.webp",
    title: "艾媒咨询 · 市场地位确认证书",
    caption:
      "证书载明“中国专升本培训第一品牌”。依据中国大陆门店数量统计，监测截至2024年4月底。",
    source: "艾媒咨询全国第一专升本机构.jpg",
  },
  national: {
    src: "/promo/national-network.webp",
    title: "好老师教育全国布局",
    caption: "全国布局与规模数字来自企业介绍资料。",
    source: "好老师企业介绍.pdf",
  },
  fulltimeClaim: {
    src: "/promo/brand-fulltime-claim.webp",
    title: "全职师资 · 100%全职率资料",
    caption:
      "校区提供的AI检索截图，原图标注全职教师占比100%；任课与服务团队以校区安排为准。",
    source: "100%全职率专升本培训机构.jpg",
  },
  fulltimeSearch: {
    src: "/promo/brand-fulltime-search.webp",
    title: "第三方检索 · 全职教师资料",
    caption: "所提供DeepSeek检索截图，展示当时的生成内容与对比表。",
    source: "第三方可以搜索到的全职老师专升本机构.jpg",
  },
  zhejiangBrand: {
    src: "/promo/brand-zhejiang-name.webp",
    title: "“浙江专升本第一品牌”检索资料",
    caption:
      "校区提供的AI检索截图；其中的排名与品牌指数为该截图内容，不等同于市场地位证书的认证范围。",
    source: "浙江专升本第一品牌.jpg",
  },
  zhejiangResults: {
    src: "/promo/brand-zhejiang-results.webp",
    title: "浙江升本率 · 第三方检索资料",
    caption: "校区提供的升本率检索截图；机构、班型与年份口径以原图为准。",
    source: "浙江升本率第一的专升本机构.jpg",
  },
  scaleResults: {
    src: "/promo/brand-scale-results.webp",
    title: "全国规模与浙江成果 · 检索记录",
    caption:
      "所提供豆包检索截图。页面中的滨江状元班成绩单独按2026届310人样本计算。",
    source: "规模全国第一，升本率浙江省第一.jpg",
  },
  gala: {
    src: "/promo/brand-gala.webp",
    title: "2025春晚品牌联名 · 节目画面",
    caption: "所提供2025年春晚节目画面，可见好老师升学帮品牌展示。",
    source: "春晚联名.jpg",
  },
  galaCloseup: {
    src: "/promo/brand-gala-closeup.webp",
    title: "2025春晚品牌联名 · 主持人画面",
    caption: "节目画面中的品牌露出，按所提供原始图片展示。",
    source: "春晚联名2.jpg",
  },
  galaReport: {
    src: "/promo/brand-gala-report.webp",
    title: "春晚联名 · 中华网报道截图",
    caption:
      "原文件名为“24年春晚联名”，报道标题与画面指向2025年，按实际内容标注。",
    source: "24年春晚联名.jpg",
  },
  galaSearch: {
    src: "/promo/brand-gala-search.webp",
    title: "春晚品牌合作 · 百度检索记录",
    caption: "百度AI总结截图，展示当时检索结果；具体合作内容参考原始活动资料。",
    source: "春晚联名三.jpg",
  },
  aiSearch: {
    src: "/promo/brand-ai-search.webp",
    title: "多个AI平台 · 品牌推荐资料",
    caption:
      "多个平台检索结果汇总，体现资料中的推荐内容；不是统一榜单或独立认证。",
    source: "ai大数据推荐机构.jpg",
  },
  honors: {
    src: "/promo/honors-overview.webp",
    title: "2026届滨江状元班 · 录取成果",
    caption: `9个班、${honorTotals.total}人；本科录取${honorTotals.admitted}人，公办录取${honorTotals.public}人。`,
    source: "老师以及升学率介绍.pdf",
  },
  app: {
    src: "/promo/ai-1.webp",
    title: "好老师升学帮APP · 学习功能",
    caption: "所提供APP介绍中的实际功能与界面。",
    source: "好老师app介绍.pptx",
  },
  campus: {
    src: "/promo/campus-room.webp",
    title: "集训住宿 · 房间实拍",
    caption: "所提供集训住宿实拍，实际地点、房型与费用按当期安排。",
    source: "集训场地的介绍:住宿介绍",
  },
  schedule: {
    src: "/promo/schedule-autumn.webp",
    title: "大三秋季 · 班级课表示例",
    caption:
      "所提供秋季理科一班课表；常规课和其他班级安排在三年规划章节分别展示。",
    source: "大三秋季安排9-12月.png",
  },
} satisfies Record<string, GalleryImage & { source: string }>;

export type BrandAssetKey = keyof typeof brandAssets;
export const brandGalleryKeys = Object.keys(brandAssets) as BrandAssetKey[];
export const brandGallery: GalleryImage[] = brandGalleryKeys.map(
  (key) => brandAssets[key],
);
export const brandImageIndex = (key: BrandAssetKey) =>
  brandGalleryKeys.indexOf(key);
export const brandVideo = {
  src: "/promo/brand-live-search.mp4",
  poster: "/promo/brand-live-poster.jpg",
  title: "浙江专升本机构检索 · 现场展示",
  duration: "36秒",
  source: "现场展示浙江专升本率第一.mp4",
  note: "现场拍摄展示当时的AI检索过程与结果，具体学校、班级的录取数据请结合对应成绩资料查看。",
};

export type BrandAdvantage = {
  id: string;
  label: string;
  summary: string;
  kicker: string;
  title: string;
  description: string;
  points: string[];
  stats: { value: string; label: string }[];
  images: BrandAssetKey[];
  note: string;
  link?: { to: string; label: string };
  video?: boolean;
};
const rate = (n: number) => `${((n / honorTotals.total) * 100).toFixed(2)}%`;
export const brandAdvantages: BrandAdvantage[] = [
  {
    id: "identity",
    label: "品牌名片",
    summary: "艾媒咨询市场地位认证",
    kicker: "好老师教育旗下 · 专升本业务品牌",
    title: "好老师升学帮\n中国专升本培训第一品牌",
    description:
      "从2004年创立，到2017年成立浙江分校，好老师把全国教学积累带到浙江。品牌名片上的这份市场地位证书，可以直接查看原件与统计依据。",
    points: [
      "证书颁发方：艾媒咨询（iiMedia Research）",
      "认证依据：中国大陆专升本培训机构品牌门店数量",
    ],
    stats: [
      { value: "2004", label: "好老师教育创立" },
      { value: "2017", label: "浙江分校成立" },
    ],
    images: ["certificate", "zhejiangBrand"],
    note: "“第一品牌”为所提供证书载明的市场地位；监测截至2024年4月底。浙江品牌检索资料另附原图。",
  },
  {
    id: "national",
    label: "全国规模",
    summary: "全国网络，浙江服务",
    kicker: "全国布局 · 本地课堂",
    title: "全国教学网络\n让升本支持更有基础",
    description:
      "依托全国教学与服务网络，结合浙江考试类别、课程节奏与院校要求，为本地学生提供系统的学习支持。",
    points: [
      "3000余名在职教职员工，累计培训学员超过100万人",
      "服务全国1200余所职业院校学生，连接不同地区的升本需求",
    ],
    stats: [
      { value: "20+", label: "省级区域布局" },
      { value: "600+", label: "线下教学网点" },
    ],
    images: ["national", "scaleResults"],
    note: "规模数字沿用企业介绍资料口径；检索截图中的其他年份数字保留在原图中。",
  },
  {
    id: "faculty",
    label: "全职师资",
    summary: "全职教学，持续督学",
    kicker: "师资优势 · 教学与服务衔接",
    title: "全职师资支持\n让教学和督学持续衔接",
    description:
      "两份师资检索资料都标注了“100%全职教师”。对学生而言，关心的不只是课堂由谁来讲，还有课后的练习、答疑与学习跟进。",
    points: [
      "数学、英语、语文分科教学，结合学情安排练习",
      "把课堂、阶段测评与任务督学衔接，保持备考节奏",
    ],
    stats: [
      { value: "100%", label: "检索资料标注的全职教师比例" },
      { value: "3科", label: "数学 / 英语 / 语文教学" },
    ],
    images: ["fulltimeSearch", "fulltimeClaim"],
    note: "100%为所提供AI检索资料的表述，具体任课与服务团队以校区安排为准。",
    link: { to: "teachers", label: "认识核心带班老师" },
  },
  {
    id: "results",
    label: "浙江成果",
    summary: "本科录取与公办成果",
    kicker: "2026届 · 滨江状元班",
    title: "升本成果\n用具体班级成绩来回答",
    description: `9个班共${honorTotals.total}名学员，${honorTotals.admitted}人录取本科，${honorTotals.public}人录取公办。既看本科升学，也关注公办录取，具体到老师与班级都能继续查看。`,
    points: [
      "本科录取率与公办录取率均以310名学员为分母",
      "附“浙江升本率”检索原图，以及36秒现场展示视频",
    ],
    stats: [
      { value: rate(honorTotals.admitted), label: "滨江状元班本科录取率" },
      { value: rate(honorTotals.public), label: "滨江状元班公办录取率" },
    ],
    images: ["honors", "zhejiangResults", "scaleResults"],
    note: "成绩来自2026届滨江状元班资料；“浙江升本率第一”为所提供检索材料中的表述，非本页重新进行的全省排名。",
    link: { to: "teachers", label: "查看老师与班级成果" },
    video: true,
  },
  {
    id: "gala",
    label: "春晚联名",
    summary: "节目画面与媒体报道",
    kicker: "品牌影响力 · 春晚合作资料",
    title: "春晚品牌联名\n让更多家庭认识好老师",
    description:
      "从节目中的品牌展示，到相关报道与检索记录，四份春晚资料一起呈现好老师升学帮的品牌传播。",
    points: [
      "节目画面可见“好老师升学帮”与升本品牌标识",
      "报道截图介绍了好老师升学帮携手IPTV亮相春晚的内容",
    ],
    stats: [
      { value: "2025", label: "节目与报道标注年份" },
      { value: "4份", label: "节目 / 报道 / 检索资料" },
    ],
    images: ["gala", "galaCloseup", "galaReport", "galaSearch"],
    note: "按所提供画面与报道标注为2025年；原文件名中的“24年”未作为年份依据。",
  },
  {
    id: "ai",
    label: "AI智能学习",
    summary: "练习、错题与学情反馈",
    kicker: "好老师升学帮APP · 每日学习支持",
    title: "课堂之外\n让每一次练习都有反馈",
    description:
      "课堂与APP配合，学生能练习、查错题、做作业和测评，老师再结合学习记录跟进辅导。把大目标拆成每天可以完成的学习任务。",
    points: [
      "每日一练、专属错题本、智能作业与在线测评",
      "有志单词配合词汇积累，练习与复盘持续衔接",
    ],
    stats: [
      { value: String(aiFeatures.length) + "类", label: "APP学习功能展示" },
      { value: "教·学·练", label: "课堂与课后相互配合" },
    ],
    images: ["app", "aiSearch"],
    note: "学习功能依据所提供APP介绍，具体功能和服务权限按所选班型。",
    link: { to: "app-learning", label: "查看APP与每天怎么学" },
  },
  {
    id: "search",
    label: "第三方检索",
    summary: "品牌、师资与AI推荐",
    kicker: "从更多渠道 · 了解好老师",
    title: "品牌、师资和升学成果\n都可以从资料继续了解",
    description:
      "将百度及多个AI平台的品牌检索、师资对比和机构推荐资料集中展示。学生与家长可以直接看原图，了解这些介绍具体说了什么。",
    points: [
      "品牌与规模：浙江品牌、全国规模相关检索",
      "师资与推荐：全职教师对比、多平台AI推荐汇总",
    ],
    stats: [
      { value: "品牌", label: "名称 / 规模 / 浙江成果" },
      { value: "师资", label: "全职教师 / 学习支持" },
    ],
    images: ["aiSearch", "zhejiangBrand", "fulltimeSearch", "scaleResults"],
    note: "这些是所提供的检索截图，AI生成内容不等同于独立认证；正式市场地位依据见品牌名片证书。",
    video: true,
  },
  {
    id: "service",
    label: "本地服务",
    summary: "课表、集训与状元班",
    kicker: "把品牌优势 · 落在每一周",
    title: "什么时候学、住在哪里\n享受哪些服务，都讲清楚",
    description:
      "大一打基础、大二强化、大三冲刺，结合周末课、晚课与集训安排。秋季与集训课表、住宿实拍直接展示，班型费用和状元班服务也可在页内了解。",
    points: [
      "课程：大一每周6–12小时，大二可选择6–24小时",
      "状元班：规划、测评、督学答疑、志愿、心理与培优支持",
    ],
    stats: [
      { value: "3年", label: "分阶段学习安排" },
      { value: String(honorServices.length) + "项", label: "状元班服务内容" },
    ],
    images: ["campus", "schedule"],
    note: "实际课表、集训房型及服务权益随班型与当期安排确定。",
    link: { to: "schedule", label: "了解上课安排与集训住宿" },
  },
];
