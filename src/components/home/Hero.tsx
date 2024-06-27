"use client";
/* eslint-disable @next/next/no-img-element */
import { Check, MoveRight } from "lucide-react";
import { Layout } from "../layout/Layout";
import { Card } from "../ui/card";
import { Glowing } from "../common/Glowing";
import { FAQ } from "./FAQ";
import { Play } from "../common/Play";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { Fragment, useEffect } from "react";
import { Footer } from "../common/Footer";
import { testimonials } from "@/lib/testimonial";
import { logos } from "@/lib/logos";
export type HeroProps = {};

export const Hero = (props: HeroProps) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Layout className="flex flex-col items-center justify-center">
      {/* hero */}
      <div
        id="about"
        data-aos="fade"
        data-aos-duration="1500"
        className="flex h-[70vh] w-full max-w-6xl flex-col items-start justify-center space-y-10 py-8"
      >
        <div className="text-left text-3xl font-bold text-white sm:text-4xl lg:text-6xl">
          <p className="animatedText leading-[5rem]">Everything you need</p>
          <p className="max-w-xl leading-[5rem]">
            for stunning video creations
          </p>
        </div>
        <p className="max-w-lg text-left text-lg text-muted-foreground">
          An online library of resources for video editing to turn your ideas
          into amazing videos.
        </p>
        <div className="flex gap-6">
          <button className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#554c69c6] px-6 font-semibold text-white transition-colors hover:bg-[#9e74ff]">
            <Play />
            Watch video
          </button>
          <Link href="/products">
            <button className="pinkButton inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 font-semibold text-white transition-colors">
              Brows content
              <MoveRight color="#000000" />
            </button>
          </Link>
        </div>
      </div>
      {/* screenshot */}
      <div
        data-aos="fade"
        data-aos-duration="1500"
        className="flex h-[70vh] w-full max-w-6xl flex-col items-center space-y-8"
      >
        <div className="rounded-lg border border-[#3f3f3f] bg-[#212121] p-8">
          <img
            src="/screenshot.avif"
            alt=""
            className="max-h-[60vh] w-full rounded-lg shadow-xl"
          />
        </div>
      </div>
      {/* features */}
      <div
        data-aos="fade"
        data-aos-duration="1500"
        className="mt-32 flex w-full max-w-6xl items-start justify-center gap-20 py-8"
      >
        <Card className="flex w-[50%] items-center justify-center border border-[#3f3f3f] bg-[#212121]">
          <img src="/IMAGE1.png" alt="" className="h-72 py-4" />
        </Card>
        <div className="sticky top-[5.5rem] w-[50%]">
          <p className="mb-2 text-3xl font-bold">
            Unleash Your Creative Potential
          </p>
          <p className="text-lg">
            With our premium selection, transform your ideas into reality with
            high-quality assets: royalty-free music, sound effects, stock
            footage, video templates, and more.
          </p>
        </div>
      </div>
      <div
        data-aos="fade"
        data-aos-duration="1500"
        className="flex w-full max-w-6xl flex-row-reverse items-start justify-center gap-20 py-8"
      >
        <Card className="flex w-[50%] items-center justify-center border border-[#3f3f3f] bg-[#212121]">
          <img src="IMAGE2.png" alt="" className="h-72 py-4" />
        </Card>
        <div className="sticky top-[5.5rem] w-[50%]">
          <p className="mb-2 text-3xl font-bold">Find Inspiration Instantly</p>
          <p className="text-lg">
            Our intuitive platform allows you to quickly find the inspiration
            you need with powerful search tools and expertly curated themed
            collections.
          </p>
        </div>
      </div>
      <div
        data-aos="fade"
        data-aos-duration="1500"
        className="flex w-full max-w-6xl items-start justify-center gap-20 py-8"
      >
        <Card className="flex w-[50%] items-center justify-center border border-[#3f3f3f] bg-[#212121]">
          <img src="IMAGE3.png" alt="" className="h-72 py-4" />
        </Card>
        <div className="sticky top-[5.5rem] w-[50%]">
          <p className="mb-2 text-3xl font-bold">Easy Integration</p>
          <p className="text-lg">
            Seamlessly integrate our resources with the most popular video
            editing software like Adobe Premiere Pro, Final Cut Pro, DaVinci
            Resolve, and more. Spend less time setting up and more time
            creating.
          </p>
        </div>
      </div>
      {/* more features */}
      <div
        data-aos="fade"
        data-aos-duration="1500"
        className="flex w-full max-w-6xl flex-col items-center justify-center space-y-8 p-8"
      >
        <h1 className="animatedText text-center text-6xl font-bold">
          Power your videos with the best creative assets
        </h1>
        <p className="max-w-lg text-center text-lg text-muted-foreground">
          These are a few of the key features of AITool that distinguish it from
          other AI platforms.
        </p>
        <div className="flex flex-wrap">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="w-full p-6 md:w-1/2 lg:w-1/3"
          >
            <div className="wow fadeInUp group mb-12">
              <div className="relative z-10 mb-10 flex size-12 items-center justify-center rounded-full bg-[#c2a8ff]">
                <img src="/Templates.webp" alt="" className="size-6" />
              </div>
              <h4 className="mb-4 text-2xl font-bold text-white">
                Video & Motion Template
              </h4>
              <p className="text-dark-6 mb-8 text-lg lg:mb-9">
                Access After Effects and Premiere Pro templates, 3D/2D
                animations, and animated presentations for professional videos.
              </p>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="w-full p-6 md:w-1/2 lg:w-1/3"
          >
            <div className="wow fadeInUp group mb-12">
              <div className="relative z-10 mb-10 flex size-12 items-center justify-center rounded-full bg-[#ff99eb]">
                <img src="/Musicc.webp" alt="" className="size-6" />
              </div>
              <h4 className="mb-4 text-2xl font-bold text-white">
                Musics & Sound effects
              </h4>
              <p className="text-dark-6 mb-8 text-lg lg:mb-9">
                Royalty-free music, immersive sound effects, varied soundscapes,
                and seamless music loops for dynamic videos.
              </p>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="w-full p-6 md:w-1/2 lg:w-1/3"
          >
            <div className="wow fadeInUp group mb-12">
              <div className="relative z-10 mb-10 flex size-12 items-center justify-center rounded-full bg-[#ffbb80]">
                <img src="/Footage.webp" alt="" className="size-6" />
              </div>
              <h4 className="mb-4 text-2xl font-bold text-white">
                Footage, Illustration & Gif
              </h4>
              <p className="text-dark-6 mb-8 text-lg lg:mb-9">
                HD/4K footage, high-quality vector illustrations, animated GIFs,
                and dynamic backgrounds for engaging projects.
              </p>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="w-full p-6 md:w-1/2 lg:w-1/3"
          >
            <div className="wow fadeInUp group mb-12">
              <div className="relative z-10 mb-10 flex size-12 items-center justify-center rounded-full bg-[#ffe27a]">
                <img src="/Plugin.webp" alt="" className="size-6" />
              </div>
              <h4 className="mb-4 text-2xl font-bold text-white">
                Plugins & Tools
              </h4>
              <p className="text-dark-6 mb-8 text-lg lg:mb-9">
                Adobe plugins, 3D animation tools, automation scripts, and
                advanced visual effects for professional results.
              </p>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="w-full p-6 md:w-1/2 lg:w-1/3"
          >
            <div className="wow fadeInUp group mb-12">
              <div className="relative z-10 mb-10 flex size-12 items-center justify-center rounded-full bg-[#69f28d]">
                <img src="/Font.webp" alt="" className="size-6" />
              </div>
              <h4 className="mb-4 text-2xl font-bold text-white">
                Character font
              </h4>
              <p className="text-dark-6 mb-8 text-lg lg:mb-9">
                Unique fonts, animated typefaces, and artistic scripts to
                personalize your videos with creative typography.
              </p>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="w-full p-6 md:w-1/2 lg:w-1/3"
          >
            <div className="wow fadeInUp group mb-12">
              <div className="relative z-10 mb-10 flex size-12 items-center justify-center rounded-full bg-[#8ecffb]">
                <img src="/preset.webp" alt="" className="size-6" />
              </div>
              <h4 className="mb-4 text-2xl font-bold text-white">Presets</h4>
              <p className="text-dark-6 mb-8 text-lg lg:mb-9">
                Professional color presets, cinematic LUTs, animation presets,
                text effects, and transitions for seamless video editing.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* relied on by organizations */}
      <div
        data-aos="fade"
        data-aos-duration="1500"
        className="hidden w-full max-w-6xl flex-col items-center justify-center gap-10 py-8"
      >
        <h1 className="text-center text-4xl font-bold">
          Relied on by organizations globally{" "}
        </h1>
        <div className="gradient-mask flex w-full max-w-6xl items-start justify-between">
          <div className="flex animate-infinite-scroll gap-10">
            {Array.from({ length: 30 }).map((_, index) => (
              <Fragment key={index}>
                {logos.map((t) => (
                  <img key={t} src={t} alt="" className="grayscale filter" />
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
      {/* plan  */}
      <div className="flex w-full flex-col items-center justify-center space-y-8 p-8">
        <p
          data-aos="fade"
          data-aos-duration="1500"
          className="max-w-lg text-center text-lg text-muted-foreground"
        >
          Select a plan
        </p>
        <h1
          data-aos="fade"
          data-aos-duration="1500"
          id="pricing"
          className="animatedText pb-2 text-6xl font-bold"
        >
          Pricing
        </h1>
        <p
          data-aos="fade"
          data-aos-duration="1500"
          className="max-w-lg text-center text-lg text-muted-foreground"
        >
          These are a few of the key features of AITool that distinguish it from
          other AI platforms.
        </p>
        <div
          data-aos="fade"
          data-aos-duration="1500"
          className="container mx-auto"
        >
          <div className="mt-8 flex justify-center gap-4">
            <Glowing
              color="#8ecffb"
              className="relative w-full max-w-[22rem] rounded-xl p-6 px-8 py-10 sm:p-12 md:w-1/2 lg:w-1/3 lg:px-6 lg:py-10 xl:p-14"
            >
              <span className="mb-5 block rounded-full bg-white/10 px-6 py-2 text-xl font-medium text-white backdrop-blur-2xl">
                BETA
              </span>
              <h2 className="text-dark mb-4 text-4xl font-semibold dark:text-white xl:text-[42px] xl:leading-[1.21]">
                <span className="-ml-1 -tracking-[2px]">€ 10</span>
                <span className="text-body-color ml-2 text-base font-normal text-muted-foreground">
                  Per Month
                </span>
              </h2>
              <div className="mb-[30px]">
                <h5 className="text-dark mb-5 text-lg font-medium dark:text-white">
                  Features
                </h5>
                <ul className="mt-8 flex flex-col space-y-4">
                  <li className="inline-flex items-center space-x-2">
                    <Check color="#ffffff" />
                    <span className="text-base font-medium text-white">
                      {" "}
                      Unlimited download{" "}
                    </span>
                  </li>
                  <li className="inline-flex items-center space-x-2">
                    <Check color="#ffffff" />
                    <span className="text-base font-medium text-white">
                      {" "}
                      Publish anywere offline{" "}
                    </span>
                  </li>
                  <li className="inline-flex items-center space-x-2">
                    <Check color="#ffffff" />
                    <span className="text-base font-medium text-white">
                      {" Adobe's app templates "}
                    </span>
                  </li>
                  <li className="inline-flex items-center space-x-2">
                    <Check color="#ffffff" />
                    <span className="text-base font-medium text-white">
                      {" "}
                      New assets added daily{" "}
                    </span>
                  </li>
                  <li className="inline-flex items-center space-x-2">
                    <Check color="#ffffff" />
                    <span className="text-base font-medium text-white">
                      {" "}
                      Exclusive Adobe extension{" "}
                    </span>
                  </li>
                  <li className="inline-flex items-center space-x-2">
                    <Check color="#ffffff" />
                    <span className="text-base font-medium text-white">
                      {" "}
                      Professional plugins{" "}
                    </span>
                  </li>
                </ul>
              </div>
              <Link
                href="/signin"
                className="hover:bg-blue-dark inline-block rounded-md bg-white px-7 py-3 text-center text-base font-medium text-black transition hover:bg-[#ffffffbb]"
              >
                Get started
              </Link>
            </Glowing>
            <Glowing
              color="#8ecffb"
              className="relative w-full max-w-[22rem] overflow-hidden rounded-xl p-6 px-8 py-10 sm:p-12 md:w-1/2 lg:w-1/3 lg:px-6 lg:py-10 xl:p-14"
            >
              <p className="recommended absolute right-[-50px] inline-block -rotate-90 rounded-bl-md rounded-tl-md px-5 py-2 text-base font-medium text-black">
                Recommended
              </p>
              <span className="mb-5 block rounded-full bg-white/10 px-6 py-2 text-xl font-medium text-white backdrop-blur-2xl">
                Annualy
              </span>
              <h2 className="text-dark mb-4 text-4xl font-semibold dark:text-white xl:text-[42px] xl:leading-[1.21]">
                <span className="-ml-1 -tracking-[2px]">€ 199</span>
                <span className="text-body-color ml-2 text-base font-normal text-muted-foreground">
                  Per Year
                </span>
              </h2>
              <div className="mb-[30px]">
                <h5 className="text-dark mb-5 text-lg font-medium dark:text-white">
                  Features
                </h5>
                <ul className="mt-8 flex flex-col space-y-4">
                  <li className="inline-flex items-center space-x-2">
                    <Check color="#ffffff" />
                    <span className="text-base font-medium text-white">
                      {" "}
                      HD Footage & Photos{" "}
                    </span>
                  </li>
                  <li className="inline-flex items-center space-x-2">
                    <Check color="#ffffff" />
                    <span className="text-base font-medium text-white">
                      {" "}
                      Musics & sound Effects{" "}
                    </span>
                  </li>
                  <li className="inline-flex items-center space-x-2">
                    <Check color="#ffffff" />
                    <span className="text-base font-medium text-white">
                      {" Adobe's app templates "}
                    </span>
                  </li>
                  <li className="inline-flex items-center space-x-2">
                    <Check color="#ffffff" />
                    <span className="text-base font-medium text-white">
                      {" "}
                      Pack for video editing and thumbnails{" "}
                    </span>
                  </li>
                  <li className="inline-flex items-center space-x-2">
                    <Check color="#ffffff" />
                    <span className="text-base font-medium text-white">
                      {" "}
                      Cancel anytime{" "}
                    </span>
                  </li>
                </ul>
              </div>
              <Link
                href="/signin"
                className="hover:bg-blue-dark inline-block rounded-md bg-white px-7 py-3 text-center text-base font-medium text-black transition hover:bg-[#ffffffbb]"
              >
                Get started
              </Link>
            </Glowing>
            <Glowing
              color="#8ecffb"
              className="relative w-full max-w-[22rem] rounded-xl p-6 px-8 py-10 sm:p-12 md:w-1/2 lg:w-1/3 lg:px-6 lg:py-10 xl:p-14"
            >
              <span className="mb-5 block rounded-full bg-white/10 px-6 py-2 text-xl font-medium text-white backdrop-blur-2xl">
                Monthly
              </span>
              <h2 className="text-dark mb-4 text-4xl font-semibold dark:text-white xl:text-[42px] xl:leading-[1.21]">
                <span className="-ml-1 -tracking-[2px]">€ 19</span>
                <span className="text-body-color ml-2 text-base font-normal text-muted-foreground">
                  Per Month
                </span>
              </h2>
              <div className="mb-[30px]">
                <h5 className="text-dark mb-5 text-lg font-medium dark:text-white">
                  Features
                </h5>
                <ul className="mt-8 flex flex-col space-y-4">
                  <li className="inline-flex items-center space-x-2">
                    <Check color="#ffffff" />
                    <span className="text-base font-medium text-white">
                      {" "}
                      HD Footage & Photos{" "}
                    </span>
                  </li>
                  <li className="inline-flex items-center space-x-2">
                    <Check color="#ffffff" />
                    <span className="text-base font-medium text-white">
                      {" "}
                      Musics & sound Effects{" "}
                    </span>
                  </li>
                  <li className="inline-flex items-center space-x-2">
                    <Check color="#ffffff" />
                    <span className="text-base font-medium text-white">
                      {" Adobe's app templates "}
                    </span>
                  </li>
                  <li className="inline-flex items-center space-x-2">
                    <Check color="#ffffff" />
                    <span className="text-base font-medium text-white">
                      {" "}
                      Pack for video editing and thumbnails{" "}
                    </span>
                  </li>
                  <li className="inline-flex items-center space-x-2">
                    <Check color="#ffffff" />
                    <span className="text-base font-medium text-white">
                      {" "}
                      Cancel anytime{" "}
                    </span>
                  </li>
                </ul>
              </div>
              <Link
                href="/signin"
                className="hover:bg-blue-dark inline-block rounded-md bg-white px-7 py-3 text-center text-base font-medium text-black transition hover:bg-[#ffffffbb]"
              >
                Get started
              </Link>
            </Glowing>
          </div>
        </div>
      </div>
      {/* community */}
      {/* relied on by organizations */}
      <div
        data-aos="fade"
        data-aos-duration="1500"
        className="flex w-full max-w-6xl flex-col items-center justify-center gap-10 py-8"
      >
        <div className="flex items-center gap-2 text-center text-4xl font-bold">
          Our users <img src="/red-heart.png" alt="" className="size-10" />{" "}
          EditBag
        </div>
        <div className="gradient-mask flex w-full max-w-6xl items-start justify-between">
          <div className="flex animate-infinite-scroll gap-16">
            {Array.from({ length: 10 }).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((t) => (
                  <Card
                    key={t.imgSrc}
                    className="h-fit w-[340px] overflow-hidden rounded-lg border bg-[rgba(38,38,38,.6)]"
                  >
                    <p className="p-6 pb-4 font-mono text-lg">{t.text}</p>
                    <div className="flex justify-between bg-[#1a1a1a] px-4 py-6">
                      <div className="">
                        <h1 className="text-xl font-semibold">{t.name}</h1>
                        <p className="text-muted-foreground">{t.title}</p>
                      </div>
                      <img
                        src={t.imgSrc}
                        alt=""
                        className="size-14 rounded-full bg-[#c2a8ff]"
                      />
                    </div>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
      <div
        data-aos="fade"
        data-aos-duration="1500"
        className="flex w-full flex-col items-center justify-center space-y-8 p-8"
      >
        <FAQ />
      </div>

      <Footer />
    </Layout>
  );
};
