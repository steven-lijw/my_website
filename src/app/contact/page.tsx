import type { Metadata } from "next";
import { HoverSwap } from "@/components/HoverSwap";
import { contact } from "@/data/content";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="flex max-w-[620px] flex-col">
      <HoverSwap
        as="h1"
        defaultText={contact.title}
        hoverText="Say hiiiiiiiiiiiiiiiiiii!"
        className="text-[28px] font-light leading-[1.2] tracking-[-0.4px] text-ink sm:text-[32px]"
      />

      <p className="mt-4 text-[16px] leading-[1.6] text-ink-muted opacity-75 sm:text-[17px]">
        {contact.intro}
      </p>

      <div className="mt-8 flex flex-col gap-5 sm:gap-4">
        {contact.rows.map((row) => (
          <div
            key={row.label}
            className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-6"
          >
            <span className="w-auto shrink-0 text-[14px] leading-[1.4] text-ink-muted opacity-55 sm:w-[96px] sm:text-[15px]">
              {row.label}
            </span>
            <a
              href={row.href}
              target={row.href.startsWith("http") ? "_blank" : undefined}
              rel={
                row.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="break-all text-[16px] leading-[1.5] text-ink opacity-90 transition-opacity hover:opacity-100 sm:break-normal sm:text-[17px]"
            >
              {row.value}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
