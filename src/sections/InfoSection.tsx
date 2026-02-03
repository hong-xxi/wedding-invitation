import { invitation } from "../data/invitation";

export default function InfoSection() {
  return (
    <section>
      <p style={{ fontSize: "14px", marginBottom: "8px" }}>
        {invitation.dateText}
      </p>
      <p style={{ fontSize: "13px", color: "var(--text-sub)" }}>
        {invitation.venue}
      </p>
    </section>
  );
}
