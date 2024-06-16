"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";

export type GlowingProps = {
  children: React.ReactNode;
  className?: string;
  color: string;
};

export const Glowing = ({ children, className, color }: GlowingProps) => {
  const cardsContainer = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const applyOverlayMask = (e: PointerEvent) => {
    if (!cardsContainer.current) return;

    const { pageX, pageY } = e;
    const { offsetLeft, offsetTop } = cardsContainer.current;

    const x = pageX - offsetLeft;
    const y = pageY - offsetTop;

    cardsContainer.current.style.setProperty("--x", `${x}px`);
    cardsContainer.current.style.setProperty("--y", `${y}px`);
    cardsContainer.current.style.setProperty("--opacity", "1");
  };

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => applyOverlayMask(e);
    document.body.addEventListener("pointermove", handlePointerMove);

    return () =>
      document.body.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
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
              className
            )}
          >
            {children}
          </div>
        </div>

        {isHovered && (
          <div className="glow glow-effect pointer-events-none absolute inset-0 flex select-none flex-wrap gap-10 opacity-10">
            <div
              className={cn(
                `twin flex flex-1 flex-col items-start gap-5 rounded-xl border-2 border-solid border-[${color}] bg-[${color}] p-10 text-transparent text-white transition-colors overflow-hidden`,
                className
              )}
            ></div>
          </div>
        )}
      </div>
    </main>
  );
};
