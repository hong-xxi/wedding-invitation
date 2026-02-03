import { useState } from "react";

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
    const [active, setActive] = useState<string | null>(null);
  
    return (
      <section>
        <p style={{ fontSize: "15px", marginBottom: "16px" }}>갤러리</p>
  
        <div style={styles.row}>
          {images.map((src) => (
            <img
              key={src}
              src={src}
              style={styles.thumb}
              onClick={() => setActive(src)}
            />
          ))}
        </div>
  
        {active && (
          <div style={styles.overlay} onClick={() => setActive(null)}>
            <img src={active} style={styles.modal} />
          </div>
        )}
      </section>
    );
  }
  
  const styles: Record<string, React.CSSProperties> = {
    row: {
      display: "flex",
      gap: "12px",
      overflowX: "auto",
      paddingBottom: "8px",
    },
    thumb: {
      width: "72px",
      height: "72px",
      borderRadius: "8px",
      objectFit: "cover",
      cursor: "pointer",
      flexShrink: 0,
      boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
    },
    overlay: {
      position: "fixed",
      inset: 0,
      backgroundColor: "rgba(0,0,0,0.6)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 999,
    },
    modal: {
      maxWidth: "90%",
      maxHeight: "80%",
      borderRadius: "12px",
    },
  };