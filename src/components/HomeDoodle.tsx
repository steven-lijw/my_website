"use client";

import Image from "next/image";
import { home } from "@/data/content";

/**
 * Home illustration with motion matching Figma Desktop / Home (4.5s loop):
 * - thinking-person: subtle rotate + vertical bob
 * - thought bubble: float + gentle tilt around 2.5deg
 */
export function HomeDoodle() {
  return (
    <div className="home-doodle absolute right-0 bottom-4 w-[min(520px,52vw)]">
      <div className="home-doodle__bubble absolute bottom-[42%] left-[-6%] z-10 w-[88%] origin-bottom-right">
        <Image
          src="/illustrations/thought-bubble.png"
          alt={home.bubble}
          width={696}
          height={368}
          className="h-auto w-full select-none"
          priority
        />
      </div>

      <div className="home-doodle__person relative ml-auto w-[82%]">
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
