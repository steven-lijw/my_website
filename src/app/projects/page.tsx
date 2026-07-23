import type { Metadata } from "next";
import Image from "next/image";
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
          className="flex items-start gap-8"
        >
          <div className="relative h-[140px] w-[200px] shrink-0 overflow-hidden">
            <Image
              src={project.image}
              alt={project.imageAlt}
              width={200}
              height={140}
              className="h-full w-full object-contain object-left-top"
            />
          </div>

          <div className="flex min-w-0 flex-1 flex-col gap-2.5">
            <h2 className="text-[22px] font-medium leading-[1.25] text-ink">
              {project.title}
            </h2>
            <p className="text-[15px] leading-[1.4] text-ink-muted opacity-65">
              {project.meta}
            </p>
            <p className="text-[17px] leading-[1.58] text-ink-muted">
              {project.description}
            </p>
            {project.href ? (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[16px] leading-[1.4] text-ink opacity-90 transition-opacity hover:opacity-100"
              >
                {project.linkLabel}
              </a>
            ) : (
              <span className="text-[16px] leading-[1.4] text-ink opacity-90">
                {project.linkLabel}
              </span>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
