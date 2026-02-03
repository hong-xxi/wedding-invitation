export default function MapSection() {
    return (
      <section>
        <p style={{ marginBottom: "16px" }}>오시는 길</p>
        <button onClick={() => window.open("https://map.kakao.com")}>
          카카오맵 열기
        </button>
      </section>
    );
  }
  