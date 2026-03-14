"use client"

import { useState, useEffect } from "react";
type Props = { timezone?: string; locationName?: string };
/**
 * LiveClock — Ticking local-time display for the footer.
 *
 * Props:
 *   timezone    — IANA timezone string, e.g. "America/Los_Angeles" or "Asia/Kolkata"
 *   locationName — Human-readable city label shown after the time
 *
 * Example:
 *   <LiveClock timezone="Asia/Kolkata" locationName="Ludhiana, India" />
 */
export default function LiveClock({ timezone = "America/Los_Angeles", locationName = "Los Angeles, California" }) {
  const [timeStr, setTimeStr] = useState("");

  useEffect(() => {
    function formatTime() {
      const now = new Date();

      // Format: "11:28pm" — lowercase, no space before am/pm
      const raw = now.toLocaleTimeString("en-US", {
        timeZone: timezone,
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });

      // "11:28 PM" → "11:28pm"
      return raw.replace(" AM", "am").replace(" PM", "pm");
    }

    setTimeStr(formatTime());
    const interval = setInterval(() => setTimeStr(formatTime()), 1000);
    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <span>
      {timeStr} in {locationName}
    </span>
  );
}