import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Layout } from "../layout/Layout";
import { Label } from "../ui/label";

export const FAQ = () => {
  return (
    <div className="h-full w-full max-md:p-4">
      <Layout className="card my-8 max-w-3xl space-y-4 p-16 pt-8 max-md:my-0 max-md:p-8">
        <Label className="text-2xl font-bold">Frequently asked question</Label>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is this website?</AccordionTrigger>
            <AccordionContent>
              This website is a resource for downloading high-quality assets for
              video montage and photo editing, including stock footage, images,
              music, sound effects, and templates.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Who can use the assets on this website?
            </AccordionTrigger>
            <AccordionContent>
              Our assets are designed for use by filmmakers, video editors,
              photographers, graphic designers, and anyone in need of
              high-quality multimedia content.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Account and Membership</AccordionTrigger>
            <AccordionContent>
              Yes, you need to create an account and subscribe to download
              assets.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>How do I download an asset?</AccordionTrigger>
            <AccordionContent>
              After logging in, browse or search for the asset you need, click
              on the download button, and the file will be saved to your device.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              What are the usage rights for the assets?
            </AccordionTrigger>
            <AccordionContent>
              Assets downloaded from our website can be used for personal and
              commercial projects. Redistribution or resale of the assets as
              standalone files is prohibited.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Layout>
    </div>
  );
};
