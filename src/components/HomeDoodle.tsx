"use client";

import Image from "next/image";
import { home } from "@/data/content";

/**
 * Composition: thought bubble sits upper-left of the figure;
 * bubble trail (bottom-right of the cloud) points toward the head.
 */
export function HomeDoodle() {
  return (
    <div className="home-doodle absolute right-2 bottom-2 w-[min(520px,54vw)] overflow-visible">
      {/*
        Relative stage so bubble can sit NW of the person.
        Person anchors bottom-right; bubble offsets up-left.
      */}
      <div className="relative ml-auto w-full">
        {/* Person first — defines the stage size */}
        <div className="home-doodle__person relative z-10 ml-auto w-[78%] overflow-visible">
          <Image
            src="/illustrations/home-doodle.png"
            alt="Stick figure thinking at a desk"
            width={720}
            height={560}
            className="h-auto w-full select-none"
            priority
          />
        </div>

        {/*
          Bubble upper-left of the figure:
          - right edge of bubble near head
          - bottom trail dots aim at head's upper-left
        */}
        <div
          className="home-doodle__bubble absolute z-20 origin-bottom-right"
          style={{
            width: "68%",
            /* sit left of the person block (person is 78% right-aligned) */
            right: "52%",
            /* float above the head area of the person image */
            bottom: "48%",
          }}
        >
          <Image
            src="/illustrations/thought-bubble.png"
            alt={home.bubble}
            width={696}
            height={368}
            className="h-auto w-full select-none"
            priority
          />
        </div>
      </div>
    </div>
  );
}
