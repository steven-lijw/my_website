import type { Metadata } from "next";
import { contact } from "@/data/content";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="flex max-w-[620px] flex-col">
      <h1 className="group relative inline-grid cursor-default text-[32px] font-light leading-[1.2] tracking-[-0.4px] text-ink">
        <span className="col-start-1 row-start-1 whitespace-nowrap transition-opacity duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-0">
          {contact.title}
        </span>
        <span
          className="col-start-1 row-start-1 whitespace-nowrap opacity-0 transition-opacity duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100"
          aria-hidden
        >
          Say hiiiiiiiiiiiiiiiiiii!
        </span>
      </h1>

      <p className="mt-4 text-[17px] leading-[1.6] text-ink-muted opacity-75">
        {contact.intro}
      </p>

      <div className="mt-8 flex flex-col gap-4">
        {contact.rows.map((row) => (
          <div key={row.label} className="flex items-baseline gap-6">
            <span className="w-[96px] shrink-0 text-[15px] leading-[1.4] text-ink-muted opacity-55">
              {row.label}
            </span>
            <a
              href={row.href}
              target={row.href.startsWith("http") ? "_blank" : undefined}
              rel={
                row.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="text-[17px] leading-[1.5] text-ink opacity-90 transition-opacity hover:opacity-100"
            >
              {row.value}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
