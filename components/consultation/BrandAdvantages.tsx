"use client";
import { useId, useRef, useState, type KeyboardEvent } from "react";
import {
  brandAdvantages,
  brandAssets,
  brandGallery,
  brandImageIndex,
  brandVideo,
  type BrandAssetKey,
} from "@/data/brandAdvantages";
import { GalleryTrigger, InlinePanel } from "./LightboxGallery";
import { ChapterLink } from "./PresentationMode";

export default function BrandAdvantages() {
  const [active, setActive] = useState(0);
  const [imageKey, setImageKey] = useState<BrandAssetKey>("certificate");
  const id = useId(),
    tabs = useRef<HTMLDivElement>(null),
    story = brandAdvantages[active];
  const selectedImage = story.images.includes(imageKey)
    ? imageKey
    : story.images[0];
  function select(index: number) {
    setActive(index);
    setImageKey(brandAdvantages[index].images[0]);
  }
  function handleKey(e: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number | undefined;
    if (e.key === "ArrowRight") next = (index + 1) % brandAdvantages.length;
    if (e.key === "ArrowLeft")
      next = (index - 1 + brandAdvantages.length) % brandAdvantages.length;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = brandAdvantages.length - 1;
    if (next !== undefined) {
      e.preventDefault();
      select(next);
      tabs.current
        ?.querySelectorAll<HTMLButtonElement>('[role="tab"]')
        [next]?.focus();
    }
  }
  return (
    <div className="c-advantages" data-advantage={story.id}>
      <div
        ref={tabs}
        className="c-advantage-tabs"
        role="tablist"
        aria-label="好老师八大优势"
      >
        {brandAdvantages.map((item, index) => (
          <button
            key={item.id}
            role="tab"
            id={`${id}-tab-${index}`}
            aria-selected={active === index}
            aria-controls={`${id}-panel`}
            tabIndex={active === index ? 0 : -1}
            onClick={() => select(index)}
            onKeyDown={(e) => handleKey(e, index)}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <strong>{item.label}</strong>
              <small>{item.summary}</small>
            </div>
          </button>
        ))}
      </div>
      <div
        className="c-advantage-panel"
        role="tabpanel"
        id={`${id}-panel`}
        aria-labelledby={`${id}-tab-${active}`}
      >
        <div className="c-advantage-media">
          <GalleryTrigger
            images={brandGallery}
            index={brandImageIndex(selectedImage)}
            className={`c-advantage-image ${story.id === "identity" ? "is-certificate" : ""}`}
          >
            <img
              src={brandAssets[selectedImage].src}
              alt={brandAssets[selectedImage].title}
              loading="lazy"
            />
            <span className="c-expand">查看完整原图 ↗</span>
          </GalleryTrigger>
          <div
            className="c-advantage-thumbnails"
            aria-label={`${story.label}相关资料`}
          >
            {story.images.map((key) => (
              <button
                key={key}
                aria-pressed={selectedImage === key}
                onClick={() => setImageKey(key)}
                aria-label={`展示：${brandAssets[key].title}`}
              >
                <img src={brandAssets[key].src} alt="" loading="lazy" />
                <span>{brandAssets[key].title}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="c-advantage-copy">
          <span className="c-eyebrow">{story.kicker}</span>
          <h3>{story.title}</h3>
          <p className="c-advantage-description">{story.description}</p>
          <ul className="c-advantage-points">
            {story.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <div className="c-advantage-stats">
            {story.stats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
          <div className="c-advantage-actions">
            {story.link && (
              <ChapterLink to={story.link.to} className="c-text-button">
                {story.link.label} →
              </ChapterLink>
            )}
            {story.video && (
              <InlinePanel
                title={brandVideo.title}
                label={`观看现场展示 · ${brandVideo.duration}`}
                className="c-brand-video-trigger"
              >
                <div className="c-brand-video">
                  <video
                    controls
                    playsInline
                    preload="none"
                    poster={brandVideo.poster}
                    aria-label={brandVideo.title}
                  >
                    <source src={brandVideo.src} type="video/mp4" />
                    您的浏览器不支持视频播放。
                  </video>
                  <div>
                    <span className="c-eyebrow">
                      现场实拍 · {brandVideo.duration}
                    </span>
                    <h3>把检索过程，也展示给你看</h3>
                    <p>{brandVideo.note}</p>
                    <p>
                      配合品牌原图、老师介绍与班级成绩，继续了解好老师升学帮。
                    </p>
                  </div>
                </div>
              </InlinePanel>
            )}
            {!story.link && !story.video && (
              <GalleryTrigger
                images={brandGallery}
                index={brandImageIndex(selectedImage)}
                className="c-text-button"
              >
                <span>
                  {story.id === "identity"
                    ? "查看品牌证书与完整资料"
                    : "放大查看本组资料"}{" "}
                  ↗
                </span>
              </GalleryTrigger>
            )}
          </div>
        </div>
      </div>
      <div className="c-advantage-note">
        <span>资料说明</span>
        <p>{story.note}</p>
        <GalleryTrigger
          images={brandGallery}
          index={brandImageIndex(selectedImage)}
        >
          <span>全部 {brandGallery.length} 张原图 ↗</span>
        </GalleryTrigger>
      </div>
    </div>
  );
}
