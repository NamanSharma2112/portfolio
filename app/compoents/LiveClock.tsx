"use client"

import { useState, useEffect } from "react";

type Props = {
  timezone?: string;
  locationName?: string;
};

export default function LiveClock({
  timezone = "America/Los_Angeles",
  locationName = "Los Angeles, California",
}: Props) {
  const [timeStr, setTimeStr] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

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

    const interval = setInterval(() => {
      setTimeStr(formatTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [timezone]);

  if (!mounted) return null;

  return (
    <span>
      {timeStr} in {locationName}
    </span>
  );
}