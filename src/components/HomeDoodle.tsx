"use client";

import Image from "next/image";
import { home } from "@/data/content";

/**
 * Thought bubble upper-left of the figure; trail aims at the head.
 * Bubble outline from Figma; copy is live HTML in a casual hand font.
 */
export function HomeDoodle() {
  return (
    <div className="home-doodle absolute right-2 bottom-2 w-[min(560px,56vw)] overflow-visible">
      <div className="relative ml-auto w-full">
        <div className="home-doodle__person relative z-10 ml-auto w-[74%] overflow-visible">
          <Image
            src="/illustrations/home-doodle.png"
            alt="Stick figure thinking at a desk"
            width={720}
            height={560}
            className="h-auto w-full select-none"
            priority
          />
        </div>

        <div
          className="home-doodle__bubble absolute z-20"
          style={{
            width: "82%",
            right: "48%",
            bottom: "72%",
          }}
        >
          <div className="relative w-full">
            {/* cloud outline */}
            <Image
              src="/illustrations/bubble-shape.svg"
              alt=""
              width={320}
              height={110}
              className="h-auto w-full select-none"
              priority
              aria-hidden
            />

            {/* handwritten copy centered in the cloud */}
            <p
              className="pointer-events-none absolute inset-x-[12%] top-[18%] bottom-[28%] flex items-center justify-center text-center font-hand text-[clamp(1.15rem,2.1vw,1.55rem)] leading-[1.25] font-medium tracking-[0.01em] text-ink/90"
              aria-hidden={false}
            >
              {home.bubble}
            </p>

            {/* trail dots — bottom-right of cloud, toward the head */}
            <Image
              src="/illustrations/bubble-trail.svg"
              alt=""
              width={36}
              height={48}
              className="absolute right-[2%] bottom-[-18%] h-auto w-[11%] select-none"
              priority
              aria-hidden
            />
          </div>
        </div>
      </div>
    </div>
  );
}
