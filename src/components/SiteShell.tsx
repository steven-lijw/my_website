"use client";

import { usePathname } from "next/navigation";
import { playfulCorners } from "@/data/content";
import { Sidebar } from "./Sidebar";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const corner = playfulCorners[pathname] ?? "";

  return (
    <div className="relative min-h-[100dvh] bg-bg text-ink">
      <div className="mx-auto flex min-h-[100dvh] w-full max-w-[1440px] flex-col items-stretch gap-8 px-5 py-6 sm:px-8 sm:py-8 md:flex-row md:items-start md:gap-12 md:px-12 md:py-12 lg:gap-20 lg:px-20 lg:py-14">
        <Sidebar />
        <main className="relative min-w-0 flex-1 pb-16 md:pt-2 md:pb-10">
          {children}
        </main>
      </div>

      {corner ? (
        <p className="pointer-events-none absolute right-5 bottom-4 max-w-[min(70vw,280px)] text-right text-[13px] leading-[1.4] tracking-[0.15px] text-[#595959] opacity-75 sm:right-8 sm:bottom-6 sm:max-w-none sm:text-[14px] md:right-12 md:bottom-8 md:text-[15px] lg:right-20">
          {corner}
        </p>
      ) : null}
    </div>
  );
}
