"use client";

import { Twitter } from "../common/twitter";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

import { Logo } from "../common/Logo";
import { Facebook } from "../common/Facebook";
import { Instagram } from "../common/Instagram";
import { useEffect } from "react";

export const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <footer
      data-aos="fade"
      data-aos-duration="1500"
      className="flex w-full max-w-6xl flex-col items-center justify-center gap-10 py-8"
    >
      <div className="flex w-full justify-between">
        <div className="flex w-1/2 flex-col">
          <Logo className="mb-2" />
          <p className="w-1/2 text-lg">
            An online-based solution combining AI potential with the simplicity
            of a subscription-based software method.
          </p>
        </div>
        <div className="flex w-1/4 flex-col">
          <h1 className="mb-2 text-2xl font-semibold">Contact</h1>
          <p className="text-lg">
            Email: hello@tool.ai <br /> Address: <br />
            Singel 258
            <br /> 1234 AB Amsterdam
            <br /> The Netherlands
          </p>
        </div>
        <div className="flex flex-col">
          <h1 className="mb-2 text-2xl font-semibold">Links</h1>
          <Link className="w-full text-lg hover:text-[#c2a8ff]" href="#">
            About
          </Link>
          <Link className="w-full text-lg hover:text-[#c2a8ff]" href="#">
            Contact
          </Link>
          <Link
            className="w-full text-lg hover:text-[#c2a8ff]"
            href="/#pricing"
          >
            Pricing
          </Link>
          <Link className="w-full text-lg hover:text-[#c2a8ff]" href="#">
            Home 02
          </Link>
          <Link className="w-full text-lg hover:text-[#c2a8ff]" href="#">
            More products
          </Link>
        </div>
      </div>
      <div className="h-[2px] w-full bg-[#c2a8ff]"></div>
      <div className="flex w-full justify-between">
        <div className="w-1/2">
          <p className="text-lg">© 2024, AITool. All Rights Reserved</p>
          <span className="flex gap-2">
            <Link className="text-lg hover:text-[#c2a8ff]" href="#">
              Term of Services
            </Link>{" "}
            <p className="animatedText">✦</p>
            <Link className="text-lg hover:text-[#c2a8ff]" href="#">
              Privacy Policy
            </Link>
          </span>
        </div>

        <div className="flex gap-4">
          <Link
            href="https://twitter.com"
            className="flex size-12 items-center justify-center rounded-full border-2 border-transparent bg-[#554c69c6] p-2 hover:border-white hover:bg-transparent"
          >
            <Twitter />
          </Link>
          <Link
            href="https://facebook.com"
            className="flex size-12 items-center justify-center rounded-full border-2 border-transparent bg-[#554c69c6] p-2 hover:border-white hover:bg-transparent"
          >
            <Facebook />
          </Link>
          <Link
            href="https://instagram.com"
            className="flex size-12 items-center justify-center rounded-full border-2 border-transparent bg-[#554c69c6] p-2 hover:border-white hover:bg-transparent"
          >
            <Instagram />
          </Link>
        </div>
      </div>
    </footer>
  );
};
