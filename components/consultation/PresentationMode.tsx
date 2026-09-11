"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
  type ReactNode,
} from "react";
import { chapters } from "@/data/consultation";
import { LightboxProvider } from "./LightboxGallery";
const NavigationContext = createContext<(id: string) => void>(() => {});
export function ChapterLink({
  to,
  children,
  className = "",
}: {
  to: string;
  children: ReactNode;
  className?: string;
}) {
  const go = useContext(NavigationContext);
  return (
    <a
      className={className}
      href={`#${to}`}
      onClick={(e) => {
        e.preventDefault();
        go(to);
      }}
    >
      {children}
    </a>
  );
}
export default function PresentationMode({
  children,
}: {
  children: ReactNode;
}) {
  const [presenting, setPresenting] = useState(false);
  const [active, setActive] = useState(0);
  const root = useRef<HTMLDivElement>(null);
  const savedScroll = useRef(0);
  const modeButton = useRef<HTMLButtonElement>(null);
  const select = useCallback(
    (id: string) => {
      const i = chapters.findIndex((c) => c.id === id);
      if (i < 0) return;
      setActive(i);
      if (!presenting) {
        document.getElementById(id)?.scrollIntoView({
          behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "instant"
            : "smooth",
          block: "start",
        });
      } else {
        requestAnimationFrame(() => {
          const node = document.getElementById(id);
          if (node) node.scrollTop = 0;
        });
      }
    },
    [presenting],
  );
  const exit = useCallback(() => {
    setPresenting(false);
    requestAnimationFrame(() => {
      window.scrollTo({ top: savedScroll.current, behavior: "instant" });
      modeButton.current?.focus({ preventScroll: true });
    });
  }, []);
  useEffect(() => {
    if (!presenting) return;
    const before = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const key = (e: KeyboardEvent) => {
      if (document.querySelector("dialog[open]")) return;
      if (e.key === "Escape") {
        e.preventDefault();
        exit();
        return;
      }
      const el = e.target as HTMLElement;
      if (
        el.closest(
          'input,textarea,select,[contenteditable="true"],[role="tablist"],video,iframe',
        )
      )
        return;
      if (e.code === "Space" && el.closest("button,a")) return;
      let delta = 0;
      if (["ArrowRight", "ArrowDown"].includes(e.key) || e.code === "Space")
        delta = 1;
      if (["ArrowLeft", "ArrowUp"].includes(e.key)) delta = -1;
      if (delta) {
        e.preventDefault();
        setActive((n) => Math.min(chapters.length - 1, Math.max(0, n + delta)));
      }
    };
    window.addEventListener("keydown", key);
    return () => {
      document.body.style.overflow = before;
      window.removeEventListener("keydown", key);
    };
  }, [presenting, exit]);
  useEffect(() => {
    const nav = root.current?.querySelector(".c-chapter-nav");
    const link = nav?.children[active] as HTMLElement | undefined;
    if (nav && link && matchMedia("(max-width: 980px)").matches) {
      nav.scrollTo({
        left: link.offsetLeft - nav.clientWidth / 2 + link.clientWidth / 2,
        behavior: "instant",
      });
    }
    if (presenting) {
      const section = document.getElementById(chapters[active].id);
      if (section) {
        section.scrollTop = 0;
        section.tabIndex = -1;
        section.focus({ preventScroll: true });
      }
    }
  }, [active, presenting]);
  useEffect(() => {
    if (presenting) return;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        let index = 0;
        for (let i = 0; i < chapters.length; i++) {
          const top = document
            .getElementById(chapters[i].id)
            ?.getBoundingClientRect().top;
          if (top !== undefined && top <= window.innerHeight * 0.38) index = i;
        }
        setActive(index);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [presenting]);
  return (
    <NavigationContext.Provider value={select}>
      <LightboxProvider>
        <div
          ref={root}
          className={`consultation-site promo-page ${presenting ? "is-presenting" : ""}`}
          data-chapter={active}
        >
          <a href="#national" className="p-skip">
            跳到主要内容
          </a>
          <header className="c-header">
            <ChapterLink to="national" className="c-brand">
              <img
                className="c-brand-logo"
                src="/promo/haolaoshi-logo.png"
                alt="好老师升学帮"
                width={315}
                height={78}
              />
              <span>浙江专升本 · 可视化升学说明书</span>
            </ChapterLink>
            <div className="c-mode-switch" aria-label="浏览模式">
              <button
                aria-pressed={!presenting}
                onClick={() => {
                  if (presenting) exit();
                }}
              >
                普通浏览
              </button>
              <button
                ref={modeButton}
                aria-pressed={presenting}
                onClick={() => {
                  if (!presenting) {
                    savedScroll.current = window.scrollY;
                    setPresenting(true);
                  }
                }}
              >
                咨询讲解 <span>↗</span>
              </button>
            </div>
          </header>
          <nav className="c-chapter-nav" aria-label="章节导航">
            {chapters.map((c, i) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                aria-current={active === i ? "step" : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  select(c.id);
                }}
              >
                <span>{String(i + 1).padStart(2, "0")}</span>
                <b>{c.short}</b>
              </a>
            ))}
          </nav>
          <main className="c-main">{children}</main>
          {presenting && (
            <div className="c-presentation-controls">
              <button onClick={exit} className="c-exit">
                退出讲解 <kbd>Esc</kbd>
              </button>
              <div className="c-progress" aria-live="polite">
                <strong>
                  {String(active + 1).padStart(2, "0")}{" "}
                  <span>/ {chapters.length}</span>
                </strong>
                <span>{chapters[active].short}</span>
              </div>
              <div className="c-page-buttons">
                <span>方向键 / 空格翻页</span>
                <button
                  aria-label="上一章节"
                  disabled={active === 0}
                  onClick={() => setActive((n) => n - 1)}
                >
                  ←
                </button>
                <button
                  aria-label="下一章节"
                  disabled={active === chapters.length - 1}
                  onClick={() => setActive((n) => n + 1)}
                >
                  →
                </button>
              </div>
            </div>
          )}
        </div>
      </LightboxProvider>
    </NavigationContext.Provider>
  );
}
