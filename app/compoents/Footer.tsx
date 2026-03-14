import LiveClock from "./LiveClock";

/**
 * WeatherIcon — Two overlapping CSS shapes that suggest a sun-and-cloud glyph,
 * matching the small icon seen in the original footer.
 */
function WeatherIcon() {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "2px", marginLeft: "6px" }}>
      {/* Sun circle */}
      <span
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: "#C0BAB0",
          display: "inline-block",
          flexShrink: 0,
        }}
      />
      {/* Cloud blob */}
      <span
        style={{
          width: "12px",
          height: "7px",
          borderRadius: "4px",
          background: "#C0BAB0",
          display: "inline-block",
          flexShrink: 0,
          position: "relative",
          top: "1px",
        }}
      />
    </span>
  );
}

/**
 * Footer — Thin rule + live-ticking local time + weather icon.
 *
 * Props:
 *   timezone     — IANA timezone, e.g. "Asia/Kolkata"
 *   locationName — City label, e.g. "Ludhiana, India"
 */
export default function Footer({
  timezone = "America/Los_Angeles",
  locationName = "Los Angeles, California",
}) {
  return (
    <footer
      style={{
        marginTop: "32px",
        paddingTop: "24px",
        borderTop: "0.5px solid #D8D5CF",
        display: "flex",
        alignItems: "center",
      }}
    >
      <span style={{ fontSize: "12.5px", color: "#A8A5A0" }}>
        <LiveClock timezone={timezone} locationName={locationName} />
      </span>
      <WeatherIcon />
    </footer>
  );
}