import { invitation } from "../data/invitation";

export default function MessageSection() {
  return (
    <section>
      <p style={{ fontSize: "14px", marginBottom: "24px" }}>06 │ 27</p>
      <div
        style={{
          width: "1px",
          height: "60px",
          background: "var(--line)",
          marginBottom: "24px",
        }}
      />
      {invitation.message.map((line, i) => (
        <p
          key={i}
          className="fade"
          style={{ fontSize: "14px", marginBottom: "6px" }}
        >
          {line}
        </p>
      ))}
    </section>
  );
}
