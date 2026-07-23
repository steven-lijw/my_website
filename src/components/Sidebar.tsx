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
        className="site-wordmark group relative inline-grid text-ink"
        aria-label="Back home"
      >
        {/* stacked so width/height stay stable while labels crossfade */}
        <span
          className="site-wordmark__label col-start-1 row-start-1 text-[32px] font-light leading-[1.1] tracking-[-0.5px] whitespace-nowrap transition-[opacity,transform,filter] duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:pointer-events-none group-hover:translate-y-0.5 group-hover:opacity-0 group-hover:blur-[1.5px]"
          aria-hidden
        >
          {site.name}
        </span>
        <span
          className="site-wordmark__home col-start-1 row-start-1 self-center text-[18px] font-normal leading-[1.1] tracking-[-0.2px] whitespace-nowrap text-ink/75 opacity-0 blur-[1.5px] transition-[opacity,transform,filter] duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] -translate-y-0.5 group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-0"
          aria-hidden
        >
          back homeeee...
        </span>
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
