/* eslint-disable @next/next/no-img-element */
import { Card } from "../ui/card";

export const TestimonialCard = ({ name, title, text, imgSrc }) => (
  <Card className="w-full max-w-sm overflow-hidden rounded-lg border bg-[rgba(38,38,38,.6)]">
    <p className="p-6 pb-4 font-mono text-lg">{text}</p>
    <div className="flex justify-between bg-[#1a1a1a] px-4 py-6">
      <div className="">
        <h1 className="text-xl font-semibold">{name}</h1>
        <p className="text-muted-foreground">{title}</p>
      </div>
      <img src={imgSrc} alt="" className="size-14 rounded-full bg-[#c2a8ff]" />
    </div>
  </Card>
);
