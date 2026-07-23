import Image from "next/image";
import { home } from "@/data/content";

export default function HomePage() {
  return (
    <div className="relative min-h-[calc(100vh-7rem)] w-full">
      {/*
        Composition mirrors Figma Desktop / Home:
        thought bubble slightly above-left of the desk doodle, bottom-right of content.
      */}
      <div className="absolute right-4 bottom-6 w-[360px]">
        <div className="absolute bottom-[200px] left-[-40px] w-[300px] origin-bottom-right rotate-[2.5deg]">
          <Image
            src="/illustrations/thought-bubble.png"
            alt={home.bubble}
            width={696}
            height={368}
            className="h-auto w-full select-none"
            priority
          />
        </div>
        <div className="relative ml-auto w-[300px]">
          <Image
            src="/illustrations/home-doodle.png"
            alt="Stick figure thinking at a desk"
            width={720}
            height={560}
            className="h-auto w-full select-none"
            priority
          />
        </div>
      </div>
    </div>
  );
}
