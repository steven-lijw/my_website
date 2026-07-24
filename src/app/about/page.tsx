import type { Metadata } from "next";
import Link from "next/link";
import { HoverNote, LongyearbyenMapPanel } from "@/components/HoverNote";
import { about } from "@/data/content";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="flex max-w-[640px] flex-col gap-4 text-[16px] leading-[1.65] tracking-[0.1px] text-ink sm:gap-5 sm:text-[18px] sm:leading-[1.6]">
      {about.paragraphs.map((paragraph) => {
        if (typeof paragraph === "string") {
          return (
            <p key={paragraph.slice(0, 40)} className="opacity-90">
              {paragraph}
            </p>
          );
        }

        if (paragraph.type === "travel") {
          return (
            <p key="travel" className="opacity-90">
              {paragraph.before}
              <HoverNote
                term={paragraph.noteTerm}
                note={paragraph.note}
                panel={<LongyearbyenMapPanel />}
              />
              {paragraph.after}
            </p>
          );
        }

        return (
          <p key="closing" className="opacity-90">
            {paragraph.before}
            <Link
              href="/contact"
              className="underline decoration-ink/30 decoration-dotted underline-offset-[3px] transition-[text-decoration-color] hover:decoration-ink/60 focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              {paragraph.linkLabel}
            </Link>
            {paragraph.after}
          </p>
        );
      })}
    </div>
  );
}
