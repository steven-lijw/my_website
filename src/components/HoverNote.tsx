"use client";

import Image from "next/image";
import { useId, useState, type ReactNode } from "react";

type HoverNoteProps = {
  /** Visible term in the sentence */
  term: string;
  /** Text whisper (simple tooltip). Ignored when `panel` is set, still used for a11y if provided. */
  note?: string;
  /** Rich hover panel (e.g. doodle map). Replaces the text tooltip when set. */
  panel?: ReactNode;
  className?: string;
};

/**
 * Inline term with a quiet aside — hover on desktop, tap toggle on touch.
 * Body text stays complete; the note/panel is decorative discovery.
 */
export function HoverNote({
  term,
  note,
  panel,
  className = "",
}: HoverNoteProps) {
  const [open, setOpen] = useState(false);
  const noteId = useId();
  const hasPanel = Boolean(panel);

  return (
    <span
      className={`group/note relative inline cursor-default ${className}`.trim()}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="inline border-0 bg-transparent p-0 font-[inherit] text-inherit underline decoration-ink/25 decoration-dotted underline-offset-[3px] transition-[text-decoration-color] hover:decoration-ink/50 focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
        aria-describedby={open ? noteId : undefined}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {term}
      </button>

      <span
        id={noteId}
        role="tooltip"
        className={[
          "hover-note__panel pointer-events-none absolute bottom-full left-1/2 z-20 -translate-x-1/2 transition-[opacity,transform] duration-[280ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
          hasPanel
            ? "mb-2 w-[min(72vw,168px)] origin-bottom"
            : "mb-1 w-max max-w-[min(70vw,220px)]",
          open
            ? "translate-y-0 opacity-100"
            : "translate-y-1 opacity-0 group-hover/note:translate-y-0 group-hover/note:opacity-100",
        ].join(" ")}
      >
        {hasPanel ? (
          <span className="block drop-shadow-[0_1px_0_rgba(17,17,17,0.04)]">
            {panel}
            {note ? (
              <span className="sr-only">{note}</span>
            ) : null}
          </span>
        ) : (
          <span className="block rounded-sm bg-bg/95 px-1.5 py-0.5 text-center text-[12px] leading-[1.35] tracking-[0.02px] text-[#595959] sm:text-[13px]">
            {note}
          </span>
        )}
      </span>
    </span>
  );
}

/** Hand-drawn mini map: Longyearbyen near the North Pole. */
export function LongyearbyenMapPanel() {
  return (
    <span className="block select-none" aria-hidden>
      <Image
        src="/illustrations/longyearbyen-map.svg"
        alt=""
        width={168}
        height={148}
        className="h-auto w-full"
        draggable={false}
      />
    </span>
  );
}
