"use client";

import dynamic from "next/dynamic";

// These are below-the-fold, interaction-only widgets (floating buttons that
// open on click) — deferring them keeps them out of the critical initial
// bundle without affecting what users see above the fold.
const Assistant = dynamic(() => import("./Assistant").then((m) => m.Assistant), { ssr: false });
const Terminal = dynamic(() => import("./Terminal").then((m) => m.Terminal), { ssr: false });

export function DeferredWidgets() {
  return (
    <>
      <Assistant />
      <Terminal />
    </>
  );
}
