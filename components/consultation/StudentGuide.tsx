import type { ReactNode } from "react";
import {
  benefitCards,
  examTimeline,
  gaokaoComparison,
  guideCheckedAt,
  guideSources,
  jobComparison,
} from "@/data/studentGuide";
import { ChapterLink } from "./PresentationMode";
import GuideTopicNav from "./GuideTopicNav";

type SourceKey = keyof typeof guideSources;
function Sources({ items }: { items: SourceKey[] }) {
  return (
    <div className="c-guide-sources">
      <span>官方依据</span>
      {items.map((key) => (
        <a
          key={key}
          href={guideSources[key].url}
          target="_blank"
          rel="noreferrer"
        >
          {guideSources[key].title} ↗
        </a>
      ))}
    </div>
  );
}
function Topic({
  id,
  number,
  title,
  description,
  children,
}: {
  id: string;
  number: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <div className="c-guide-topic" id={id}>
      <div className="c-guide-topic-heading">
        <span>{number}</span>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
      {children}
    </div>
  );
}
function Comparison({
  caption,
  left,
  right,
  rows,
}: {
  caption: string;
  left: string;
  right: string;
  rows: string[][];
}) {
  return (
    <div className="c-guide-comparison">
      <table>
        <caption className="c-guide-sr-only">{caption}</caption>
        <thead>
          <tr>
            <th scope="col">比较维度</th>
            <th scope="col">{left}</th>
            <th scope="col">{right}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([label, a, b]) => (
            <tr key={label}>
              <th scope="row">{label}</th>
              <td data-label={left}>{a}</td>
              <td data-label={right}>{b}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export function ZhejiangPolicyGuide() {
  return (
    <div className="c-student-guide">
      <div className="c-guide-hero c-guide-policy-hero">
        <div className="c-guide-once" aria-hidden="true">
          1<span>次应届窗口</span>
        </div>
        <div>
          <span className="c-guide-kicker">先记住最重要的一件事</span>
          <h3>
            普通考生，只有毕业当年
            <br className="c-guide-desktop-break" />
            这一次报考窗口。
          </h3>
          <p>
            按2026年普通专升本规则，招生对象为浙江全日制高职高专应届毕业生。普通考生错过报名或未被录取，不能作为普通往届生在下一年按同一应届资格重考。
          </p>
          <div className="c-guide-hero-note">
            适用范围：普通应届招考。退役大学生士兵等有单独规定，报考窗口、免试或加分条件须另行核对。
          </div>
        </div>
      </div>
      <div className="c-guide-small-gaokao">
        <strong>为什么可以把它理解为一次“小高考”？</strong>
        <p>
          它同样通过统一考试和志愿录取，决定下一阶段去哪里读书，是专科学生继续全日制本科学习的重要升学节点。“小高考”在这里是形象比喻，正式名称是普通高校专升本选拔考试，考试科目、报考资格和录取规则都有自己的要求。
        </p>
      </div>
      <Sources items={["zsb"]} />
      <GuideTopicNav
        label="浙江政策内容导航"
        items={[
          ["policy-calendar", "何时报名与考试"],
          ["policy-subjects", "考什么、怎么报"],
          ["policy-vs-gaokao", "和高考的区别"],
          ["policy-admission", "录取后怎么读"],
        ]}
      />

      <Topic
        id="policy-calendar"
        number="01"
        title="先填志愿，再参加考试"
        description="先把顺序记清：报名和首次志愿同步 → 审核缴费 → 统考 → 投档 → 符合条件者征求志愿。"
      >
        <div className="c-guide-year">
          <strong>2026年已公布安排 · 历史参考</strong>
          <span>
            截至{guideCheckedAt}
            ，未查到2027年普通专升本实施细则。下一届日期以新公告为准。
          </span>
        </div>
        <ol className="c-guide-timeline">
          {examTimeline.map((step, i) => (
            <li className={step.emphasis ? "is-key" : ""} key={step.title}>
              <div className="c-guide-timeline-top">
                <span>0{i + 1}</span>
                <strong>{step.date}</strong>
              </div>
              <h4>{step.title}</h4>
              <small>{step.time}</small>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
        <div className="c-guide-notice">
          <strong>首次志愿 ≠ 征求志愿</strong>
          <p>
            首次志愿在考前填；征求志愿是首轮投档后，对剩余招生计划的补充填报。已被拟录取的考生不能参加，下一年是否开展及具体条件要看当年公告。
          </p>
        </div>
        <Sources items={["zsb", "admission", "supplement"]} />
      </Topic>

      <Topic
        id="policy-subjects"
        number="02"
        title="两门统考科目，满分300分"
        description="8个招考类别，根据你现在的专科专业确定可报类别；报名时只能选其中1类。"
      >
        <div className="c-policy-subjects">
          <article>
            <span className="c-eyebrow">语文方向 · 各150分</span>
            <h3>
              大学语文 <b>＋</b> 英语
            </h3>
            <div>
              {["文史类", "法学类", "教育类", "艺术类"].map((c) => (
                <span key={c}>{c}</span>
              ))}
            </div>
          </article>
          <article>
            <span className="c-eyebrow">数学方向 · 各150分</span>
            <h3>
              高等数学 <b>＋</b> 英语
            </h3>
            <div>
              {["理工类", "经管类", "农学类", "医学类"].map((c) => (
                <span key={c}>{c}</span>
              ))}
            </div>
          </article>
        </div>
        <div className="c-guide-rule-grid">
          <article>
            <span>01 / 专业对口</span>
            <h4>能考这类，不等于能报类内所有专业</h4>
            <p>
              先查省专业对照表，再看院校招生计划。部分本科专业对专科专业范围、英语能力等级等有额外要求。
            </p>
          </article>
          <article>
            <span>02 / 志愿规则</span>
            <h4>1个类别，最多8个志愿</h4>
            <p>
              1所高校的1个专业算1个志愿。按总分从高到低、结合志愿顺序检索投档；跨类别志愿无效。
            </p>
          </article>
          <article>
            <span>03 / 特殊要求</span>
            <h4>关注专业加试与学制</h4>
            <p>
              经批准的艺术、体育类专业可能组织专业加试，合格后才能填相应志愿；医学、护理等须核对专业要求及学制。
            </p>
          </article>
        </div>
        <div className="c-guide-action">
          <p>现在先确认自己的报考类别，把学习重点放在对应科目上。</p>
          <ChapterLink to="major-path">查询我的专业与考试科目 →</ChapterLink>
        </div>
        <Sources items={["zsb"]} />
      </Topic>

      <Topic
        id="policy-vs-gaokao"
        number="03"
        title="和高考相比，哪些地方不一样？"
        description="以下比较浙江普通高考普通类与普通专升本，以2026年安排为例。"
      >
        <Comparison
          caption="浙江普通高考与普通专升本对比"
          left="浙江普通高考"
          right="浙江普通专升本"
          rows={gaokaoComparison}
        />
        <Sources
          items={["zsb", "gaokao", "gaokaoChoices", "gaokaoEligibility"]}
        />
      </Topic>

      <Topic
        id="policy-admission"
        number="04"
        title="考上以后，继续读全日制本科"
        description="从考试资格到最终入学，每一步都有相应要求。"
      >
        <div className="c-guide-rule-grid">
          <article>
            <span>先完成专科</span>
            <h4>拟录取还要审核毕业资格</h4>
            <p>
              2026年须在7月15日前取得高职高专毕业证书。不能如期毕业，将取消录取资格。
            </p>
          </article>
          <article>
            <span>再读本科</span>
            <h4>通常2年，部分专业3年</h4>
            <p>
              按录取学校安排全日制学习，学费按升入学校同届学生标准执行。入学后不允许转学、转专业。
            </p>
          </article>
          <article>
            <span>毕业与学位</span>
            <h4>本科毕业证 + 符合条件的学士学位</h4>
            <p>
              完成要求后取得全日制普通本科毕业证，注明专科起点本科学习；符合学位授予条件的，授予学士学位。
            </p>
          </article>
        </div>
        <Sources items={["zsb", "admission"]} />
      </Topic>
    </div>
  );
}

export function EducationOpportunityGuide() {
  return (
    <div className="c-student-guide">
      <div className="c-guide-hero c-guide-value-hero">
        <div>
          <span className="c-guide-kicker">为什么要专升本</span>
          <h3>
            把学历的选择，
            <br />
            变成未来更多的可能。
          </h3>
          <p>
            就业、城市生活和继续升学，都会遇到不同的学历要求。本科能增加选择范围；专业能力、实践经历和持续学习，让这些选择更有实现的机会。
          </p>
        </div>
        <div className="c-guide-value-points">
          {[
            ["就业", "增加岗位选择"],
            ["补贴", "了解城市支持"],
            ["升学", "衔接研究生报考"],
            ["公职", "对照岗位门槛"],
          ].map(([a, b]) => (
            <div key={a}>
              <strong>{a}</strong>
              <span>{b}</span>
            </div>
          ))}
        </div>
      </div>
      <GuideTopicNav
        label="为什么升本内容导航"
        items={[
          ["opportunity-jobs", "就业形势"],
          ["opportunity-benefits", "人才与租房补贴"],
          ["opportunity-civil", "考公"],
          ["opportunity-masters", "考研"],
          ["opportunity-public", "考编与教师"],
        ]}
      />

      <Topic
        id="opportunity-jobs"
        number="01"
        title="面对就业竞争，先看懂学历与能力各自的作用"
        description="就业不能只比较一张文凭。真正要看的是：你想去的岗位要求什么，你为它准备了什么。"
      >
        <div className="c-guide-employment-fact">
          <div>
            <strong>
              1270<span>万人</span>
            </strong>
            <p>2026届全国普通高校毕业生预计规模</p>
          </div>
          <div>
            <h4>毕业生规模高位运行，岗位匹配更需要提前准备</h4>
            <p>
              这一数字反映全国毕业生规模，并不是专科或本科的就业率。对学生更有用的判断，是逐项比较目标岗位的学历、专业、技能和经验要求。
            </p>
            <Sources items={["employment"]} />
          </div>
        </div>
        <Comparison
          caption="专科与本科的就业路径比较"
          left="专科阶段的选择"
          right="升本后增加的选择"
          rows={jobComparison}
        />
        <div className="c-guide-notice">
          <strong>把本科读“有用”：学历 + 专业能力 + 实践成果</strong>
          <p>
            选定目标行业后，找3—5份真实招聘简章，圈出学历、专业、学位、证书和实习要求。再把本科阶段的课程、项目、实习与这些要求对齐。没有统一的“升本后保证加薪”或“本科一定比专科好就业”的结论。
          </p>
        </div>
      </Topic>

      <Topic
        id="opportunity-benefits"
        number="02"
        title="本科毕业来杭州，哪些补贴值得关注？"
        description="以下为杭州政策示例，非浙江全省统一标准。先看能申请哪一项，再核对个人、单位与家庭条件。"
      >
        <div className="c-guide-year">
          <strong>杭州示例 · 金额与条件一起看</strong>
          <span>
            核对日期：{guideCheckedAt}
            。以下为主要条件，实际申请以主管部门最新指南和审核为准。
          </span>
        </div>
        <div className="c-guide-benefits">
          {benefitCards.map((card) => (
            <article key={card.kind}>
              <span className="c-guide-benefit-tag">{card.tag}</span>
              <h4>{card.kind}</h4>
              <div className="c-guide-amount">{card.amount}</div>
              <span className="c-guide-amount-unit">{card.unit}</span>
              <p className="c-guide-benefit-intro">{card.intro}</p>
              <ul>
                {card.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="c-guide-benefit-note">{card.note}</div>
              <div className="c-guide-channel">
                <strong>怎么申请</strong>
                <p>{card.channel}</p>
              </div>
              <Sources
                items={
                  card.source === "jobAllowance"
                    ? ["jobAllowanceGuide", card.source]
                    : [card.source]
                }
              />
            </article>
          ))}
        </div>
        <div className="c-guide-notice">
          <strong>先查资格，再规划领取；不同补贴不要直接相加</strong>
          <p>
            普通专升本毕业后符合本科条件，可进一步核对生活、租房等政策；就业补贴也覆盖符合条件的专科毕业生。不同项目的社保、住房、单位、重复享受规则不同。去宁波、温州等城市就业时，应查询当地政策。
          </p>
        </div>
      </Topic>

      <Topic
        id="opportunity-civil"
        number="03"
        title="考公：本科让你能对照更多学历要求"
        description="考公务员，先看公告和职位表，再看考试。学历、学位、专业、身份条件必须同时匹配。"
      >
        <div className="c-guide-path-layout">
          <div className="c-guide-path-lead">
            <span>公务员招录</span>
            <h4>
              先过资格门槛
              <br />
              再比考试成绩
            </h4>
            <p>
              浙江2026年度公告明确：省级机关和省属单位除特殊职位外，原则上要求本科及以上学历，并取得相应学位。
            </p>
            <div className="c-guide-path-pills">
              <span>学历</span>
              <span>学位</span>
              <span>专业</span>
              <span>报考身份</span>
            </div>
          </div>
          <div className="c-guide-details">
            <article>
              <h4>专科有没有机会？</h4>
              <p>
                有符合专科条件的职位，但必须逐岗查看招考对象、户籍、经历等条件。不能把“有专科岗位”理解为“所有岗位都能报”；市以下机关还要看各地公告。
              </p>
            </article>
            <article>
              <h4>升本之后，多了什么？</h4>
              <p>
                取得本科学历后，可以匹配要求本科的职位；同时要求学士学位的，还须拿到相应学位证。普通专升本毕业生也应按具体职位条件逐项核对。
              </p>
            </article>
            <article>
              <h4>具体考什么、经历哪些环节？</h4>
              <p>
                浙江省考公共科目主要为行政职业能力测验、申论；部分职位另设专业科目或测评。通常依次经过报名审查、笔试、资格复审、面试、体检考察、公示录用。
              </p>
            </article>
            <article>
              <h4>现在该准备什么？</h4>
              <p>
                查目标职位接受哪些本科专业，重视学位授予条件，持续积累阅读、表达与分析能力。注意应届身份、年龄、基层工作经历、政治面貌等要求；国考与省考分别按各自公告执行。
              </p>
            </article>
          </div>
        </div>
        <Sources items={["civil"]} />
      </Topic>

      <Topic
        id="opportunity-masters"
        number="04"
        title="考研：本科与专科，报考路径有明显区别"
        description="这里讲全国硕士研究生招生考试，以教育部2026年招生管理规定为依据。"
      >
        <div className="c-guide-masters-compare">
          <article>
            <span className="c-guide-kicker">专科学历直接报考</span>
            <h4>
              毕业满2年及以上
              <br />
              <em>+ 符合院校学业要求</em>
            </h4>
            <p>
              从专科毕业到研究生录取当年入学前，满2年及以上，并符合招生单位具体学业要求，按本科毕业同等学力身份报考。
            </p>
            <ul>
              <li>要先查目标专业是否接受同等学力，以及具体学业要求。</li>
              <li>
                以同等学力身份参加复试，须加试至少两门相关本科主干课程，采用笔试；加试不合格不予录取。
              </li>
            </ul>
          </article>
          <article>
            <span className="c-guide-kicker">普通专升本后报考</span>
            <h4>
              按本科应届或
              <br />
              <em>本科毕业身份报考</em>
            </h4>
            <p>
              普通专升本进入本科阶段后，可在符合条件的本科毕业学年，以应届本科生身份报考；已取得本科学历的，按本科毕业身份核对条件。
            </p>
            <ul>
              <li>不适用专科学历报考的“毕业满2年 + 同等学力”路径要求。</li>
              <li>
                应届考生须在录取当年入学前取得国家承认的本科毕业证，具体期限由招生单位规定。
              </li>
            </ul>
          </article>
        </div>
        <div className="c-guide-rule-grid">
          <article>
            <span>01 / 选学校与专业</span>
            <h4>先看招生章程、专业目录</h4>
            <p>
              确认前置专业、学业要求、学习方式、学制和学费。部分专业只接受特定专业背景，不能只看学校名称。
            </p>
          </article>
          <article>
            <span>02 / 初试与复试</span>
            <h4>初试过线后仍需复试</h4>
            <p>
              全国统一组织初试，招生单位组织复试，综合择优录取。初试科目按专业目录确定，跨专业是否加试由招生单位规定。
            </p>
          </article>
          <article>
            <span>03 / 特殊专业</span>
            <h4>本科应届并非能报所有专业</h4>
            <p>
              MBA、MPA等管理类专业仍有工作年限要求，例如本科毕业后3年以上。学位、证书等附加条件也要逐项核对。
            </p>
          </article>
        </div>
        <Sources items={["masters"]} />
      </Topic>

      <Topic
        id="opportunity-public"
        number="05"
        title="考编：把事业单位和教师岗位分别看清楚"
        description="学历达到要求，是报考的一个前提。是否属于编制岗位、具体考核办法，都要看招聘公告。"
      >
        <div className="c-guide-public-grid">
          <article>
            <span className="c-guide-kicker">事业单位招聘</span>
            <h4>逐岗核对学历、学位和专业</h4>
            <p>
              浙江2026年上半年省属事业单位招聘要求，应聘人员的学历（学位）、专业、技能与岗位条件匹配。取得本科后，可进一步筛选要求本科学历的岗位，部分岗位仍要求研究生学历。
            </p>
            <ul>
              <li>
                <strong>看资格：</strong>
                专业名称、年龄、应届或社会人员、工作经历、职业资格等。
              </li>
              <li>
                <strong>看考试：</strong>
                本次省属集中招聘笔试为《综合应用能力》《职业能力倾向测验》，再按岗位安排面试或专业测评。
              </li>
              <li>
                <strong>看用工性质：</strong>
                编制、报备员额、编外合同等应以公告为准，不能把“在事业单位工作”都叫“入编”。
              </li>
            </ul>
            <Sources items={["publicJobs"]} />
          </article>
          <article>
            <span className="c-guide-kicker">教师资格与教师招聘</span>
            <h4>本科拓展可申请的教师资格学段</h4>
            <p>
              按浙江2026年认定公告，幼儿园、小学教师资格一般要求专科及以上；初中、高中、中职文化课和专业课教师资格要求本科及以上。特殊类别按公告执行。
            </p>
            <ul>
              <li>
                <strong>先拿资格：</strong>
                满足学历、考试合格或免试认定、普通话、体检等认定条件。
              </li>
              <li>
                <strong>再看招聘：</strong>
                教师资格证不等于教师编制，招聘还可能要求相应学位、专业、学科与毕业届别。
              </li>
              <li>
                <strong>准备考核：</strong>
                按具体公告参加笔试、面试、试讲或技能测试等；认定标准和招聘标准分别核对。
              </li>
            </ul>
            <Sources items={["teaching", "publicJobs"]} />
          </article>
        </div>
      </Topic>
      <div className="c-guide-closing">
        <div>
          <span>从现在开始，为未来做准备</span>
          <strong>升本增加选择，努力把选择变成机会。</strong>
          <p>结合想去的城市、想做的工作和学习基础，确定适合自己的本科目标。</p>
        </div>
        <ChapterLink to="next-step">做一份我的升本规划 →</ChapterLink>
      </div>
    </div>
  );
}
