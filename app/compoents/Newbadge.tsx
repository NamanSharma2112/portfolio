/**
 * NewBadge — The hand-drawn oval "New" label
 * Uses SVG feTurbulence filter to mimic a Sharpie-circled look.
 * Drop this anywhere inline next to a title.
 */
export default function NewBadge() {
  return (
    <span
      style={{ position: "relative", display: "inline-flex", alignItems: "center", marginLeft: "7px", verticalAlign: "middle" }}
    >
      {/* SVG ellipse with fractal-noise displacement for the sketchy hand-drawn feel */}
      <svg
        width="46"
        height="22"
        viewBox="0 0 46 22"
        style={{ position: "absolute", top: "50%", left: 0, transform: "translateY(-50%)", overflow: "visible", pointerEvents: "none" }}
      >
        <defs>
          <filter id="rough-filter" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.042"
              numOctaves="3"
              seed="5"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="2.2"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
        <ellipse
          cx="23"
          cy="11"
          rx="22"
          ry="9.5"
          fill="none"
          stroke="#E52090"
          strokeWidth="1.4"
          filter="url(#rough-filter)"
        />
      </svg>

      {/* Text sits on top of the SVG ellipse */}
      <span
        style={{
          color: "#E52090",
          fontSize: "11px",
          fontWeight: "400",
          padding: "1px 8px",
          display: "inline-block",
          width: "46px",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
          lineHeight: "1.5",
          whiteSpace: "nowrap",
        }}
      >
        New
      </span>
    </span>
  );
}