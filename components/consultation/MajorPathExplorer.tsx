"use client";
import { useState, useMemo, useId } from "react";
import { colleges, searchMajors } from "@/data/collegeMajorData";
import { subjectsFor } from "@/data/consultation";
import { GalleryTrigger, InlineDocument } from "./LightboxGallery";
import { TabButtons } from "@/components/PromoInteractive";
export default function MajorPathExplorer() {
  const [schoolIndex, setSchoolIndex] = useState(0),
    [query, setQuery] = useState(""),
    [selected, setSelected] = useState(colleges[0].majors[7].id),
    [category, setCategory] = useState("理工类");
  const id = useId(),
    school = colleges[schoolIndex];
  const matches = useMemo(() => searchMajors(school, query), [school, query]);
  const major = matches.find((x) => x.id === selected) || matches[0];
  const cat = major?.categories.includes(category)
    ? category
    : major?.categories[0];
  return (
    <div className="c-major-explorer">
      <TabButtons
        labels={colleges.map((c) => c.short)}
        active={schoolIndex}
        onChange={(i) => {
          setSchoolIndex(i);
          setSelected("");
        }}
        id={id}
        label="选择专科院校"
      />
      <div
        role="tabpanel"
        id={`${id}-panel`}
        aria-labelledby={`${id}-tab-${schoolIndex}`}
      >
        <div className="c-major-search">
          <label htmlFor="major-search">{school.name}</label>
          <div>
            <span aria-hidden="true">⌕</span>
            <input
              id="major-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="输入专业，如机电一体化、市场营销、艺术设计"
            />
            <button disabled={!query} onClick={() => setQuery("")}>
              清空
            </button>
          </div>
        </div>
        <div className="c-major-layout">
          <div className="c-major-list">
            <p aria-live="polite">
              已整理 {school.majors.length} 个专业 / 方向 · 匹配{" "}
              {matches.length} 项
            </p>
            <div className="c-major-options">
              {matches.map((m) => (
                <button
                  key={m.id}
                  aria-pressed={major?.id === m.id}
                  onClick={() => setSelected(m.id)}
                >
                  <span>{m.major}</span>
                  <small>
                    {m.categories.map((x) => x.replace("类", "")).join(" / ")}
                  </small>
                </button>
              ))}
              {!matches.length && (
                <div className="c-empty">
                  <strong>暂未找到这个专业</strong>
                  <p>
                    试试专业名称中的关键词；当前为已提供资料范围，未列出不代表不能报考。
                  </p>
                  <button onClick={() => setQuery("")}>
                    查看本校已整理专业
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="c-major-result" aria-live="polite">
            {major && cat ? (
              <>
                <span className="c-eyebrow">你的升本路径</span>
                <h3>{major.major}</h3>
                <div className="c-category-pills" aria-label="该专业可选类别">
                  {major.categories.map((c) => (
                    <button
                      key={c}
                      aria-pressed={cat === c}
                      onClick={() => setCategory(c)}
                    >
                      {c}
                    </button>
                  ))}
                </div>
                <div className="c-subject-result">
                  <span>选择{cat}，考试科目为</span>
                  <strong>{subjectsFor(cat).join(" ＋ ")}</strong>
                </div>
                <div className="c-major-directions">
                  <span>2026 年本科招生专业参考</span>
                  <p>
                    {major.directions[cat]?.length
                      ? major.directions[cat].join(" / ")
                      : "该类别本科专业需结合最新招生计划确认"}
                  </p>
                </div>
                <p
                  className={`c-footnote ${major.needsReview ? "c-review-note" : ""}`}
                >
                  {major.notes}
                </p>
                <InlineDocument
                  url="/zsb-query/"
                  title="完整院校与本科专业查询"
                  className="c-button c-button-dark"
                >
                  继续查看院校、专业和计划 ↗
                </InlineDocument>
              </>
            ) : (
              <p className="c-empty">更换关键词或学校，查看对应考试科目。</p>
            )}
          </div>
        </div>
        <div className="c-source-row">
          <span>专业名单依据所提供的三校专业表；括号内为方向或合作项目。</span>
          <GalleryTrigger
            images={colleges.map((c) => ({
              src: `/promo/major-school-${c.page}.webp`,
              title: `${c.name}专业类别原表`,
            }))}
            index={schoolIndex}
          >
            <span>查看原始专业表 ↗</span>
          </GalleryTrigger>
        </div>
      </div>
    </div>
  );
}
