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
          <div className="flex flex-col gap-1 leading-[1.3] sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
            <h2 className="min-w-0 flex-1 text-[16px] font-medium tracking-[-0.1px] text-ink sm:text-[17px]">
              {job.role}
            </h2>
            <p className="shrink-0 text-[14px] text-ink-muted opacity-60 sm:text-right sm:text-[15px]">
              {job.dates}
            </p>
          </div>
          <p className="text-[14px] leading-[1.3] text-ink-muted opacity-60 sm:text-[15px]">
            {job.location}
          </p>
          <div className="text-[14px] leading-[1.65] tracking-[0.05px] text-ink opacity-[0.82] sm:text-[15px]">
            {job.bullets.map((bullet) => (
              <p key={bullet}>{bullet}</p>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
