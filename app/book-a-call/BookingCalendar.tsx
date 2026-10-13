"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Cal, { getCalApi } from "@calcom/embed-react";

// Cal.com event to book, as "<username>/<event-slug>" from your Cal.com booking URL.
const CAL_LINK = "abu-saleh-muahammad-shaon-agr237/30min";
const CAL_NAMESPACE = "intro-call";

export function BookingCalendar() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const theme = resolvedTheme === "dark" ? "dark" : "light";

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(t);
  }, []);

  // Keep the calendar in step with the site's theme toggle, in monochrome ink.
  useEffect(() => {
    if (!mounted) return;
    (async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      cal("ui", {
        theme,
        cssVarsPerTheme: {
          light: { "cal-brand": "#111111" },
          dark: { "cal-brand": "#f4f4f4" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, [mounted, theme]);

  return (
    <div className="min-h-[600px] overflow-hidden">
      {mounted && (
        <Cal
          // An inline embed only reads its theme on load, so remount it when the theme changes.
          key={theme}
          namespace={CAL_NAMESPACE}
          calLink={CAL_LINK}
          config={{ layout: "month_view", theme }}
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
        />
      )}
    </div>
  );
}
