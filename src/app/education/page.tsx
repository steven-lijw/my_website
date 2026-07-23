import type { Metadata } from "next";
import { education } from "@/data/content";

export const metadata: Metadata = {
  title: "Education",
};

export default function EducationPage() {
  return (
    <div className="flex max-w-[600px] flex-col">
      <h1 className="text-[18px] font-medium leading-[1.3] text-ink">
        Education
      </h1>

      <div className="mt-3.5 flex flex-col gap-5">
        {education.schools.map((school) => (
          <div
            key={school.lines[0]}
            className="text-[14px] leading-[1.58] text-ink-muted opacity-85"
          >
            {school.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        ))}
      </div>

      <h2 className="mt-10 text-[18px] font-medium leading-[1.3] text-ink">
        Skills
      </h2>

      <div className="mt-3.5 flex flex-col gap-3.5">
        {education.skills.map((skill) => (
          <div
            key={skill.label}
            className="text-[14px] leading-[1.58] text-ink-muted opacity-85"
          >
            <p>{skill.label}</p>
            <p>{skill.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
