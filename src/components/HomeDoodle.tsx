"use client";

import Image from "next/image";
import { home } from "@/data/content";

/**
 * Home illustration with motion matching Figma Desktop / Home (4.5s loop).
 * Bubble sits above-left of the figure so the head stays fully visible;
 * trail dots connect visually without covering the person.
 */
export function HomeDoodle() {
  return (
    <div className="home-doodle absolute right-2 bottom-2 flex w-[min(480px,50vw)] flex-col items-end overflow-visible">
      {/* Bubble above the figure — not stacked over the head */}
      <div className="home-doodle__bubble relative z-0 mr-[8%] w-[78%] origin-bottom-right">
        <Image
          src="/illustrations/thought-bubble.png"
          alt={home.bubble}
          width={696}
          height={368}
          className="h-auto w-full select-none"
          priority
        />
      </div>

      {/* Pull person up slightly so trail meets the head, without covering it */}
      <div className="home-doodle__person relative z-10 -mt-[6%] mr-0 w-[86%] overflow-visible">
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
  );
}
