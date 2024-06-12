"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Layout } from "../layout/Layout";
import { Label } from "../ui/label";
import { Glowing } from "../common/Glowing";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export const FAQ = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="fade"
      data-aos-duration="1500"
      className="flex flex-col items-center gap-8"
    >
      <h1 className="animatedText pb-2 text-center text-6xl font-bold">
        Frequently Asked Questions
      </h1>
      <p className="max-w-lg text-center text-lg text-muted-foreground">
        Seamlessly utilize your preferred tools for projects, start to finish.
      </p>
      <Accordion
        type="single"
        collapsible
        className="w-full max-w-2xl space-y-4"
      >
        <Glowing color="#8ecffb">
          <AccordionItem value="item-1 p-0">
            <AccordionTrigger>What is this website?</AccordionTrigger>
            <AccordionContent>
              This website is a resource for downloading high-quality assets for
              video montage and photo editing, including stock footage, images,
              music, sound effects, and templates.
            </AccordionContent>
          </AccordionItem>
        </Glowing>
        <Glowing color="#8ecffb">
          <AccordionItem value="item-2 p-0">
            <AccordionTrigger>
              Who can use the assets on this website?
            </AccordionTrigger>
            <AccordionContent>
              Our assets are designed for use by filmmakers, video editors,
              photographers, graphic designers, and anyone in need of
              high-quality multimedia content.
            </AccordionContent>
          </AccordionItem>
        </Glowing>
        <Glowing color="#8ecffb">
          <AccordionItem value="item-3  p-0">
            <AccordionTrigger>Account and Membership</AccordionTrigger>
            <AccordionContent>
              Yes, you need to create an account and subscribe to download
              assets.
            </AccordionContent>
          </AccordionItem>
        </Glowing>
        <Glowing color="#8ecffb">
          <AccordionItem value="item-4  p-0">
            <AccordionTrigger>How do I download an asset?</AccordionTrigger>
            <AccordionContent>
              After logging in, browse or search for the asset you need, click
              on the download button, and the file will be saved to your device.
            </AccordionContent>
          </AccordionItem>
        </Glowing>
        <Glowing color="#8ecffb">
          <AccordionItem value="item-5  p-0">
            <AccordionTrigger>
              What are the usage rights for the assets?
            </AccordionTrigger>
            <AccordionContent>
              Assets downloaded from our website can be used for personal and
              commercial projects. Redistribution or resale of the assets as
              standalone files is prohibited.
            </AccordionContent>
          </AccordionItem>
        </Glowing>
      </Accordion>
    </div>
  );
};
