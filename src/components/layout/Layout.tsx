import { twx } from "@/lib/twx";
export const Layout = twx.div((props) => [
  `max-w-8xl w-full gap-4 mx-auto px-4`,
]);

export const LayoutContent = twx.div((props) => [`w-full`]);

export const LayoutTitle = twx.h1((props) => [`text-4xl font-bold mt-4`]);
