"use client";
import { useState } from "react";
import { controlLines, subjectsFor } from "@/data/consultation";
export default function ControlLineChart() {
  const [category, setCategory] = useState("理工类"),
    [year, setYear] = useState(2026);
  const row = controlLines.rows.find((x) => x.category === category)!;
  const yearIndex = controlLines.years.indexOf(year);
  return (
    <div className="c-score-tool">
      <div className="c-score-filters">
        <label>
          考试类别
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {controlLines.rows.map((r) => (
              <option key={r.category}>{r.category}</option>
            ))}
          </select>
        </label>
        <label>
          对照年份
          <select
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
          >
            {controlLines.years.map((y) => (
              <option key={y}>{y}</option>
            ))}
          </select>
        </label>
        <span>{subjectsFor(category).join(" + ")} · 总分 300 分</span>
      </div>
      <div className="c-score-layout">
        <div className="c-score-highlight" aria-live="polite">
          <span>
            {year} 年 · {category}省控线
          </span>
          <strong>
            {row.values[yearIndex]}
            <small>分</small>
          </strong>
          <p>
            这是该类别的最低控制线。
            <br />
            不是任一院校的录取承诺。
          </p>
        </div>
        <div className="c-chart">
          <div className="c-chart-top">
            <h3>{category} · 近五年变化</h3>
            <span>分数 / 300</span>
          </div>
          <div
            className="c-bar-chart"
            role="img"
            aria-label={row.values
              .map((v, i) => `${controlLines.years[i]}年${v}分`)
              .join("，")}
          >
            <div className="c-chart-grid">
              <span>300</span>
              <span>200</span>
              <span>100</span>
              <span>0</span>
            </div>
            {row.values.map((v, i) => (
              <button
                key={i}
                onClick={() => setYear(controlLines.years[i])}
                className={year === controlLines.years[i] ? "selected" : ""}
                aria-label={`${controlLines.years[i]}年${v}分`}
                aria-pressed={year === controlLines.years[i]}
              >
                <div className="c-bar-space">
                  <div
                    style={{ height: `${(v / 300) * 100}%` }}
                    className="c-bar"
                  >
                    <strong>{v}</strong>
                  </div>
                </div>
                <span>{controlLines.years[i]}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="c-line-meaning">
        <strong>
          省控线 <b>≠</b> 学校录取线
        </strong>
        <p>
          过省控线 → 按志愿、分数及计划投档 → 院校审核录取
          <br />
          <span>
            不同类别不能只凭省控线高低判断难度；目标院校还要看专业限制、计划与历年位次。
          </span>
        </p>
      </div>
      <details className="c-inline-details">
        <summary>查看八大类别完整数据与来源 ＋</summary>
        <div className="p-table-scroll">
          <table className="p-table">
            <thead>
              <tr>
                <th>类别</th>
                {controlLines.years.map((y) => (
                  <th key={y}>{y}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {controlLines.rows.map((r) => (
                <tr key={r.category}>
                  <th>{r.category}</th>
                  {r.values.map((v, i) => (
                    <td key={i}>{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="c-citations">
          {controlLines.sources.map((s) => (
            <a key={s.url} href={s.url} target="_blank" rel="noreferrer">
              {s.title} ↗
            </a>
          ))}
        </div>
      </details>
    </div>
  );
}
