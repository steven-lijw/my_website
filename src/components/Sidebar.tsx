"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, site } from "@/data/content";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex w-full shrink-0 flex-col items-start md:w-[180px] lg:w-[200px]">
      <Link
        href="/"
        className="site-wordmark group relative inline-grid text-ink"
        aria-label="Back home"
      >
        {/* stacked so width/height stay stable while labels crossfade */}
        <span
          className="site-wordmark__label col-start-1 row-start-1 text-[28px] font-light leading-[1.1] tracking-[-0.5px] whitespace-nowrap transition-[opacity,transform,filter] duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:pointer-events-none group-hover:translate-y-0.5 group-hover:opacity-0 group-hover:blur-[1.5px] md:text-[32px]"
          aria-hidden
        >
          {site.name}
        </span>
        <span
          className="site-wordmark__home col-start-1 row-start-1 self-center text-[20px] font-normal leading-[1.1] tracking-[-0.3px] whitespace-nowrap text-ink/75 opacity-0 blur-[1.5px] transition-[opacity,transform,filter] duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] -translate-y-0.5 group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-0 md:text-[24px]"
          aria-hidden
        >
          back homeeee...
        </span>
      </Link>

      <nav
        className="flex w-full flex-row flex-wrap items-end gap-x-5 gap-y-2 pt-5 md:flex-col md:items-start md:gap-3 md:pt-12"
        aria-label="Primary"
      >
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col items-start gap-0.5 md:gap-1"
              aria-current={active ? "page" : undefined}
            >
              <span
                className={
                  active
                    ? "text-[17px] font-medium leading-normal text-ink md:text-[22px]"
                    : "text-[17px] font-normal leading-normal text-ink opacity-55 transition-opacity group-hover:opacity-80 md:text-[22px]"
                }
              >
                {item.label}
              </span>
              <span
                className={
                  active
                    ? "h-[2px] w-8 bg-ink md:h-[3px] md:w-12"
                    : "h-[2px] w-8 bg-ink opacity-0 transition-opacity group-hover:opacity-20 md:h-[3px] md:w-12"
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
