"use client"
import WritingRow from "./WritingGrow";

/**
 * WritingSection — The full writing list with automatic year-group headers.
 *
 * Each entry in `articles`:
 *   { title, date, href?, isNew? }
 *
 * Articles are expected in reverse chronological order.
 * The year is extracted automatically from each entry's ISO date string
 * and only displayed on the first article of each calendar year.
 *
 * Example data shape:
 *   { title: "Liveline", date: "16/02", year: "2026", isNew: true, href: "/writing/liveline" }
 */

const articles = [
  { year: "2026", title: "Your Latest Article", date: "14/03", isNew: true,  href: "#" },
  { year: null,   title: "Second Article",       date: "21/01", isNew: false, href: "#" },
  { year: null,   title: "Third Article",         date: "16/01", isNew: false, href: "#" },
  { year: null,   title: "Fourth Article",        date: "13/01", isNew: false, href: "#" },
  { year: "2025", title: "A 2025 Post",           date: "23/05", isNew: false, href: "#" },
  { year: "2024", title: "A 2024 Post",           date: "08/07", isNew: false, href: "#" },
];

export default function WritingSection({ items = articles }) {
  return (
    <section className="mt-9">
      {/* Section label */}
      <p
        className="text-[12.5px] mb-2.5"
        style={{ color: "#A8A5A0", letterSpacing: "0.01em" }}
      >
        Writing
      </p>

      {/* Top rule */}
      <hr style={{ border: "none", borderTop: "0.5px solid #D8D5CF", margin: 0 }} />

      {/* Rows */}
      {items.map((item, i) => (
        <WritingRow
          key={i}
          year={item.year}
          title={item.title}
          date={item.date}
          isNew={item.isNew}
          href={item.href}
        />
      ))}
    </section>
  );
}