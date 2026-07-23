import type { Metadata } from "next";
import { aboutParagraphs } from "@/data/content";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="flex max-w-[640px] flex-col gap-5 text-[18px] leading-[1.6] tracking-[0.1px] text-ink">
      {aboutParagraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 40)} className="opacity-90">
          {paragraph}
        </p>
      ))}
    </div>
  );
}
