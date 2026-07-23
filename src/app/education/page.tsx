import type { Metadata } from "next";
import { education } from "@/data/content";

export const metadata: Metadata = {
  title: "Education",
};

export default function EducationPage() {
  return (
    <div className="flex max-w-[660px] flex-col">
      <h1 className="text-[20px] font-medium leading-[1.3] text-ink">
        Education
      </h1>

      <div className="mt-4 flex flex-col gap-6">
        {education.schools.map((school) => (
          <div
            key={school.lines[0]}
            className="text-[16px] leading-[1.62] text-ink-muted opacity-85"
          >
            {school.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        ))}
      </div>

      <h2 className="mt-12 text-[20px] font-medium leading-[1.3] text-ink">
        Skills
      </h2>

      <div className="mt-4 flex flex-col gap-4">
        {education.skills.map((skill) => (
          <div
            key={skill.label}
            className="text-[16px] leading-[1.62] text-ink-muted opacity-85"
          >
            <p>{skill.label}</p>
            <p>{skill.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
