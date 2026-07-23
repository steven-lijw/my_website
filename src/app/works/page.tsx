import type { Metadata } from "next";
import { works } from "@/data/content";

export const metadata: Metadata = {
  title: "Works",
};

export default function WorksPage() {
  return (
    <div className="flex max-w-[820px] flex-col gap-8">
      {works.map((job) => (
        <article key={job.role} className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-6 leading-[1.3]">
            <h2 className="min-w-0 flex-1 text-[17px] font-medium tracking-[-0.1px] text-ink">
              {job.role}
            </h2>
            <p className="shrink-0 text-right text-[15px] text-ink-muted opacity-60">
              {job.dates}
            </p>
          </div>
          <p className="text-[15px] leading-[1.3] text-ink-muted opacity-60">
            {job.location}
          </p>
          <div className="text-[15px] leading-[1.65] tracking-[0.05px] text-ink opacity-[0.82]">
            {job.bullets.map((bullet) => (
              <p key={bullet}>{bullet}</p>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
