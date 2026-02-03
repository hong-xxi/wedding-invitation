const images = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
  ];
  
  export default function GallerySection() {
    return (
      <section>
        <div
          style={{
            display: "flex",
            overflowX: "auto",
            gap: "12px",
          }}
        >
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              style={{
                width: "200px",
                borderRadius: "4px",
              }}
            />
          ))}
        </div>
      </section>
    );
  }
  