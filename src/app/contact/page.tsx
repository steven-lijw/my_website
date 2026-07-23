import type { Metadata } from "next";
import { contact } from "@/data/content";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="flex max-w-[560px] flex-col">
      <h1 className="text-[28px] font-light leading-[1.2] tracking-[-0.4px] text-ink">
        {contact.title}
      </h1>

      <p className="mt-3.5 text-[15px] leading-[1.58] text-ink-muted opacity-75">
        {contact.intro}
      </p>

      <div className="mt-7 flex flex-col gap-3.5">
        {contact.rows.map((row) => (
          <div key={row.label} className="flex items-baseline gap-6">
            <span className="w-[88px] shrink-0 text-[13px] leading-[1.4] text-ink-muted opacity-55">
              {row.label}
            </span>
            <a
              href={row.href}
              target={row.href.startsWith("http") ? "_blank" : undefined}
              rel={
                row.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="text-[15px] leading-[1.5] text-ink opacity-90 transition-opacity hover:opacity-100"
            >
              {row.value}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
