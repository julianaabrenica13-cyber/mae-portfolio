"use client";

import { useEffect } from "react";

// Blocks the "Save image/video as…" right-click and long-press shortcuts on
// portfolio media. Deterrence only — the files are still reachable by anyone
// who opens devtools or the direct URL.
export default function MediaGuard() {
  useEffect(() => {
    const blockMedia = (event: Event) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest("img, video")) {
        event.preventDefault();
      }
    };

    document.addEventListener("contextmenu", blockMedia);
    document.addEventListener("dragstart", blockMedia);

    return () => {
      document.removeEventListener("contextmenu", blockMedia);
      document.removeEventListener("dragstart", blockMedia);
    };
  }, []);

  return null;
}
