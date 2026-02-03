import { useState } from "react";

const images = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
    "/images/7.jpg",
    "/images/8.jpg",
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