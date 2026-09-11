// 2026-09 更新：内容来自用户提供的「好老师宣传网页」资料。
// 成果数据仅指《老师以及升学率介绍.pdf》的 2026 届滨江状元班样本。
export const asset = (name: string) => `/promo/${name}`;

export const navigation = [
  { id: 'advantages', label: '好老师优势' },
  { id: 'ai-learning', label: 'AI 智能学习' },
  { id: 'schedule', label: '上课安排' },
  { id: 'campus', label: '集训住宿' },
  { id: 'honors', label: '状元班服务' },
  { id: 'courses', label: '班型与费用' },
];

export const aiFeatures = [
  { title: '每日一练', subtitle: '把零碎时间，变成每天的进步', description: '按所在省份匹配公共科目练习，每道题配有答案和解析，课后也能继续巩固。', points: ['分科练习，随时开始', '对照解析，弄懂解题思路'], image: 'ai-2.webp' },
  { title: '专属错题本', subtitle: '做错的题，成为下一次练习的重点', description: '升本题库记录刷题历史，定位薄弱项；错题可以反复练习，减少同类失误。', points: ['保留练题记录', '错题回看与重复训练'], image: 'ai-3.webp' },
  { title: '智能作业', subtitle: '老师看见薄弱点，辅导更有针对性', description: '线下课堂配合即时练习，老师可以查看练习结果、在线批改，并根据学情安排后续辅导。', points: ['课堂学习与课后练习衔接', '根据练习反馈查漏补缺'], image: 'ai-4.webp' },
  { title: '在线测评', subtitle: '每一次测试，都留下可追踪的记录', description: '按需要选择不同难度的试卷，查看正确率、答题时长等结果，了解阶段学习情况。', points: ['分阶段评估掌握情况', '用学习记录调整复习节奏'], image: 'ai-5.webp' },
  { title: '有志单词', subtitle: '随时记一组，让词汇慢慢积累', description: '配合《一本好词》，通过游戏闯关、好友 PK 和记忆例句，把单词学习融入日常。', points: ['结合例句理解词义', '配合暑假督学任务持续打卡'], image: 'ai-7.webp' },
];

export const schedules = [
  { label: '大一 · 打基础', title: '先从一个周末开始', text: '周一至周五正常在校上课，周六、周日均开放专升本课程，按自己的时间选择。', badge: '每周 6–12 小时', rows: [ ['周六 / 周日 · 上午', '09:00–12:00', '英语'], ['周六 / 周日 · 下午', '14:00–17:00', '高等数学 / 大学语文'] ], note: '完整上 1 天为 6 小时；两天都参加为 12 小时。周六没听懂，周日可以再听。' },
  { label: '大二 · 稳步强化', title: '周末课继续，晚课也能跟上', text: '个人时间允许时，增加周一至周四晚课；周末保持两科系统学习。', badge: '每周最多 24 小时', rows: [ ['周一至周四 · 晚课', '18:00–21:00', '按对应班级安排'], ['周六 / 周日 · 上午', '09:00–12:00', '英语'], ['周六 / 周日 · 下午', '14:00–17:00', '高等数学 / 大学语文'] ], note: '4 晚 × 3 小时 + 2 天 × 6 小时 = 24 小时，这是全部参加的上限；也可每周选择 1 天完整周末课。' },
  { label: '大三 · 秋季学习', title: '精讲、训练、周测相互衔接', text: '秋季理科课表示例：上午交替安排数学、英语，下午习题巩固，周五测试。', badge: '9–12 月 · 班级课表', rows: [ ['周一至周四 · 上午', '09:30–12:00', '数学 / 英语（交替）'], ['周一至周四 · 下午', '13:00–15:00', '习题巩固'], ['周五', '按班级通知', '周五测试'] ], note: '以上为所提供秋季理科一班的课表示例，完整图含开课和节假日安排；其他班级以实际课表为准。', image: 'schedule-autumn.webp' },
  { label: '寒暑假 · 集训', title: '集中学习，也留出休息时间', text: '三年课程图解中的集训作息：周一至周五集中学习，周六、周日休息。', badge: '上课 5 天 · 休息 2 天', rows: [ ['上午', '09:00–12:00', '课程学习'], ['下午', '14:00–17:00', '课程学习'], ['晚上', '18:00–21:30', '集中学习'] ], note: '该作息来自三年课程图解。文、理科暑假班的具体起止时间与休息日另见下方原课表，以所在班级通知为准。' },
];

export const campusPhotos = [
  { image: 'campus-room.webp', title: '宿舍公共空间', text: '大窗引入自然采光，房间设有沙发与公共休息区域，课余可以在这里放松。' },
  { image: 'campus-six-person.webp', title: '六人间展示', text: '实拍为六人间上下铺布局，床位与公共活动空间分区，整体环境一眼看清。' },
  { image: 'campus-desks.webp', title: '书桌与日常收纳', text: '靠墙设置书桌和座椅，可以摆放书本与学习用品，课后复习也有落脚处。' },
  { image: 'campus-laundry.webp', title: '洗衣与洗漱', text: '实拍房型配有独立洗衣机、双洗漱台和镜面，日常洗衣、洗漱更方便。' },
  { image: 'campus-bed.webp', title: '床位细节', text: '上下铺配有床帘，照片展示床铺、爬梯与窗边位置，方便了解休息空间。' },
  { image: 'campus-bathroom.webp', title: '独立卫浴', text: '房间配套卫生间与淋浴区域，实拍展示卫浴设施与内部布局。' },
];

export const honorClasses = [
  { teacher: '乔老师', name: '圆梦理科 1 班', total: 30, admitted: 29, public: 25 },
  { teacher: '乔老师', name: '全日制理科 2 班', total: 35, admitted: 34, public: 27 },
  { teacher: '乔老师', name: '凌云理科 3 班', total: 45, admitted: 43, public: 32 },
  { teacher: '周老师', name: '圆梦理科 4 班', total: 30, admitted: 29, public: 24 },
  { teacher: '周老师', name: '全日制理科 5 班', total: 35, admitted: 34, public: 27 },
  { teacher: '周老师', name: '凌云理科 6 班', total: 45, admitted: 43, public: 31 },
  { teacher: '石老师', name: '圆梦文科一班', total: 30, admitted: 26, public: 21 },
  { teacher: '石老师', name: '全日制文科二班', total: 30, admitted: 26, public: 19 },
  { teacher: '石老师', name: '凌云文科三班', total: 30, admitted: 26, public: 18 },
];
export const honorTotals = honorClasses.reduce((a, c) => ({ total: a.total + c.total, admitted: a.admitted + c.admitted, public: a.public + c.public }), { total: 0, admitted: 0, public: 0 });

export const honorServices = [
  { title: '入学定位与学习规划', text: '结合基础、报考方向和目标院校安排学习任务，明确每个阶段要完成什么。' },
  { title: '阶段测评与反馈', text: '通过测试、课堂练习和错题回收了解薄弱环节，及时调整复习重点。' },
  { title: '任务督学与答疑', text: '按周跟进网课、背诵和练习完成情况，记录遇到的问题，衔接学科答疑。' },
  { title: '志愿填报指导', text: '把成绩、院校专业要求和志愿选择一起考虑，让备考服务延续到录取环节。' },
  { title: '备考心理辅导', text: '关注学习状态和备考压力，在长期复习中帮助学生保持节奏。' },
  { title: '培优与等级考试辅导', text: '按所选班型匹配状元培优计划、等级考试辅导等服务，具体权益见价格表。' },
];

export const coursePlans = [
  { name: '精品常规班', price: 8800, days: 30, fit: '基础较好，希望按常规节奏备考', grade: 'T3 以上', intensive: '—', honors: false },
  { name: '有志实习定向班', price: 15800, days: 60, fit: '基础较好，需要结合实习安排', grade: 'T4 以上', intensive: '—', honors: false },
  { name: '有志启航班', price: 18800, days: 80, fit: '基础较好，希望增加课程与培优服务', grade: 'T4 以上', intensive: '10', honors: true },
  { name: 'VIP 有志凌云班', price: 21800, days: 120, fit: '基础中等，需要更完整的集中训练', grade: 'T4 以上', intensive: '20', honors: true },
  { name: 'VIP 有志追梦班', price: 25800, days: 120, fit: '基础中等，希望增加辅导与复习支持', grade: 'T5 以上', intensive: '30', honors: true },
  { name: 'VIP 有志全日制班', price: 28800, days: 240, fit: '基础薄弱，适合持续集中学习', grade: 'T5 以上', intensive: '40', honors: true },
  { name: 'VIP 有志圆梦旗舰团', price: 32800, days: 240, fit: '基础薄弱，需要更充分的课程支持', grade: 'T6 以上', intensive: '50', honors: true },
  { name: 'VIP 有志无忧上岸班', price: 58000, days: 240, fit: '基础较差，需要更长周期学习支持', grade: 'T6 以上', intensive: '60', honors: true },
];
