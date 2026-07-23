import type { Metadata } from "next";
import { HoverSwap } from "@/components/HoverSwap";
import { education, educationHeadings } from "@/data/content";

export const metadata: Metadata = {
  title: "Education",
};

export default function EducationPage() {
  return (
    <div className="flex max-w-[660px] flex-col">
      <HoverSwap
        as="h1"
        defaultText={educationHeadings.education.default}
        hoverText={educationHeadings.education.hover}
        className="text-[20px] font-medium leading-[1.3] text-ink"
      />

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

      <HoverSwap
        as="h2"
        defaultText={educationHeadings.skills.default}
        hoverText={educationHeadings.skills.hover}
        className="mt-12 text-[20px] font-medium leading-[1.3] text-ink"
      />

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
