import { invitation } from "../data/invitation";

export default function CoverSection() {
  return (
    <section>
      <div className="vertical fade" style={{ fontSize: "20px" }}>
        {invitation.groom}
        <br />—<br />
        {invitation.bride}
      </div>

      <p
        className="fade"
        style={{ marginTop: "32px", fontSize: "12px", color: "var(--text-sub)" }}
      >
        우리의 아름다운 날
      </p>

      <p style={{ marginTop: "8px", fontSize: "12px" }}>2026.06.27</p>
    </section>
  );
}
