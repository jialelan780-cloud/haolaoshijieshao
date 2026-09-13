"use client";
import { useState, useRef, type FormEvent } from "react";
import { categories, subjectsFor, quizBank } from "@/data/consultation";
import { ChapterLink } from "./PresentationMode";

type Profile = {
  grade: string;
  category: string;
  hours: number;
  goal: string;
  foundation: string;
};
export function buildStudyPlan(p: Profile) {
  const start = ["大一", "大二", "大三"].indexOf(p.grade),
    subject = subjectsFor(p.category)[0];
  const phases = [
    {
      title: "大一 · 基础建设",
      tasks: [
        `英语词汇与${subject}基础梳理`,
        `按时间选择周末课程：上午09:00–12:00，下午14:00–17:00`,
        "每周回顾错题；结合班型权益安排大一暑假集训",
      ],
    },
    {
      title: "大二 · 强化提升",
      tasks: [
        `${subject}分模块强化，英语持续积累`,
        "结合课余时间增加周一至周四18:00–21:00晚课",
        "阶段测评后安排薄弱模块重学；衔接周末课与寒暑假集训",
      ],
    },
    {
      title: "大三 · 冲刺与录取",
      tasks: [
        "按班级课表衔接秋季强化、寒假与考前集训",
        "真题训练、限时模考、错题复盘",
        `${p.goal === "冲刺公办" ? "重点对比目标公办院校的计划、专业要求与历年录取情况" : "结合自己的基础，比较目标院校的计划、专业要求与录取情况"}`,
        "按当年政策完成报名及首次志愿填报，再参加统一考试与后续录取",
      ],
    },
  ].slice(start);
  const english =
    Math.round(p.hours * (p.foundation === "英语较弱" ? 0.6 : 0.4) * 10) / 10;
  return {
    phases,
    english,
    other: Math.round((p.hours - english) * 10) / 10,
    subject,
    reminder:
      p.hours < 6
        ? "当前每周时间少于一个完整周末课日（6小时），先与老师协调课程参加方式，再增加学习量。"
        : p.grade === "大一" && p.hours > 12
          ? "大一常规周末课最多12小时，超出的时间可用于自主复习；不要把自主复习时间理解为额外开课时数。"
          : "课程时间以对应班型实际课表为准；下方分配含课程与自主学习。",
  };
}
export default function PlanningTools() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [mode, setMode] = useState<"quiz" | "plan">("quiz"),
    [track, setTrack] = useState<"math" | "chinese">("math"),
    [answers, setAnswers] = useState<Record<string, number>>({}),
    [graded, setGraded] = useState(false),
    [error, setError] = useState("");
  const [profile, setProfile] = useState<Profile>({
      grade: "大一",
      category: "理工类",
      hours: 6,
      goal: "冲刺公办",
      foundation: "待了解",
    }),
    [plan, setPlan] = useState<ReturnType<typeof buildStudyPlan> | null>(null);
  const savedOverflow = useRef(""),
    trigger = useRef<HTMLElement | null>(null);
  const questions = [...quizBank.english, ...quizBank[track]];
  function show(m: "quiz" | "plan") {
    trigger.current = document.activeElement as HTMLElement;
    setMode(m);
    savedOverflow.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.current?.showModal();
  }
  function close() {
    dialog.current?.close();
    document.body.style.overflow = savedOverflow.current;
    trigger.current?.focus({ preventScroll: true });
  }
  function grade(e: FormEvent) {
    e.preventDefault();
    const missing = questions.find((q) => answers[q.id] === undefined);
    if (missing) {
      setError("请先完成全部6道题，再查看结果。");
      document.getElementById(missing.id)?.focus();
      return;
    }
    setGraded(true);
    setError("");
  }
  const correct = questions.filter((q) => answers[q.id] === q.answer).length;
  const enCorrect = quizBank.english.filter(
    (q) => answers[q.id] === q.answer,
  ).length;
  function useQuiz() {
    setProfile((p) => ({
      ...p,
      category: track === "math" ? "理工类" : "文史类",
      foundation:
        enCorrect < 2
          ? "英语较弱"
          : correct - enCorrect < 2
            ? "数学/语文较弱"
            : "有一定基础",
    }));
    setPlan(null);
    setMode("plan");
  }
  function download() {
    if (!plan) return;
    const text = `我的升本学习规划\n${profile.grade} · ${profile.category} · ${profile.goal}\n每周${profile.hours}小时：英语${plan.english}小时，${plan.subject}${plan.other}小时\n当前基础：${profile.foundation}\n\n${plan.phases.map((p) => p.title + "\n" + p.tasks.map((t) => "• " + t).join("\n")).join("\n\n")}\n\n${plan.reminder}\n本规划为学习安排参考，非录取预测。依据所提供三年课程图解，具体课程权益与开课安排以校区通知及合同为准。`;
    const url = URL.createObjectURL(
      new Blob([text], { type: "text/plain;charset=utf-8" }),
    );
    const a = document.createElement("a");
    a.href = url;
    a.download = "我的升本学习规划.txt";
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  return (
    <>
      <div className="c-action-grid">
        <ChapterLink to="major-path" className="c-action-card">
          <span>01 / 找准方向</span>
          <h3>
            查询我的专业
            <br />
            升本类别
          </h3>
          <p>确认考什么，再谈怎么学。</p>
          <b>开始查询 ↗</b>
        </ChapterLink>
        <button className="c-action-card" onClick={() => show("quiz")}>
          <span>02 / 了解起点</span>
          <h3>
            做一次
            <br />
            基础自测
          </h3>
          <p>6道体验题，看一看基础知识。</p>
          <b>开始自测 ↗</b>
        </button>
        <button className="c-action-card" onClick={() => show("plan")}>
          <span>03 / 安排接下来</span>
          <h3>
            生成我的
            <br />
            升本学习规划
          </h3>
          <p>按年级、类别和可用时间安排。</p>
          <b>生成规划 ↗</b>
        </button>
      </div>
      <dialog
        ref={dialog}
        className="c-tool-dialog"
        aria-label={mode === "quiz" ? "专升本基础自测" : "我的升本学习规划"}
        onCancel={(e) => {
          e.preventDefault();
          close();
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        <div className="c-tool-inner">
          <div className="c-tool-heading">
            <div>
              <span className="c-eyebrow">我的下一步</span>
              <h2>{mode === "quiz" ? "专升本基础自测" : "我的升本学习规划"}</h2>
            </div>
            <button onClick={close} aria-label="关闭工具" autoFocus>
              关闭 ×
            </button>
          </div>
          {mode === "quiz" ? (
            <>
              <p className="c-footnote">
                原创入门体验题：英语3题 +
                数学或语文3题。用于讨论学习起点，不是正式考试，也不预测录取概率。
              </p>
              <div className="c-category-pills">
                <button
                  aria-pressed={track === "math"}
                  onClick={() => {
                    setTrack("math");
                    setAnswers({});
                    setGraded(false);
                    setError("");
                  }}
                >
                  英语 + 数学
                </button>
                <button
                  aria-pressed={track === "chinese"}
                  onClick={() => {
                    setTrack("chinese");
                    setAnswers({});
                    setGraded(false);
                    setError("");
                  }}
                >
                  英语 + 语文
                </button>
              </div>
              <form onSubmit={grade}>
                {questions.map((q, i) => (
                  <fieldset
                    key={q.id}
                    id={q.id}
                    tabIndex={-1}
                    className="c-question"
                  >
                    <legend>
                      <span>
                        {String(i + 1).padStart(2, "0")} · {q.skill}
                      </span>
                      {q.question}
                    </legend>
                    <div>
                      {q.options.map((option, j) => (
                        <label
                          key={option}
                          className={answers[q.id] === j ? "is-checked" : ""}
                        >
                          <input
                            type="radio"
                            name={q.id}
                            value={j}
                            checked={answers[q.id] === j}
                            disabled={graded}
                            onChange={() =>
                              setAnswers((a) => ({ ...a, [q.id]: j }))
                            }
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                    {graded && (
                      <p
                        className={
                          answers[q.id] === q.answer ? "is-correct" : "is-wrong"
                        }
                      >
                        {answers[q.id] === q.answer ? "✓ 回答正确" : "需巩固"} ·{" "}
                        {q.explanation}
                      </p>
                    )}
                  </fieldset>
                ))}
                {error && (
                  <p role="alert" className="c-error">
                    {error}
                  </p>
                )}
                {!graded ? (
                  <button type="submit" className="c-button c-button-dark">
                    查看自测结果 →
                  </button>
                ) : (
                  <div className="c-quiz-result" aria-live="polite">
                    <strong>答对 {correct} / 6 题</strong>
                    <p>
                      英语 {enCorrect}/3 · {track === "math" ? "数学" : "语文"}{" "}
                      {correct - enCorrect}/3。
                      {correct === 6
                        ? "这组基础题掌握较好，下一步可让老师安排更完整的阶段测评。"
                        : "建议先回看上方解析，再把未掌握的知识点列入复习。"}
                    </p>
                    <div className="c-inline-actions">
                      <button
                        type="button"
                        className="c-button c-button-dark"
                        onClick={useQuiz}
                      >
                        把结果带入学习规划 →
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setAnswers({});
                          setGraded(false);
                          setError("");
                        }}
                      >
                        重新自测
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </>
          ) : (
            <>
              <form
                className="c-plan-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  setPlan(buildStudyPlan(profile));
                }}
              >
                <label>
                  当前年级
                  <select
                    value={profile.grade}
                    onChange={(e) => {
                      setPlan(null);
                      setProfile((p) => ({ ...p, grade: e.target.value }));
                    }}
                  >
                    {["大一", "大二", "大三"].map((g) => (
                      <option key={g}>{g}</option>
                    ))}
                  </select>
                </label>
                <label>
                  拟报考类别
                  <select
                    value={profile.category}
                    onChange={(e) => {
                      setPlan(null);
                      setProfile((p) => ({ ...p, category: e.target.value }));
                    }}
                  >
                    {categories.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </label>
                <label>
                  每周可投入时间（小时）
                  <input
                    type="number"
                    required
                    min="2"
                    max="60"
                    step="1"
                    value={profile.hours}
                    onChange={(e) => {
                      setPlan(null);
                      setProfile((p) => ({
                        ...p,
                        hours: Number(e.target.value),
                      }));
                    }}
                  />
                </label>
                <label>
                  升本目标
                  <select
                    value={profile.goal}
                    onChange={(e) => {
                      setPlan(null);
                      setProfile((p) => ({ ...p, goal: e.target.value }));
                    }}
                  >
                    {["冲刺公办", "稳妥备考本科", "暂未确定"].map((g) => (
                      <option key={g}>{g}</option>
                    ))}
                  </select>
                </label>
                <label>
                  目前基础
                  <select
                    value={profile.foundation}
                    onChange={(e) => {
                      setPlan(null);
                      setProfile((p) => ({ ...p, foundation: e.target.value }));
                    }}
                  >
                    {["待了解", "英语较弱", "数学/语文较弱", "有一定基础"].map(
                      (g) => (
                        <option key={g}>{g}</option>
                      ),
                    )}
                  </select>
                </label>
                <button className="c-button c-button-dark" type="submit">
                  生成我的规划 →
                </button>
              </form>
              {plan && (
                <div className="c-generated-plan" aria-live="polite">
                  <span className="c-eyebrow">
                    {profile.grade}出发 · {profile.category}
                  </span>
                  <h3>把每周 {profile.hours} 小时，用在具体任务上</h3>
                  <div className="c-plan-allocation">
                    <span>
                      英语 <strong>{plan.english}h</strong>
                    </span>
                    <span>
                      {plan.subject} <strong>{plan.other}h</strong>
                    </span>
                  </div>
                  <p className="c-footnote">
                    这是起步分配建议，可结合课程安排调整。{plan.reminder}
                  </p>
                  {plan.phases.map((p) => (
                    <article key={p.title}>
                      <h4>{p.title}</h4>
                      <ul>
                        {p.tasks.map((t) => (
                          <li key={t}>{t}</li>
                        ))}
                      </ul>
                    </article>
                  ))}
                  <p className="c-footnote">
                    参考所提供三年课程图解；具体课程权益和开课安排以班型及校区通知为准。与老师确认后再执行。
                  </p>
                  <button className="c-button c-button-dark" onClick={download}>
                    保存这份规划 ↓
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </dialog>
    </>
  );
}
