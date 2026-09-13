import type { Metadata } from "next";
import PresentationMode from "@/components/consultation/PresentationMode";
import {
  ConsultationSection,
  HeroNationalMap,
  EducationOpportunity,
  EducationComparison,
  ZhejiangPolicy,
  LearningSystem,
  TeacherTeam,
  AppLearningSystem,
  ThreeYearPlan,
} from "@/components/consultation/ConsultationSections";
import BrandAdvantages from "@/components/consultation/BrandAdvantages";
import MajorPathExplorer from "@/components/consultation/MajorPathExplorer";
import ControlLineChart from "@/components/consultation/ControlLineChart";
import PlanningTools from "@/components/consultation/PlanningTools";
import {
  CourseScheduleOverview,
  CampusStayOverview,
} from "@/components/consultation/CourseAndCampus";
import { InlineDocument } from "@/components/consultation/LightboxGallery";
import "./consultation.css";
export const metadata: Metadata = {
  title: "好老师升学帮 · 浙江专升本可视化升学说明书",
  description:
    "从全国布局到专业路径、浙江政策、核心师资与三年学习规划。秋季与集训课表、住宿实拍直接展示，支持咨询讲解、专业查询、基础自测与页内规划。",
};
export default function AboutHaolaoshiPage() {
  return (
    <PresentationMode>
      <HeroNationalMap />
      <ConsultationSection
        index={1}
        title="为什么越来越多学生选择好老师？"
        description="品牌、规模、师资、成果与学习服务，八个方面全面了解好老师升学帮。"
      >
        <BrandAdvantages />
      </ConsultationSection>
      <ConsultationSection
        index={2}
        title="专科不是终点，本科让未来多一些选择"
        description="从就业、人才与租房补贴，到考公、考研、考编，把本科能带来的选择一项项讲清楚。"
        className="c-section-tint"
      >
        <EducationOpportunity />
      </ConsultationSection>
      <ConsultationSection
        index={3}
        title="都是本科路径，学习方式各有不同"
        description="你在专科阶段重点了解的，是普通高校专升本这条全日制升学路径。"
      >
        <EducationComparison />
      </ConsultationSection>
      <ConsultationSection
        index={4}
        title="浙江专升本，到底怎么考？"
        description="一次应届报考窗口、考前填志愿、两门统考科目：先把关键政策和升学节奏弄明白。"
        className="c-section-tint"
      >
        <ZhejiangPolicy />
      </ConsultationSection>
      <ConsultationSection
        index={5}
        title="你现在的专业，以后怎么升本科？"
        description="选择学校、搜索专业，现场查看类别与考试科目。"
      >
        <MajorPathExplorer />
      </ConsultationSection>
      <ConsultationSection
        index={6}
        title="浙江专升本，到底要考多少分？"
        description="先理解省控线，再讨论目标院校。努力过线，也尽可能冲击更好的本科。"
        className="c-section-tint"
      >
        <ControlLineChart />
      </ConsultationSection>
      <ConsultationSection
        index={7}
        title="从报名开始，我们怎么陪你走到本科？"
        description="把目标拆成阶段，再把阶段落实到每一天。"
      >
        <LearningSystem />
      </ConsultationSection>
      <ConsultationSection
        index={8}
        title="真正重要的，是长期陪你学习的人"
        description="老师教什么、适合谁、带出了什么结果，一起看。"
        className="c-section-tint"
      >
        <TeacherTeam />
      </ConsultationSection>
      <ConsultationSection
        index={9}
        title="报名以后，你每天是怎么学习的？"
        description="课程之外，练习、测评和反馈继续衔接。"
      >
        <AppLearningSystem />
      </ConsultationSection>
      <ConsultationSection
        index={10}
        title="现在报名，大学三年到底怎么学？"
        description="起步、强化、冲刺，每个阶段都有要完成的任务。"
        className="c-section-tint"
      >
        <ThreeYearPlan />
      </ConsultationSection>
      <ConsultationSection
        index={11}
        title="秋季怎么上课，集训一天怎么安排？"
        description="上午学什么、下午怎么练、晚上如何安排，结合真实班级课表一起看。"
      >
        <CourseScheduleOverview />
      </ConsultationSection>
      <ConsultationSection
        index={12}
        title="集训期间，住得怎么样？"
        description="从房间全景到书桌、床位与洗漱设施，六个实拍视角，提前了解集训生活。"
        className="c-section-tint"
      >
        <CampusStayOverview />
      </ConsultationSection>
      <ConsultationSection
        index={13}
        title="你的升本规划，可以从今天开始"
        description="找到方向，了解基础，再把接下来的学习安排清楚。"
        className="c-final-section"
      >
        <PlanningTools />
        <div className="c-final-address">
          <span>好老师升学帮 · 滨江校区</span>
          <p>杭州市滨江区滨文路426号 · 文苑大厦11楼</p>
          <InlineDocument
            url="/promo/honors-results-2026.pdf#page=11"
            title="校区到访指引"
          />
          <a href="tel:4000231785">官方热线 400-023-1785</a>
        </div>
      </ConsultationSection>
    </PresentationMode>
  );
}
