"use client";

import { usePathname } from "next/navigation";
import { playfulCorners } from "@/data/content";
import { Sidebar } from "./Sidebar";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const corner = playfulCorners[pathname] ?? "";

  return (
    <div className="relative min-h-screen bg-bg text-ink">
      <div className="mx-auto flex min-h-screen max-w-[1440px] items-start gap-20 px-20 py-14">
        <Sidebar />
        <main className="relative min-w-0 flex-1 pt-2">{children}</main>
      </div>

      {corner ? (
        <p className="pointer-events-none absolute right-20 bottom-8 text-[15px] leading-[1.4] tracking-[0.15px] text-[#595959] opacity-75">
          {corner}
        </p>
      ) : null}
    </div>
  );
}
