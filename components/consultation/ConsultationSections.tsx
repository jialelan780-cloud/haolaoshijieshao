import {
  chapters,
  educationRows,
  serviceSteps,
  faculty,
} from "@/data/consultation";
import { honorClasses, honorServices } from "@/data/promo";
import FeedbackGallery from "./FeedbackGallery";
import { AiLearning, CoursePlans } from "@/components/PromoInteractive";
import { GalleryTrigger, InlineDocument, InlinePanel } from "./LightboxGallery";
import { ChapterLink } from "./PresentationMode";
import type { ReactNode } from "react";
import { EducationOpportunityGuide, ZhejiangPolicyGuide } from "./StudentGuide";
export function ConsultationSection({
  index,
  title,
  description,
  children,
  className = "",
}: {
  index: number;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  const chapter = chapters[index];
  return (
    <section
      className={`c-section ${className}`}
      id={chapter.id}
      data-section={index}
      aria-labelledby={`${chapter.id}-title`}
    >
      <div className="c-section-inner">
        <div className="c-section-heading">
          <span className="c-eyebrow">
            {String(index + 1).padStart(2, "0")} / {chapter.short}
          </span>
          <h2 id={`${chapter.id}-title`}>{title}</h2>
          {description && <p>{description}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
export function HeroNationalMap() {
  return (
    <section
      className="c-section c-national"
      id="national"
      data-section={0}
      aria-labelledby="national-title"
    >
      <div className="c-section-inner">
        <div className="c-map-heading">
          <span className="c-eyebrow">好老师教育 · 全国升学版图</span>
          <h1 id="national-title">
            <span>升本就一次，</span>
            <em>就选好老师</em>
          </h1>
          <p>深耕升学教育，让更多学生拥有改变学历与未来的机会。</p>
        </div>
        <div className="c-national-visual">
          <GalleryTrigger
            images={[
              {
                src: "/promo/national-network.webp",
                title: "好老师教育全国布局",
                caption: "全国布局与品牌数字来源：所提供企业介绍资料。",
              },
            ]}
          >
            <img
              src="/promo/national-network.webp"
              alt="好老师教育全国布局地图"
              fetchPriority="high"
            />
            <span className="c-map-caption">
              全国教学网络 <span>放大查看 ↗</span>
            </span>
          </GalleryTrigger>
          <div className="c-map-side">
            <span className="c-map-side-label">
              立足浙江
              <br />
              陪你走向本科
            </span>
            <strong>
              2004<small>好老师教育创立</small>
            </strong>
            <strong>
              2017<small>浙江分校成立</small>
            </strong>
            <ChapterLink to="brand" className="c-button c-button-dark">
              了解好老师实力 ↓
            </ChapterLink>
          </div>
        </div>
        <div className="c-national-stats">
          {[
            ["20+", "省级区域布局"],
            ["600+", "线下教学网点"],
            ["3000+", "在职教职员工"],
            ["100万+", "累计培训学员"],
          ].map(([v, l]) => (
            <div key={l}>
              <strong>{v}</strong>
              <span>{l}</span>
            </div>
          ))}
          <InlineDocument url="/promo/company.pdf" title="企业介绍原件" />
        </div>
      </div>
    </section>
  );
}
export function EducationOpportunity() {
  return <EducationOpportunityGuide />;
}
export function EducationComparison() {
  return (
    <>
      <div className="c-education-lead">
        <span>我们重点讲的升学路径</span>
        <h3>
          浙江普通高校专升本 <b>→</b> 全日制本科
        </h3>
        <p>录取后继续本科阶段学习。毕业证与学位证分别按相应条件取得。</p>
      </div>
      <div className="p-table-scroll c-education-table">
        <table>
          <thead>
            <tr>
              {educationRows[0].map((s, i) => (
                <th key={i}>{s}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {educationRows.slice(1).map((row) => (
              <tr key={row[0]}>
                {row.map((s, i) =>
                  i === 0 ? (
                    <th key={i} scope="row">
                      {s}
                    </th>
                  ) : (
                    <td key={i}>{s}</td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="c-footnote">
        不同路径都需要完成相应学习与毕业要求。学历与学位是不同概念，应分别了解对应的取得条件。
      </p>
      <div className="c-citations">
        <a
          href="https://www.moe.gov.cn/moe_879/moe_1252/s6035/s6038/s2992/moe_1260/tnull_17464.html"
          target="_blank"
          rel="noreferrer"
        >
          教育部：学历与学位的区别 ↗
        </a>
      </div>
    </>
  );
}
export function ZhejiangPolicy() {
  return <ZhejiangPolicyGuide />;
}
export function LearningSystem() {
  return (
    <>
      <div className="c-service-flow">
        {serviceSteps.map((s, i) => (
          <article key={s.stage}>
            <div>
              <span>0{i + 1}</span>
              <small>{s.stage}</small>
            </div>
            <h3>{s.title}</h3>
            <ul>
              {s.steps.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <p>{s.text}</p>
          </article>
        ))}
      </div>
      <div className="c-service-emphasis">
        <strong>课堂教知识，督学帮你把计划执行下去。</strong>
        <p>状元班的培优、测评、答疑与志愿服务，具体按所选班型匹配。</p>
      </div>
      <div className="c-inline-actions">
        <InlinePanel title="状元班服务" label="展开状元班服务">
          <div className="c-modal-services">
            {honorServices.map((s) => (
              <article key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            ))}
          </div>
        </InlinePanel>
        <InlinePanel title="学员反馈" label="看看学员的学习反馈">
          <FeedbackGallery />
        </InlinePanel>
        <InlineDocument
          url="/promo/english-study-guide.pdf"
          title="英语督学手册"
        />
        <InlineDocument
          url="/promo/math-study-guide.pdf"
          title="数学督学手册"
        />
        <InlineDocument
          url="/promo/chinese-study-guide.pdf"
          title="语文督学手册"
        />
      </div>
    </>
  );
}
export function TeacherTeam() {
  const images = faculty.map((t) => ({
    src: `/promo/teacher-${t.id}.webp`,
    title: `${t.name}教学介绍海报`,
    caption: "海报与下方状元班统计的班级范围不同，请按各自口径查看。",
  }));
  return (
    <>
      <div className="c-faculty-grid">
        {faculty.map((t, i) => (
          <article key={t.id}>
            <GalleryTrigger
              images={images}
              index={i}
              className="c-faculty-photo"
            >
              <span className="c-portrait-window">
                <img
                  src={images[i].src}
                  alt={`${t.name}照片`}
                  style={t.portrait}
                  loading="lazy"
                />
              </span>
              <span className="c-portrait-caption">教师介绍海报 ↗</span>
            </GalleryTrigger>
            <div className="c-faculty-copy">
              <div className="c-faculty-name">
                <h3>{t.name}</h3>
                <span>{t.subject}</span>
              </div>
              <strong className="c-teacher-position">{t.position}</strong>
              <p className="c-faculty-education">{t.education}</p>
              <div className="c-faculty-result">
                <strong>{t.headline}</strong>
                <span>{t.detail}</span>
              </div>
              <p className="c-faculty-fit">
                <b>适合：</b>
                {t.fit}
              </p>
              <div className="c-faculty-tags">
                {t.specialties.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
              <InlineDocument
                url={`/teachers/${t.id}`}
                title={`${t.name}介绍与历年数据`}
              />
            </div>
          </article>
        ))}
      </div>
      <p className="c-footnote">
        班级统计来自2026届滨江状元班资料，统计范围为对应的圆梦、全日制、凌云班；不同班型与届别的结果需分别查看。
      </p>
      <div className="c-inline-actions">
        <InlinePanel title="2026届滨江状元班录取明细">
          <div className="p-table-scroll">
            <table className="p-table">
              <thead>
                <tr>
                  <th>班级</th>
                  <th>老师</th>
                  <th>人数</th>
                  <th>本科录取</th>
                  <th>公办录取</th>
                </tr>
              </thead>
              <tbody>
                {honorClasses.map((c) => (
                  <tr key={c.name}>
                    <th>{c.name}</th>
                    <td>{c.teacher}</td>
                    <td>{c.total}</td>
                    <td>{c.admitted}</td>
                    <td>{c.public}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </InlinePanel>
        <InlineDocument
          url="/promo/honors-results-2026.pdf"
          title="完整师资与成果资料"
        />
        <InlineDocument url="/teachers/yu" title="余老师 · 英语" />
        <InlineDocument url="/teachers/silu" title="思路老师 · 语文" />
      </div>
    </>
  );
}
export function AppLearningSystem() {
  return (
    <>
      <div className="c-app-daily">
        <span>课堂 / 网课学习</span>
        <b>→</b>
        <span>单词与练题</span>
        <b>→</b>
        <span>作业与测评</span>
        <b>→</b>
        <span>复盘与老师反馈</span>
      </div>
      <AiLearning />
      <p className="c-footnote">
        学习，不只发生在教室里。功能展示依据所提供 APP
        介绍；具体课程和服务权限以所选班型为准。
      </p>
    </>
  );
}
export function ThreeYearPlan() {
  return (
    <>
      <div className="c-three-year">
        <article>
          <span>YEAR 01</span>
          <h3>
            大一 <small>基础建设期</small>
          </h3>
          <strong>
            6–12 <small>小时 / 周</small>
          </strong>
          <p>
            周末课程起步
            <br />
            英语 + 数学 / 语文基础
            <br />
            建立学习习惯，反复巩固
          </p>
          <footer>
            每周选1天完整课程为6小时
            <br />
            两天都上为12小时
          </footer>
        </article>
        <article>
          <span>YEAR 02</span>
          <h3>
            大二 <small>强化提升期</small>
          </h3>
          <strong>
            6–24 <small>小时 / 周</small>
          </strong>
          <p>
            周内晚课 + 周末课
            <br />
            强化知识体系，分模块刷题
            <br />
            阶段测试，查漏补缺
          </p>
          <footer>
            可结合课余时间增加晚课
            <br />
            24小时为全部参加时的上限
          </footer>
        </article>
        <article>
          <span>YEAR 03</span>
          <h3>
            大三 <small>冲刺录取期</small>
          </h3>
          <strong>
            考前 <small>集中训练</small>
          </strong>
          <p>
            秋季强化、寒假与考前集训
            <br />
            真题、模考与错题复盘
            <br />
            志愿规划、填报与录取跟进
          </p>
          <footer>
            具体日期与节奏
            <br />
            跟随所在班级课表
          </footer>
        </article>
      </div>
      <div className="c-regular-class-times">
        <p>
          <strong>大一 · 周末课</strong> 上午 09:00–12:00 英语，下午 14:00–17:00
          数学 / 语文。
        </p>
        <p>
          <strong>大二 · 晚课 + 周末课</strong> 周一至周四 18:00–21:00
          可选晚课，周末时间同上。
        </p>
      </div>
      <div className="c-six-stages">
        <span>三年 6 个集训阶段</span>
        <p>大一寒假 → 大一暑假 → 大二寒假 → 大二暑假 → 大三寒假 → 考前冲刺</p>
      </div>
      <div className="c-three-year-links">
        <ChapterLink to="schedule" className="c-text-button">
          秋季与集训课表 →
        </ChapterLink>
        <ChapterLink to="campus" className="c-text-button">
          集训住宿实拍 →
        </ChapterLink>
        <InlinePanel title="2026班型与服务费用" label="比较班型与费用">
          <CoursePlans />
        </InlinePanel>
        <InlineDocument
          url="/promo/three-year-course.pdf"
          title="三年课程图解"
        />
      </div>
      <p className="c-footnote">
        从大一报名至考前，对应课程可循环学习；课程范围、轮次与课时权益按所选班型及合同约定。
      </p>
    </>
  );
}
