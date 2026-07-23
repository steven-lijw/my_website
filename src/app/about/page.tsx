import type { Metadata } from "next";
import { aboutParagraphs } from "@/data/content";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="flex max-w-[640px] flex-col gap-4 text-[16px] leading-[1.65] tracking-[0.1px] text-ink sm:gap-5 sm:text-[18px] sm:leading-[1.6]">
      {aboutParagraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 40)} className="opacity-90">
          {paragraph}
        </p>
      ))}
    </div>
  );
}
