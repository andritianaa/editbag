import React from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { GetStartedButton } from "./GetStartedButton";
import { currentUser } from "../../lib/current-user";
import { User } from "@prisma/client";
import { ChevronRight } from "lucide-react";

type Props = {
  user: User | undefined | null;
};

export function SpotlightHero(props: Props) {
  return (
    <div className="bg-grid-white/[0.02] relative flex h-[40rem] w-full overflow-hidden rounded-md antialiased md:items-center md:justify-center">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />

      <div className="relative overflow-hidden before:absolute before:start-1/2 before:top-0 before:-z-[1] before:size-full before:-translate-x-1/2 before:transform before:bg-[url('https://preline.co/assets/svg/examples/squared-bg-element.svg')] before:bg-top before:bg-no-repeat dark:before:bg-none">
        <div className="mx-auto max-w-[85rem] px-4 pb-10 pt-24 sm:px-6 lg:px-8">
          <div className="flex justify-center"></div>
          <div className="mx-auto mt-5 max-w-2xl text-center">
            <h1 className="text-gradient block text-4xl font-bold md:text-5xl lg:text-6xl">
              Editbag <br />
              Boost your creativity
              <br />
            </h1>
          </div>

          <div className="mx-auto mt-5 max-w-3xl text-center">
            <p className="text-lg text-gray-600 dark:text-neutral-400">
              Download assets for After Effects, Illustrator, Photoshop, and 3D
              models. Choose your subscription and bring your projects to life
              today!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
