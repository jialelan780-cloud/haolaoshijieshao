import { campusPhotos, schedules, asset } from "@/data/promo";
import { displayedSchedules } from "@/data/studyEnvironment";
import { GalleryTrigger } from "./LightboxGallery";

const scheduleImages = displayedSchedules.map((item) => ({
  src: asset(item.image),
  title: `${item.title} · 原始课表`,
  caption: `${item.teachers}。具体日期、测试与休息安排见原图。`,
}));
const accommodationImages = campusPhotos.map((item) => ({
  src: asset(item.image),
  title: item.title,
  caption: item.text,
}));

export function CourseScheduleOverview() {
  return (
    <div className="c-schedule-overview">
      <div className="c-schedule-grid">
        {displayedSchedules.map((item, index) => (
          <article className="c-schedule-card" key={item.id}>
            <header>
              <span className="c-study-label">{item.season}</span>
              <h3>{item.title}</h3>
              <p>{item.teachers}</p>
            </header>
            <dl className="c-daily-timetable">
              {item.rows.map((row) => (
                <div key={row.period}>
                  <dt>{row.period}</dt>
                  <dd>
                    <strong>{row.time}</strong>
                    <span>{row.subject}</span>
                  </dd>
                </div>
              ))}
            </dl>
            <p className="c-schedule-rhythm">{item.rhythm}</p>
            <figure>
              <GalleryTrigger images={scheduleImages} index={index} />
              <figcaption>原始课表 · 日期与每日安排</figcaption>
            </figure>
          </article>
        ))}
      </div>
      <div className="c-training-reference">
        <strong>寒暑假集训 · 通用作息参考</strong>
        <p>
          {schedules[3].rows.map((row) => `${row[0]} ${row[1]}`).join("　/　")}
        </p>
        <span>
          三年课程图解采用周一至周五学习、周末休息的安排；上方文理科班作息按各自原始课表展示。
        </span>
      </div>
      <p className="c-footnote">
        以上为所提供班级的课表示例，开课日期、节假日与具体作息以所在班级当期通知为准。
      </p>
    </div>
  );
}

export function CampusStayOverview() {
  return (
    <div className="c-campus-overview">
      <div className="c-campus-grid">
        {campusPhotos.map((item, index) => (
          <figure className="c-campus-card" key={item.image}>
            <GalleryTrigger images={accommodationImages} index={index} />
            <figcaption>
              <span className="c-campus-number">0{index + 1}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="c-footnote">
        以上均为集训住宿实拍，展示六人间、公共空间及生活设施；实际住宿地点、房型和费用以当期安排为准。
      </p>
    </div>
  );
}
