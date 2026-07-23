"use client";

import Image from "next/image";
import { home } from "@/data/content";

/**
 * Thought bubble upper-left of the figure; trail aims at the head.
 * Bubble outline from Figma; copy is live HTML in a casual hand font.
 * Mobile: full-width bottom composition so the doodle does not crowd the nav.
 */
export function HomeDoodle() {
  return (
    <div className="home-doodle relative mx-auto mt-10 w-full max-w-[380px] overflow-visible px-1 sm:mt-12 sm:max-w-[480px] md:absolute md:right-2 md:bottom-2 md:mx-0 md:mt-0 md:w-[min(560px,56vw)] md:max-w-none md:px-0">
      <div className="relative ml-auto w-full">
        {/* reserve vertical space so the absolute bubble does not sit under the nav */}
        <div className="h-[4.5rem] w-full sm:h-[5.5rem] md:hidden" aria-hidden />

        <div className="home-doodle__person relative z-10 ml-auto w-[78%] overflow-visible sm:w-[74%]">
          <Image
            src="/illustrations/home-doodle.png"
            alt="Stick figure thinking at a desk"
            width={720}
            height={560}
            className="h-auto w-full select-none"
            priority
          />
        </div>

        <div className="home-doodle__bubble absolute bottom-[70%] left-0 z-20 w-[72%] sm:left-auto sm:right-[48%] sm:bottom-[72%] sm:w-[82%] md:w-[82%]">
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
              className="pointer-events-none absolute inset-x-[10%] top-[16%] bottom-[26%] flex items-center justify-center text-center font-hand text-[clamp(0.92rem,3.4vw,1.35rem)] leading-[1.25] font-medium tracking-[0.01em] text-ink/90 sm:inset-x-[12%] sm:top-[18%] sm:bottom-[28%] sm:text-[clamp(1.15rem,2.1vw,1.55rem)]"
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
