export default function LocationSection() {
    const hallName = "더 바실리움 웨딩홀";
    const address = "서울특별시 중구 세종대로 99";
    const latitude = 37.566535;
    const longitude = 126.977969;
  
    return (
      <section>
        <h2 style={styles.title}>오시는 길</h2>
  
        {/* 웨딩홀 정보 */}
        <div style={styles.info}>
          <p style={styles.hall}>{hallName}</p>
          <p style={styles.address}>{address}</p>
        </div>
  
        {/* 간단한 교통편 */}
        <div style={styles.transport}>
          <p>🚇 지하철</p>
          <p>2호선 시청역 5번 출구 도보 5분</p>
  
          <p style={{ marginTop: "12px" }}>🚌 버스</p>
          <p>간선 101, 150 / 지선 7016</p>
  
          <p style={{ marginTop: "12px" }}>🚗 자가용</p>
          <p>건물 지하 주차장 이용 가능</p>
        </div>
  
        {/* 지도 버튼 */}
        <div style={styles.buttons}>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.button}
          >
            구글지도
          </a>
  
          <a
            href={`https://map.kakao.com/link/map/${hallName},${latitude},${longitude}`}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.button}
          >
            카카오지도
          </a>
  
          <a
            href={`https://map.naver.com/v5/search/${encodeURIComponent(
              hallName
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.button}
          >
            네이버지도
          </a>
        </div>
      </section>
    );
  }
  
  /* ================= 스타일 ================= */
  
  const styles: Record<string, React.CSSProperties> = {
    title: {
      fontSize: "18px",
      marginBottom: "16px",
    },
    info: {
      marginBottom: "20px",
    },
    hall: {
      fontWeight: 600,
      fontSize: "16px",
    },
    address: {
      fontSize: "14px",
      color: "#555",
    },
    transport: {
      fontSize: "14px",
      lineHeight: 1.6,
      marginBottom: "24px",
    },
    buttons: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    button: {
      display: "block",
      padding: "12px",
      borderRadius: "8px",
      backgroundColor: "#ffffff",
      color: "#333",
      textDecoration: "none",
      fontSize: "14px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
    },
  };
  