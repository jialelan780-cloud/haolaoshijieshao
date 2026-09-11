"use client";
import {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import type { GalleryImage } from "@/data/consultation";

type Viewer =
  | { images: GalleryImage[]; index: number }
  | { url: string; title: string };
const GalleryContext = createContext<{ open: (v: Viewer) => void }>({
  open: () => {},
});
export function LightboxProvider({ children }: { children: ReactNode }) {
  const [viewer, setViewer] = useState<Viewer | null>(null);
  const [zoom, setZoom] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLElement | null>(null);
  const touch = useRef<number | null>(null);
  const frameCleanup = useRef<(() => void) | null>(null);
  useEffect(
    () => () => {
      frameCleanup.current?.();
    },
    [],
  );
  const close = useCallback(() => {
    frameCleanup.current?.();
    frameCleanup.current = null;
    dialog.current?.close();
    setViewer(null);
    setZoom(false);
    requestAnimationFrame(() =>
      trigger.current?.focus({ preventScroll: true }),
    );
  }, []);
  const move = useCallback((direction: number) => {
    setZoom(false);
    setViewer((v) =>
      v && "images" in v
        ? {
            ...v,
            index: (v.index + direction + v.images.length) % v.images.length,
          }
        : v,
    );
  }, []);
  useEffect(() => {
    if (!viewer) return;
    dialog.current?.showModal();
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        e.stopImmediatePropagation();
        close();
      } else if (
        "images" in viewer &&
        ["ArrowLeft", "ArrowRight"].includes(e.key)
      ) {
        e.preventDefault();
        e.stopImmediatePropagation();
        move(e.key === "ArrowRight" ? 1 : -1);
      }
    };
    window.addEventListener("keydown", key, true);
    return () => {
      document.body.style.overflow = old;
      window.removeEventListener("keydown", key, true);
    };
  }, [!!viewer, close, move]);
  const title = viewer
    ? "images" in viewer
      ? viewer.images[viewer.index].title
      : viewer.title
    : "";
  return (
    <GalleryContext.Provider
      value={{
        open: (v) => {
          trigger.current = document.activeElement as HTMLElement;
          setZoom(false);
          setViewer(v);
        },
      }}
    >
      {children}
      <dialog
        ref={dialog}
        className="c-lightbox"
        aria-label={title}
        onCancel={(e) => {
          e.preventDefault();
          close();
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        {viewer && (
          <div className={`c-viewer ${"url" in viewer ? "is-document" : ""}`}>
            <div className="c-viewer-header">
              <div>
                <span>{"images" in viewer ? "图片资料" : "页内查看"}</span>
                <h2>{title}</h2>
              </div>
              <div className="c-viewer-actions">
                {"images" in viewer && (
                  <button onClick={() => setZoom(!zoom)} aria-pressed={zoom}>
                    {zoom ? "适应屏幕" : "放大细节"}
                  </button>
                )}
                <button onClick={close} aria-label="关闭预览" autoFocus>
                  关闭 ×
                </button>
              </div>
            </div>
            {"images" in viewer ? (
              <>
                <div
                  className={`c-image-stage ${zoom ? "is-zoomed" : ""}`}
                  onTouchStart={(e) => {
                    touch.current = e.touches[0]?.clientX ?? null;
                  }}
                  onTouchEnd={(e) => {
                    if (!zoom && touch.current !== null) {
                      const dx =
                        (e.changedTouches[0]?.clientX ?? 0) - touch.current;
                      if (Math.abs(dx) > 60) move(dx < 0 ? 1 : -1);
                    }
                    touch.current = null;
                  }}
                >
                  <img src={viewer.images[viewer.index].src} alt={title} />
                </div>
                <div className="c-viewer-bottom">
                  <button
                    disabled={viewer.images.length < 2}
                    onClick={() => move(-1)}
                    aria-label="上一张图片"
                  >
                    ←
                  </button>
                  <div aria-live="polite">
                    <strong>
                      {viewer.index + 1} / {viewer.images.length}
                    </strong>
                    <p>{viewer.images[viewer.index].caption || title}</p>
                  </div>
                  <button
                    disabled={viewer.images.length < 2}
                    onClick={() => move(1)}
                    aria-label="下一张图片"
                  >
                    →
                  </button>
                </div>
              </>
            ) : (
              <iframe
                src={viewer.url}
                title={viewer.title}
                className="c-document-frame"
                onLoad={(e) => {
                  frameCleanup.current?.();
                  try {
                    const win = e.currentTarget.contentWindow;
                    if (!win) return;
                    const escape = (event: KeyboardEvent) => {
                      if (
                        event.key === "Escape" &&
                        !win.document.querySelector(
                          'dialog[open],[aria-modal="true"]',
                        )
                      ) {
                        event.preventDefault();
                        close();
                      }
                    };
                    win.addEventListener("keydown", escape);
                    frameCleanup.current = () =>
                      win.removeEventListener("keydown", escape);
                  } catch {
                    /* Some browser PDF viewers do not expose their document. The close control remains outside the frame. */
                  }
                }}
              />
            )}
          </div>
        )}
      </dialog>
    </GalleryContext.Provider>
  );
}
export function GalleryTrigger({
  images,
  index = 0,
  children,
  className = "",
}: {
  images: GalleryImage[];
  index?: number;
  children?: ReactNode;
  className?: string;
}) {
  const { open } = useContext(GalleryContext);
  const item = images[index];
  return (
    <button
      type="button"
      className={`c-gallery-trigger ${className}`}
      onClick={() => open({ images, index })}
      aria-label={`放大查看：${item.title}`}
    >
      {children || (
        <>
          <img src={item.src} alt={item.title} loading="lazy" />
          <span className="c-expand">查看大图 ↗</span>
        </>
      )}
    </button>
  );
}
export function InlineDocument({
  url,
  title,
  children,
  className = "",
}: {
  url: string;
  title: string;
  children?: ReactNode;
  className?: string;
}) {
  const { open } = useContext(GalleryContext);
  return (
    <button
      type="button"
      className={`c-text-button ${className}`}
      onClick={() => open({ url, title })}
    >
      {children || <>{title} ↗</>}
    </button>
  );
}

export function InlinePanel({
  title,
  children,
  label,
  className = "",
}: {
  title: string;
  children: ReactNode;
  label?: string;
  className?: string;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [visible, setVisible] = useState(false);
  const oldOverflow = useRef("");
  function close() {
    dialog.current?.close();
    setVisible(false);
    document.body.style.overflow = oldOverflow.current;
  }
  return (
    <>
      <button
        type="button"
        className={`c-text-button ${className}`}
        onClick={() => {
          oldOverflow.current = document.body.style.overflow;
          document.body.style.overflow = "hidden";
          setVisible(true);
          dialog.current?.showModal();
        }}
      >
        {label || title} <span>↗</span>
      </button>
      <dialog
        ref={dialog}
        className="c-tool-dialog"
        aria-label={title}
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
            <h2>{title}</h2>
            <button onClick={close} aria-label="关闭内容" autoFocus>
              关闭 ×
            </button>
          </div>
          {visible && children}
        </div>
      </dialog>
    </>
  );
}
