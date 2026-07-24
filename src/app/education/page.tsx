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
        className="text-[18px] font-medium leading-[1.3] text-ink sm:text-[20px]"
      />

      <div className="mt-4 flex flex-col gap-6">
        {education.schools.map((school) => (
          <div
            key={school.lines[0]}
            className="text-[15px] leading-[1.62] text-ink-muted opacity-85 sm:text-[16px]"
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
        className="mt-10 text-[18px] font-medium leading-[1.3] text-ink sm:mt-12 sm:text-[20px]"
      />

      <div className="mt-4 flex flex-col gap-4">
        {education.skills.map((skill) => (
          <div
            key={skill.label}
            className="text-[15px] leading-[1.62] text-ink-muted opacity-85 sm:text-[16px]"
          >
            <p>{skill.label}</p>
            {skill.kind === "parts" ? (
              <p className="break-words">
                {skill.parts.map((part, i) => (
                  <span key={part.text}>
                    {i > 0 ? " · " : null}
                    {part.hover ? (
                      <HoverSwap
                        defaultText={part.text}
                        hoverText={part.hover}
                        className="justify-items-center"
                      />
                    ) : (
                      part.text
                    )}
                  </span>
                ))}
              </p>
            ) : (
              <p className="break-words">{skill.value}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
