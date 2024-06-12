"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";

export type GlowingProps = {
  children: React.ReactNode;
  className?: string;
  color: string;
};

export const Glowing = (props: GlowingProps) => {
  const cardsContainer = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const applyOverlayMask = (e: PointerEvent) => {
    const documentTarget = e.currentTarget as Element;

    if (!cardsContainer.current) {
      return;
    }

    const x = e.pageX - cardsContainer.current.offsetLeft;
    const y = e.pageY - cardsContainer.current.offsetTop;

    cardsContainer.current.setAttribute(
      "style",
      `--x: ${x}px; --y: ${y}px; --opacity: 1`
    );
  };

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      applyOverlayMask(e);
    };

    document.body.addEventListener("pointermove", handlePointerMove);

    return () => {
      document.body.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <>
      <main>
        <div
          className="relative"
          ref={cardsContainer}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex flex-wrap gap-10">
            <div
              className={cn(
                "flex flex-1 flex-col items-start gap-5 rounded-xl border border-solid border-[#eceff133] bg-[rgba(38,38,38,.6)] text-white transition-colors",
                props.className
              )}
            >
              {props.children}
            </div>
          </div>

          {/* twin cards */}
          {isHovered && (
            <div
              className="glow pointer-events-none absolute inset-0 flex select-none flex-wrap gap-10 opacity-10"
              style={{
                opacity: "0.2",
                transition: "opacity 0.5s ease-in-out", // Added transition here
                mask: `
                radial-gradient(
                  15rem 15rem at var(--x) var(--y),
                  #000 1%,
                  transparent 100%
                )`,
                WebkitMask: `
                radial-gradient(
                  15rem 15rem at var(--x) var(--y),
                  #000 1%,
                  transparent 100%
                )`,
              }}
            >
              {/* card */}
              <div
                className={cn(
                  `twin flex flex-1 flex-col items-start gap-5 rounded-xl border-2 border-solid border-[${props.color}] bg-[${props.color}] p-10 text-transparent text-white transition-colors overflow-hidden`,
                  props.className
                )}
              >
                {props.children}
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
};
