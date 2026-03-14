"use client"

import { useState, useEffect } from "react";
type Props = { timezone?: string; locationName?: string };

export default function LiveClock({ timezone = "America/Los_Angeles", locationName = "Los Angeles, California" }) {
  const [timeStr, setTimeStr] = useState("");

  useEffect(() => {
    function formatTime() {
      const now = new Date();

      const raw = now.toLocaleTimeString("en-US", {
        timeZone: timezone,
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });

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