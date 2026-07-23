"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, site } from "@/data/content";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex w-[200px] shrink-0 flex-col items-start">
      <Link
        href="/"
        className="text-[32px] font-light leading-[1.1] tracking-[-0.5px] text-ink whitespace-nowrap"
      >
        {site.name}
      </Link>

      <nav className="flex flex-col items-start gap-3 pt-12" aria-label="Primary">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col items-start gap-1"
              aria-current={active ? "page" : undefined}
            >
              <span
                className={
                  active
                    ? "text-[22px] font-medium leading-normal text-ink"
                    : "text-[22px] font-normal leading-normal text-ink opacity-55 transition-opacity group-hover:opacity-80"
                }
              >
                {item.label}
              </span>
              <span
                className={
                  active
                    ? "h-[3px] w-12 bg-ink"
                    : "h-[3px] w-12 bg-ink opacity-0 transition-opacity group-hover:opacity-20"
                }
                aria-hidden
              />
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
