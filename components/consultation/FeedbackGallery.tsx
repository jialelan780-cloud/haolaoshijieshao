"use client";
import { useMemo, useState } from "react";
import { testimonials, TESTIMONIAL_FILTERS } from "@/lib/testimonials";
import { GalleryTrigger } from "./LightboxGallery";
export default function FeedbackGallery() {
  const [filter, setFilter] = useState("全部"),
    [count, setCount] = useState(12);
  const filtered = useMemo(
    () =>
      testimonials.filter(
        (t) => filter === "全部" || t.filterTags.includes(filter),
      ),
    [filter],
  );
  const images = filtered.map((t) => ({
    src: t.src,
    title: t.caption,
    caption: `${t.subjectLabel} · ${t.kindLabel}`,
  }));
  const filters = TESTIMONIAL_FILTERS.filter(
    (f) => f === "全部" || testimonials.some((t) => t.filterTags.includes(f)),
  );
  return (
    <>
      <div className="c-category-pills" aria-label="学员反馈分类">
        {filters.map((f) => (
          <button
            key={f}
            aria-pressed={filter === f}
            onClick={() => {
              setFilter(f);
              setCount(12);
            }}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="c-feedback-grid">
        {filtered.slice(0, count).map((t, i) => (
          <GalleryTrigger key={t.id} images={images} index={i}>
            <img
              src={t.thumb}
              alt={t.caption}
              width={t.w}
              height={t.h}
              loading="lazy"
            />
            <span>
              {t.subjectLabel} · {t.kindLabel}
            </span>
          </GalleryTrigger>
        ))}
      </div>
      {count < filtered.length && (
        <button
          className="c-button c-button-dark"
          onClick={() => setCount((n) => n + 12)}
        >
          查看更多反馈（还有{filtered.length - count}张）
        </button>
      )}
    </>
  );
}
