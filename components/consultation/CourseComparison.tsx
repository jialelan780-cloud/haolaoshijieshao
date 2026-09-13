import {
  examPreparationStages,
  holidayCampStages,
  mainCoursePlans,
  sharedCourseServices,
} from "@/data/courseComparison";
import { guideSources } from "@/data/studentGuide";
import GuideTopicNav from "./GuideTopicNav";
import { GalleryTrigger } from "./LightboxGallery";

const rows = [
  {
    title: "寒暑假阶段集训",
    value: (p: (typeof mainCoursePlans)[number]) => p.holiday,
    note: (p: (typeof mainCoursePlans)[number]) =>
      p.campCount === 3 ? "4个阶段任选3个" : "4个阶段均可参加",
  },
  {
    title: "考前集中学习",
    value: (p: (typeof mainCoursePlans)[number]) => p.duration,
    note: (p: (typeof mainCoursePlans)[number]) =>
      p.price >= 28800 ? "封闭集训 · 上五休二" : "按班级课表安排",
  },
  {
    title: "考前课期安排",
    value: (p: (typeof mainCoursePlans)[number]) => p.period,
    note: () => "",
  },
  {
    title: "教师级别",
    value: (p: (typeof mainCoursePlans)[number]) => p.grade,
    note: () => "按2026滨江价目表",
  },
  {
    title: "状元培优计划",
    value: (p: (typeof mainCoursePlans)[number]) =>
      p.honors ? "包含" : "未列入",
    note: () => "",
  },
  {
    title: "未上线本科的协议退费",
    value: (p: (typeof mainCoursePlans)[number]) => p.refund,
    note: (p: (typeof mainCoursePlans)[number]) => p.refundDetail,
  },
];

function SectionHeading({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="c-enroll-heading">
      <span>{number}</span>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function CourseComparison() {
  return (
    <div className="c-enrollment">
      <GuideTopicNav
        label="班型与下一步导航"
        items={[
          ["course-common", "每班都有"],
          ["course-comparison", "六档班型对比"],
          ["course-120-days", "21800考前规划"],
          ["next-step-tools", "我的行动"],
        ]}
      />

      <div className="c-enroll-section" id="course-common">
        <SectionHeading
          number="01"
          title="先看共同内容：每个班型都有学期课"
          description="以下对比15800—32800元六个主要班型。共同服务先列清，选班时重点看集训权益与学习周期。"
        />
        <div className="c-enroll-common">
          {sharedCourseServices.map((item, i) => (
            <article key={item.title}>
              <span>0{i + 1}</span>
              <h4>{item.title}</h4>
              <strong>{item.lead}</strong>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <div className="c-enroll-camps">
          <div className="c-enroll-camps-heading">
            <span>寒暑假阶段集训</span>
            <h4>四个阶段，按班型选择参加</h4>
          </div>
          <ol>
            {holidayCampStages.map((camp, i) => (
              <li key={camp.year + camp.season}>
                <span>0{i + 1}</span>
                <div>
                  <small>{camp.year}</small>
                  <strong>{camp.season}</strong>
                </div>
              </li>
            ))}
          </ol>
          <div className="c-enroll-camp-rules">
            <p>
              <span>15800 / 18800元</span>
              <strong>四选三</strong> · 四个阶段任选三个
            </p>
            <p>
              <span>21800元及以上</span>
              <strong>四个全含</strong> · 四个阶段均可参加
            </p>
          </div>
        </div>
      </div>

      <div className="c-enroll-section" id="course-comparison">
        <SectionHeading
          number="02"
          title="六个主要班型，区别放在一起看"
          description="学期课都有，主要比较：四选三还是全含、考前学多久、教师级别，以及协议保障。"
        />
        <div className="c-enroll-comparison-wrap">
          <table className="c-enroll-table">
            <caption>
              好老师升学帮主要班型对比 · 2026滨江校区价格表与课程说明
            </caption>
            <thead>
              <tr>
                <th scope="col">比较项目</th>
                {mainCoursePlans.map((plan) => (
                  <th
                    scope="col"
                    className={plan.recommended ? "is-recommended" : ""}
                    key={plan.price}
                  >
                    <span className="c-enroll-plan-tag">
                      {plan.recommended
                        ? "完整考前课期起点"
                        : plan.price >= 28800
                          ? "更长封闭集训"
                          : ""}
                    </span>
                    <strong>¥{plan.price.toLocaleString("en-US")}</strong>
                    <small>{plan.name.replace("VIP ", "")}</small>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.title}>
                  <th scope="row">{row.title}</th>
                  {mainCoursePlans.map((plan) => (
                    <td
                      key={plan.price}
                      className={plan.recommended ? "is-recommended" : ""}
                    >
                      <strong>{row.value(plan)}</strong>
                      {row.note(plan) && <small>{row.note(plan)}</small>}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="c-enroll-mobile-plans" aria-label="六档班型逐项比较">
          {mainCoursePlans.map((plan) => (
            <article
              key={plan.price}
              className={plan.recommended ? "is-recommended" : ""}
            >
              <header>
                <div>
                  <span>{plan.name.replace("VIP ", "")}</span>
                  <h4>¥{plan.price.toLocaleString("en-US")}</h4>
                </div>
                <b>{plan.recommended ? "完整考前课期起点" : plan.focus}</b>
              </header>
              <dl>
                {rows.map((row) => (
                  <div key={row.title}>
                    <dt>{row.title}</dt>
                    <dd>
                      <strong>{row.value(plan)}</strong>
                      {row.note(plan) && <small>{row.note(plan)}</small>}
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
        <div className="c-enroll-differences">
          <article>
            <span>15800 → 18800</span>
            <h4>增加20天考前集训</h4>
            <p>
              同为阶段集训四选三，考前由60天增加到80天；18800元档包含状元培优计划。
            </p>
          </article>
          <article>
            <span>21800 → 25800</span>
            <h4>课期相同，教师级别有区别</h4>
            <p>
              均含四个阶段集训和120天考前集训；教师级别分别为T4以上、T5以上，未上线本科均按协议退5000元。
            </p>
          </article>
          <article>
            <span>28800 → 32800</span>
            <h4>长周期相同，协议保障有区别</h4>
            <p>
              均为约8个月封闭集训、上五休二；未上线本科分别按协议退8000元、全额退款，教师级别分别为T5以上、T6以上。
            </p>
          </article>
        </div>
        <div className="c-enroll-source">
          <p>
            课程范围与阶段按校区本次说明整理；教师级别、培优与协议退费参考2026滨江价格表。协议保障的触发条件、退款范围与办理要求以签约协议为准。
          </p>
          <GalleryTrigger
            images={[
              {
                src: "/promo/price-2026.webp",
                title: "2026好老师升学帮滨江校区产品价目表",
                caption:
                  "完整原表另含8800元精品常规班和58000元无忧上岸班；本页重点比较六个主要班型。",
              },
            ]}
          >
            <span>查看完整价格表 ↗</span>
          </GalleryTrigger>
        </div>
      </div>

      <div className="c-enroll-section" id="course-120-days">
        <div className="c-enroll-recommendation">
          <div>
            <span>为什么建议优先了解21800元及以上</span>
            <h3>
              让总复习、试卷训练和最后冲刺，
              <br />
              有一段连续的准备时间。
            </h3>
            <p>
              21800元档开始，四个寒暑假阶段集训全部包含，并从大三12月进入完整考前课期。需要更早集中学习的同学，可比较28800／32800元档从9月开始的封闭集训安排。
            </p>
          </div>
          <div className="c-enroll-recommendation-number">
            <strong>
              120<span>天</span>
            </strong>
            <p>
              21800 / 25800元档
              <br />
              考前集训课期
            </p>
          </div>
        </div>
        <div className="c-enroll-planner">
          <div className="c-enroll-planner-heading">
            <div>
              <span>21800元 · VIP有志凌云班</span>
              <h3>考前集训时间规划图</h3>
              <p>大三12月开始 → 次年4月专升本考试前一天</p>
            </div>
            <strong>先复习 · 再练测 · 最后冲刺</strong>
          </div>
          <div className="c-enroll-months" aria-label="学习跨越12月到次年4月">
            <span>大三12月</span>
            <span>次年1月</span>
            <span>2月</span>
            <span>3月</span>
            <span>4月 · 考前</span>
          </div>
          <ol className="c-enroll-timeline">
            {examPreparationStages.map((stage, i) => (
              <li key={stage.title}>
                <div className="c-enroll-timeline-date">
                  <span>0{i + 1}</span>
                  <strong>{stage.date}</strong>
                </div>
                <h4>{stage.title}</h4>
                <span className="c-enroll-stage-badge">{stage.badge}</span>
                <p>{stage.description}</p>
                <ul>
                  {stage.tasks.map((task) => (
                    <li key={task}>{task}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
          <div className="c-enroll-paper-breakdown">
            <div>
              <span>春节后练测组合</span>
              <strong>
                18<small>套试卷</small>
              </strong>
            </div>
            <p>
              <strong>
                4<small>套真题</small>
              </strong>
              <b>＋</b>
              <strong>
                4<small>套模拟</small>
              </strong>
              <b>＋</b>
              <strong>
                10<small>套单元测试</small>
              </strong>
            </p>
          </div>
          <div className="c-enroll-planner-note">
            <p>
              120天为班型考前集训课期标注，具体开结课日期、春节安排与每日作息以当期课表为准。3月中旬志愿填报参照近年安排，具体时间和要求以当年考试院通知为准。
            </p>
            <a href={guideSources.zsb.url} target="_blank" rel="noreferrer">
              浙江普通专升本报名与志愿规则 ↗
            </a>
          </div>
        </div>
        <div className="c-enroll-longer">
          <span>需要更长时间夯实基础？</span>
          <h4>28800 / 32800元：大三9月开始，封闭学习约8个月</h4>
          <p>
            从9月持续到考试前一天，上课5天、休息2天，提供更长的集中学习周期。选择时结合基础、可投入时间与预算，再比较教师级别和协议保障。
          </p>
        </div>
      </div>
    </div>
  );
}
