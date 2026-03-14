import NewBadge from "./Newbadge";

/**
 * WritingRow — One entry in the writing list.
 *
 * Props:
 *   year    — Year string ("2026") shown only on the first row of each year group. Pass null/undefined to hide.
 *   title   — Article title
 *   date    — Display date string, e.g. "16/02"
 *   isNew   — Whether to show the hand-drawn "New" badge
 *   href    — Link URL for the article (optional, defaults to "#")
 */
export default function WritingRow({ year, title, date, isNew = false, href = "#" }) {
  return (
    <div
      className="grid items-center py-2.75 border-b"
      style={{
        gridTemplateColumns: "72px 1fr auto",
        borderColor: "#D8D5CF",
      }}
    >
      {/* Year column — blank when not the first of its group */}
      <span className="text-[13px]" style={{ color: "#A8A5A0", fontVariantNumeric: "tabular-nums" }}>
        {year || ""}
      </span>

      {/* Title + optional New badge */}
      <span className="flex items-center">
        <a
          href={href}
          className="text-[14px] hover:underline"
          style={{
            color: "#1C1C1C",
            textDecoration: "none",
            textUnderlineOffset: "2px",
            textDecorationColor: "rgba(28,28,28,0.4)",
            textDecorationThickness: "1px",
          }}
          onMouseEnter={e => (e.currentTarget.style.textDecoration = "underline")}
          onMouseLeave={e => (e.currentTarget.style.textDecoration = "none")}
        >
          {title}
        </a>
        {isNew && <NewBadge />}
      </span>

      {/* Date column */}
      <span
        className="text-[13px]"
        style={{ color: "#A8A5A0", fontVariantNumeric: "tabular-nums", letterSpacing: "0.01em" }}
      >
        {date}
      </span>
    </div>
  );
}