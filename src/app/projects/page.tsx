import type { Metadata } from "next";
import Image from "next/image";
import { HoverSwap } from "@/components/HoverSwap";
import { projects } from "@/data/content";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <div className="flex max-w-[780px] flex-col gap-10">
      {projects.map((project) => (
        <article
          key={project.title}
          className="flex flex-col items-start gap-4 sm:flex-row sm:gap-8"
        >
          <div className="relative h-[120px] w-full max-w-[200px] shrink-0 overflow-hidden sm:h-[140px] sm:w-[200px]">
            <Image
              src={project.image}
              alt={project.imageAlt}
              width={200}
              height={140}
              className="h-full w-full object-contain object-left-top"
            />
          </div>

          <div className="flex min-w-0 flex-1 flex-col gap-2.5">
            <HoverSwap
              as="h2"
              defaultText={project.title}
              hoverText={project.titleHover}
              className="text-[20px] font-medium leading-[1.25] text-ink sm:text-[22px]"
            />
            <p className="text-[14px] leading-[1.4] text-ink-muted opacity-65 sm:text-[15px]">
              {project.meta}
            </p>
            <p className="text-[16px] leading-[1.58] text-ink-muted sm:text-[17px]">
              {project.description}
            </p>
            {project.href ? (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="break-all text-[15px] leading-[1.4] text-ink opacity-90 transition-opacity hover:opacity-100 sm:break-normal sm:text-[16px]"
              >
                {project.linkLabel}
              </a>
            ) : (
              <span className="text-[15px] leading-[1.4] text-ink opacity-90 sm:text-[16px]">
                {project.linkLabel}
              </span>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
