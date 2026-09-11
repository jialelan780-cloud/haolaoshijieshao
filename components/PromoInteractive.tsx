"use client";

import { useId, useState, type ReactNode } from "react";
import {
  GalleryTrigger,
  InlineDocument,
} from "@/components/consultation/LightboxGallery";
import {
  aiFeatures,
  asset,
  campusPhotos,
  coursePlans,
  schedules,
} from "@/data/promo";

export function ImagePreview({
  image,
  title,
  children,
  className = "",
}: {
  image: string;
  title: string;
  children?: ReactNode;
  className?: string;
}) {
  let images = [{ src: asset(image), title }];
  if (image.startsWith("ai-"))
    images = aiFeatures.map((x) => ({ src: asset(x.image), title: x.title }));
  else if (image.startsWith("campus-"))
    images = campusPhotos.map((x) => ({ src: asset(x.image), title: x.title }));
  else if (image.startsWith("schedule-"))
    images = [
      { src: asset("schedule-summer-science.webp"), title: "暑假理科课表" },
      { src: asset("schedule-summer-arts.webp"), title: "暑假文科课表" },
      { src: asset("schedule-autumn.webp"), title: "秋季理科一班课表" },
    ];
  const index = Math.max(
    0,
    images.findIndex((x) => x.src === asset(image)),
  );
  return (
    <GalleryTrigger
      images={images}
      index={index}
      className={`p-image-button ${className}`}
    >
      {children}
    </GalleryTrigger>
  );
}

export function TabButtons({
  labels,
  active,
  onChange,
  id,
  label,
  className = "",
}: {
  labels: string[];
  active: number;
  onChange: (n: number) => void;
  id: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={`p-tabs ${className}`} role="tablist" aria-label={label}>
      {labels.map((text, i) => (
        <button
          key={text}
          type="button"
          role="tab"
          id={`${id}-tab-${i}`}
          aria-selected={active === i}
          aria-controls={`${id}-panel`}
          tabIndex={active === i ? 0 : -1}
          onClick={() => onChange(i)}
          onKeyDown={(e) => {
            let next: number | undefined;
            if (e.key === "ArrowRight") next = (i + 1) % labels.length;
            if (e.key === "ArrowLeft")
              next = (i + labels.length - 1) % labels.length;
            if (e.key === "Home") next = 0;
            if (e.key === "End") next = labels.length - 1;
            if (next !== undefined) {
              e.preventDefault();
              onChange(next);
              document.getElementById(`${id}-tab-${next}`)?.focus();
            }
          }}
        >
          {text}
        </button>
      ))}
    </div>
  );
}

export function AiLearning() {
  const [active, setActive] = useState(0);
  const id = useId();
  const item = aiFeatures[active];
  return (
    <div className="p-ai-block">
      <TabButtons
        id={id}
        labels={aiFeatures.map((x) => x.title)}
        active={active}
        onChange={setActive}
        label="智能学习功能"
      />
      <div
        className="p-ai-panel"
        role="tabpanel"
        id={`${id}-panel`}
        aria-labelledby={`${id}-tab-${active}`}
        tabIndex={0}
      >
        <div className="p-ai-copy">
          <span className="p-overline">好老师升学帮 APP</span>
          <h3>{item.subtitle}</h3>
          <p>{item.description}</p>
          <ul className="p-checks">
            {item.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <span className="p-note">学习记录与老师反馈相互配合。</span>
        </div>
        <ImagePreview
          key={item.image}
          image={item.image}
          title={`${item.title} · APP 实际界面`}
          className="p-ai-image"
        />
      </div>
      <details className="p-video-details">
        <summary>
          看看有志单词怎么学 <span>播放功能演示 ＋</span>
        </summary>
        <video controls preload="none" poster={asset("ai-7.webp")} playsInline>
          <source src={asset("vocabulary-demo.mp4")} type="video/mp4" />
          您的浏览器不支持视频播放。
          <a href={asset("vocabulary-demo.mp4")}>打开视频</a>
        </video>
      </details>
    </div>
  );
}

export function CourseSchedule() {
  const [active, setActive] = useState(0);
  const item = schedules[active];
  const id = useId();
  return (
    <div className="p-schedule-block">
      <TabButtons
        id={id}
        labels={schedules.map((s) => s.label)}
        active={active}
        onChange={setActive}
        label="年级与集训课程安排"
      />
      <div
        role="tabpanel"
        id={`${id}-panel`}
        aria-labelledby={`${id}-tab-${active}`}
        tabIndex={0}
        className="p-schedule-panel"
      >
        <div className="p-schedule-intro">
          <span className="p-badge">{item.badge}</span>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          <InlineDocument
            className="p-text-link"
            url={asset("three-year-course.pdf")}
            title="三年课程图解"
          />
        </div>
        <div>
          <div className="p-time-rows">
            {item.rows.map(([period, time, subject]) => (
              <div className="p-time-row" key={period}>
                <span>{period}</span>
                <strong>{time}</strong>
                <span>{subject}</span>
              </div>
            ))}
          </div>
          <p className="p-note">{item.note}</p>
          {item.image && (
            <ImagePreview image={item.image} title="大三秋季理科一班课表">
              <span className="p-text-link">查看秋季原始课表 ↗</span>
            </ImagePreview>
          )}
        </div>
      </div>
      <div className="p-schedule-originals">
        <span>具体班级怎么排？</span>
        {[
          ["schedule-summer-science.webp", "暑假理科课表"],
          ["schedule-summer-arts.webp", "暑假文科课表"],
          ["schedule-autumn.webp", "大三秋季课表"],
        ].map(([image, title]) => (
          <ImagePreview key={image} image={image} title={title}>
            <span>{title} ↗</span>
          </ImagePreview>
        ))}
      </div>
    </div>
  );
}

export function CampusGallery() {
  const [active, setActive] = useState(0);
  const photo = campusPhotos[active];
  return (
    <div className="p-campus-gallery">
      <div className="p-campus-main">
        <ImagePreview
          image={photo.image}
          title={photo.title}
          key={photo.image}
        />
        <div className="p-campus-caption">
          <span>集训住宿 · 实景展示</span>
          <h3>{photo.title}</h3>
          <p>{photo.text}</p>
        </div>
      </div>
      <div className="p-campus-thumbs" aria-label="住宿照片">
        {campusPhotos.map((p, i) => (
          <button
            key={p.image}
            type="button"
            aria-pressed={active === i}
            onClick={() => setActive(i)}
          >
            <img src={asset(p.image)} alt={p.title} loading="lazy" />
            <span>{p.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export function CoursePlans() {
  const [selected, setSelected] = useState(3);
  const plan = coursePlans[selected];
  const id = useId();
  return (
    <div className="p-plans">
      <TabButtons
        id={id}
        labels={coursePlans.map((p) => p.name.replace("VIP ", ""))}
        active={selected}
        onChange={setSelected}
        label="选择课程班型"
        className="p-plan-tabs"
      />
      <div
        className="p-plan-detail"
        role="tabpanel"
        id={`${id}-panel`}
        aria-labelledby={`${id}-tab-${selected}`}
        tabIndex={0}
      >
        <div>
          <span className="p-overline">2026 滨江校区课程</span>
          <h3>{plan.name}</h3>
          <p>{plan.fit}</p>
          <div className="p-price">
            <small>¥</small>
            {plan.price.toLocaleString("en-US")}
            <span> / 价格表公示</span>
          </div>
        </div>
        <div className="p-plan-specs">
          <div>
            <span>考前集训天数</span>
            <strong>
              {plan.days}
              <small> 天</small>
            </strong>
          </div>
          <div>
            <span>教师级别</span>
            <strong>{plan.grade}</strong>
          </div>
          <div>
            <span>状元培优计划</span>
            <strong>{plan.honors ? "包含" : "未列入"}</strong>
          </div>
          <div>
            <span>终极密押课程*</span>
            <strong>{plan.intensive}</strong>
          </div>
        </div>
      </div>
      <div className="p-plan-footer">
        <p>
          以上按 2026
          价格表整理。*密押课程数值沿用原表，单位、开课安排及协议条款请向校区确认。各班型具体权益与费用以签约文件为准。
        </p>
        <ImagePreview
          image="price-2026.webp"
          title="2026 好老师升学帮滨江校区产品价格表"
        >
          <span className="p-text-link">查看完整价格与服务对照表 ↗</span>
        </ImagePreview>
      </div>
    </div>
  );
}
