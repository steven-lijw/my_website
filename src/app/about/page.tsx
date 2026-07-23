import type { Metadata } from "next";
import { aboutParagraphs } from "@/data/content";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="flex max-w-[560px] flex-col gap-4 text-[15px] leading-[1.58] tracking-[0.1px] text-ink">
      {aboutParagraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 40)} className="opacity-90">
          {paragraph}
        </p>
      ))}
    </div>
  );
}
