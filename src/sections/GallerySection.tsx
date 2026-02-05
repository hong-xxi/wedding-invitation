import { useState, useRef } from "react";

const BASE_URL = import.meta.env.BASE_URL as string;

const images = [
  `${BASE_URL}images/1.jpg`,
  `${BASE_URL}images/2.jpg`,
  `${BASE_URL}images/3.jpg`,
  `${BASE_URL}images/4.jpg`,
  `${BASE_URL}images/5.jpg`,
  `${BASE_URL}images/6.jpg`,
  `${BASE_URL}images/7.jpg`,
  `${BASE_URL}images/8.jpg`,
];

export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);
  const touchStartX = useRef<number | null>(null);

  /** 스와이프 시작 */
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  /** 스와이프 종료 */
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || activeIndex === null) return;

    const diff = touchStartX.current - e.changedTouches[0].clientX;

    if (Math.abs(diff) > 50) {
      setAnimating(true);
      setTimeout(() => setAnimating(false), 200);

      if (diff > 0 && activeIndex < images.length - 1) {
        setActiveIndex(activeIndex + 1);
      } else if (diff < 0 && activeIndex > 0) {
        setActiveIndex(activeIndex - 1);
      }
    }

    touchStartX.current = null;
  };

  return (
    <section style={styles.section}>
      <p style={styles.title}>갤러리</p>

      {/* 썸네일 가로 스크롤 */}
      <div style={styles.row}>
        {images.map((src, idx) => (
          <img
            key={src}
            src={src}
            style={styles.thumb}
            onClick={() => setActiveIndex(idx)}
          />
        ))}
      </div>

      {/* 확대 모달 */}
      {activeIndex !== null && (
        <div
          style={styles.overlay}
          onClick={() => setActiveIndex(null)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <img
            src={images[activeIndex]}
            style={{
              ...styles.modal,
              ...(animating ? styles.animating : {}),
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

/* ================= 스타일 ================= */

const styles: Record<string, React.CSSProperties> = {
  section: {
    maxWidth: "420px",
    margin: "0 auto",
  },
  title: {
    fontSize: "15px",
    marginBottom: "16px",
    textAlign: "center",
  },
  row: {
    display: "flex",
    gap: "12px",
    overflowX: "auto",
    paddingBottom: "8px",
  },
  thumb: {
    width: "72px",
    height: "72px",
    borderRadius: "10px",
    objectFit: "cover",
    cursor: "pointer",
    flexShrink: 0,
    boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
    transition: "transform 0.2s",
  },
  overlay: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.7)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 999,
    animation: "fadeIn 0.25s ease",
  },
  modal: {
    maxWidth: "90%",
    maxHeight: "80%",
    borderRadius: "14px",
    transition: "transform 0.25s ease, opacity 0.25s ease",
    transform: "scale(1)",
    opacity: 1,
  },
  animating: {
    transform: "scale(0.96)",
    opacity: 0.8,
  },
};
