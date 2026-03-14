/**
 * ProfileHeader — Your name + the "Updated [date]" timestamp.
 *
 * Props:
 *   name        — Your display name
 *   updatedDate — Human-readable date string, e.g. "Mar 14, 2026"
 */
export default function ProfileHeader({ name = "Your Name", updatedDate = "Mar 14, 2026" }) {
  return (
    <header className="mb-7">
      <p
        className="text-[14.5px] font-normal m-0 mb-[3px]"
        style={{ color: "#1C1C1C", letterSpacing: "-0.01em" }}
      >
        {name}
      </p>
      <p className="text-[12.5px] m-0" style={{ color: "#A8A5A0" }}>
        Updated {updatedDate}
      </p>
    </header>
  );
}