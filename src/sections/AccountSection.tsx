import { useState } from "react";

type Account = {
  bank: string;
  number: string;
  holder: string;
};

const accounts: Account[] = [
  {
    bank: "국민은행",
    number: "123456-01-234567",
    holder: "김수환",
  },
  {
    bank: "신한은행",
    number: "110-123-456789",
    holder: "홍혜진",
  },
];

export default function AccountSection() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const copy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <section>
      {/* 제목 + 토글 버튼 */}
      <div style={styles.header} onClick={() => setOpen(!open)}>
        <h2 style={styles.title}>마음 전하실 곳</h2>
        <span style={styles.arrow}>{open ? "▲" : "▼"}</span>
      </div>

      {/* 접히는 영역 */}
      <div
        style={{
          ...styles.container,
          maxHeight: open ? "800px" : "0px",
          opacity: open ? 1 : 0,
        }}
      >
        {accounts.map((acc) => (
          <div key={acc.number} style={styles.card}>
            <p>{acc.bank}</p>
            <p>{acc.holder}</p>

            <div style={styles.row}>
              <span>{acc.number}</span>
              <button
                style={styles.copy}
                onClick={() => copy(acc.number)}
                aria-label="계좌번호 복사"
              >
                📋
              </button>
            </div>

            {copied === acc.number && (
              <p style={styles.copied}>복사되었습니다</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ================= 스타일 ================= */

const styles: Record<string, React.CSSProperties> = {
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    cursor: "pointer",
  },
  title: {
    fontSize: "18px",
    margin: 0,
  },
  arrow: {
    fontSize: "14px",
  },
  container: {
    overflow: "hidden",
    transition: "max-height 0.4s ease, opacity 0.3s ease",
  },
  card: {
    background: "#ffffff",
    borderRadius: "12px",
    padding: "16px",
    marginTop: "16px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  },
  row: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    marginTop: "8px",
  },
  copy: {
    border: "none",
    background: "transparent",
    fontSize: "18px",
    cursor: "pointer",
  },
  copied: {
    fontSize: "12px",
    color: "#5fa59b",
    marginTop: "6px",
  },
};
