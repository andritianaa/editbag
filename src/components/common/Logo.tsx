import { cn } from "../../lib/utils";

export type LogoProps = {
  className?: string;
};

export const Logo = (props: LogoProps) => {
  return <p className={cn("logo text-2xl", props.className)}>EDITBAG</p>;
};
