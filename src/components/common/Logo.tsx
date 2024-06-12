import { cn } from "../../lib/utils";

export type LogoProps = {
  className?: string;
};

export const Logo = (props: LogoProps) => {
  return (
    <p className={cn("logo text-2xl", props.className)}>
      EDIT<span className="text-[#96ddf2]">BAG</span>
    </p>
  );
};
