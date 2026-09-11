// 摘自用户提供的三张原始课表；各班作息分别展示，不与通用集训作息混用。
export const displayedSchedules = [
  {
    id: "autumn",
    season: "秋季上课",
    title: "秋季理科一班",
    teachers: "数学 · 乔老师 / 英语 · 余老师",
    image: "schedule-autumn.webp",
    rows: [
      { period: "上午", time: "09:30–12:00", subject: "数学、英语交替上课" },
      { period: "下午", time: "13:00–15:00", subject: "习题巩固" },
      { period: "晚上", time: "休息", subject: "按课表安排休息" },
    ],
    rhythm: "常规周一至周四学习，周五测试；节假日与休息日见下方原始课表。",
  },
  {
    id: "summer-science",
    season: "暑假集训 · 理科",
    title: "暑假理科二班",
    teachers: "数学 · 周老师 / 英语 · 余老师",
    image: "schedule-summer-science.webp",
    rows: [
      { period: "上午", time: "09:00–12:00", subject: "英语" },
      { period: "下午", time: "14:00–17:00", subject: "数学" },
      { period: "晚上", time: "18:00–20:30", subject: "晚自习、答疑" },
    ],
    rhythm: "课程搭配周测、期中与期末测试；部分周末休息，首周周六有课。",
  },
  {
    id: "summer-arts",
    season: "暑假集训 · 文科",
    title: "暑假文科一班",
    teachers: "语文 · 石老师 / 英语 · 柴老师",
    image: "schedule-summer-arts.webp",
    rows: [
      { period: "上午", time: "09:30–12:00", subject: "英语" },
      { period: "下午", time: "14:15–16:45", subject: "语文" },
      { period: "晚上", time: "17:45–20:30", subject: "晚自习、答疑" },
    ],
    rhythm: "课程搭配周测、期中与期末测试；部分周末休息，首周周六有课。",
  },
];
