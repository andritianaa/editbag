"use client";
import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { Logo } from "@/components/common/Logo";

export const Tools = () => {
  return (
    <div className="px-4 py-12 text-zinc-50">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <SocialsBlock />
        <AboutBlock />
      </motion.div>
    </div>
  );
};

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border  p-6 shadow-md",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 bg-white dark:bg-[#191919] md:col-span-6">
    <Logo />
    <h1 className="mb-12 text-4xl font-medium leading-tight text-blue-500">
      {" Hi, I'm Andritiana. "}
      <span className="text-gradient">
        I created Editbag to streamline the tedious configuration steps in
        project development.
      </span>
    </h1>
    <a
      href="#"
      className="flex items-center gap-1 text-blue-500 hover:underline"
    >
      Contact me <ArrowRight />
    </a>
  </Block>
);

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 flex aspect-square items-center justify-center bg-[#61dafb] md:col-span-3"
    >
      <Image
        src="/logo/react.svg"
        alt=""
        className="grid h-full place-content-center"
        width={512}
        height={512}
      />
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 flex aspect-square items-center justify-center bg-zinc-50 md:col-span-3"
    >
      <Image
        src="/logo/prisma.svg"
        alt=""
        className="grid h-full place-content-center"
        width={512}
        height={512}
      />
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 flex aspect-square items-center justify-center bg-zinc-50 md:col-span-3"
    >
      <Image
        src="/logo/nextjs-13.svg"
        alt=""
        className="grid h-full place-content-center"
        width={512}
        height={512}
      />
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 flex aspect-square items-center justify-center bg-[#38bdf8] md:col-span-3"
    >
      <Image
        src="/logo/tailwind.svg"
        alt=""
        className="grid h-full place-content-center"
        width={512}
        height={512}
      />
    </Block>
  </>
);

const AboutBlock = () => (
  <Block className="col-span-12 text-3xl leading-snug">
    <p className="text-gradient text-white">
      My passion is building cool stuff.{" "}
      <span className="">
        {`I build primarily with React, Tailwind CSS, and Framer Motion. I love
        this stack so much that I even built a website about it. I've made over
        a hundred videos on the subject across YouTube and TikTok.`}
      </span>
    </p>
  </Block>
);

const LocationBlock = () => (
  <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3">
    <MapPin />
    <p className="text-center text-lg text-zinc-400">Cyberspace</p>
  </Block>
);

const EmailListBlock = () => (
  <Block className="col-span-12 md:col-span-9">
    <p className="mb-3 text-lg">Join my mailing list</p>
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex items-center gap-2"
    >
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors focus:border-red-300 focus:outline-0"
      />
      <button
        type="submit"
        className="flex items-center gap-2 whitespace-nowrap rounded bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-300"
      >
        <Mail />
        Join the list
      </button>
    </form>
  </Block>
);
