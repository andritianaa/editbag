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
import { testimonials } from "../../lib/testimonial";
import { logos } from "../../lib/logos";
export type HeroProps = {};

export const Hero = (props: HeroProps) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Layout className="flex flex-col items-center justify-center">
      {/* hero */}
      <div
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
          <img
            src="https://framerusercontent.com/images/4CgzWyHvfnclw7zTig67f8Ecgl8.png"
            alt=""
            className="h-72 py-4"
          />
        </Card>
        <div className="sticky top-[5.5rem] w-[50%]">
          <p className="mb-2 text-3xl font-bold">Delightful user experience</p>
          <p className="text-lg">
            AITool assists you in managing your tasks and achieving your goals
            using an interactive and straightforward method.
          </p>
        </div>
      </div>
      <div
        data-aos="fade"
        data-aos-duration="1500"
        className="flex w-full max-w-6xl flex-row-reverse items-start justify-center gap-20 py-8"
      >
        <Card className="flex w-[50%] items-center justify-center border border-[#3f3f3f] bg-[#212121]">
          <img
            src="https://framerusercontent.com/images/bnnutbU3kyeL97GzQIXp0CAmA.png"
            alt=""
            className="h-72 py-4"
          />
        </Card>
        <div className="sticky top-[5.5rem] w-[50%]">
          <p className="mb-2 text-3xl font-bold">Customization theme</p>
          <p className="text-lg">
            AITool offers lot of customizations, one of them allowing you to
            choose from light, dark and black UI theme.
          </p>
        </div>
      </div>
      <div
        data-aos="fade"
        data-aos-duration="1500"
        className="flex w-full max-w-6xl items-start justify-center gap-20 py-8"
      >
        <Card className="flex w-[50%] items-center justify-center border border-[#3f3f3f] bg-[#212121]">
          <img
            src="https://framerusercontent.com/images/AKPoNO79KUV6LLktEb6iyng0Ro0.png"
            alt=""
            className="h-72 py-4"
          />
        </Card>
        <div className="sticky top-[5.5rem] w-[50%]">
          <p className="mb-2 text-3xl font-bold">Smart Automation</p>
          <p className="text-lg">
            Utilizing intelligent automation and exceptional safety measures,
            this is the ideal choice for teams aiming to increase efficiency.
          </p>
        </div>
      </div>
      {/* more features */}
      <div
        data-aos="fade"
        data-aos-duration="1500"
        className="flex w-full max-w-6xl flex-col items-center justify-center space-y-8 p-8"
      >
        <h1 className="animatedText text-6xl font-bold">More Features</h1>
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
                <svg
                  className="scale-75"
                  width="37"
                  height="37"
                  viewBox="0 0 37 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.5801 8.30514H27.9926C28.6113 7.85514 29.1176 7.34889 29.3426 6.73014C29.6801 5.88639 29.6801 4.48014 27.9363 2.84889C26.0801 1.04889 24.3926 1.04889 23.3238 1.33014C20.9051 1.94889 19.2738 4.76139 18.3738 6.78639C17.4738 4.76139 15.8426 2.00514 13.4238 1.33014C12.3551 1.04889 10.6676 1.10514 8.81133 2.84889C7.06758 4.53639 7.12383 5.88639 7.40508 6.73014C7.63008 7.34889 8.13633 7.85514 8.75508 8.30514H5.71758C4.08633 8.30514 2.73633 9.65514 2.73633 11.2864V14.9989C2.73633 16.5739 4.03008 17.8676 5.60508 17.9239V31.6489C5.60508 33.5614 7.18008 35.1926 9.14883 35.1926H27.5426C29.4551 35.1926 31.0863 33.6176 31.0863 31.6489V17.8676C32.4926 17.6426 33.5613 16.4051 33.5613 14.9426V11.2301C33.5613 9.59889 32.2113 8.30514 30.5801 8.30514ZM23.9426 3.69264C23.9988 3.69264 24.1676 3.63639 24.3363 3.63639C24.7301 3.63639 25.3488 3.80514 26.1926 4.59264C26.8676 5.21139 27.0363 5.66139 26.9801 5.77389C26.6988 6.56139 23.8863 7.40514 20.6801 7.74264C21.4676 5.99889 22.6488 4.03014 23.9426 3.69264ZM10.4988 4.64889C11.3426 3.86139 11.9613 3.69264 12.3551 3.69264C12.5238 3.69264 12.6363 3.74889 12.7488 3.74889C14.0426 4.08639 15.2801 5.99889 16.0676 7.79889C12.8613 7.46139 10.0488 6.61764 9.76758 5.83014C9.71133 5.66139 9.88008 5.26764 10.4988 4.64889ZM5.26758 14.9426V11.2301C5.26758 11.0051 5.43633 10.7801 5.71758 10.7801H30.5801C30.8051 10.7801 31.0301 10.9489 31.0301 11.2301V14.9426C31.0301 15.1676 30.8613 15.3926 30.5801 15.3926H5.71758C5.49258 15.3926 5.26758 15.2239 5.26758 14.9426ZM27.5426 32.6614H9.14883C8.58633 32.6614 8.13633 32.2114 8.13633 31.6489V17.9239H28.4988V31.6489C28.5551 32.2114 28.1051 32.6614 27.5426 32.6614Z"
                    fill="black"
                  />
                </svg>
              </div>
              <h4 className="mb-4 text-2xl font-bold text-white">
                Create command
              </h4>
              <p className="text-dark-6 mb-8 text-lg lg:mb-9">
                Enables users to locate solutions to their inquiries without
                browsing numerous resources.
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
                <svg
                  className="scale-75"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.5998 1.01245H5.39981C2.98105 1.01245 0.956055 2.9812 0.956055 5.4562V30.6562C0.956055 33.075 2.9248 35.0437 5.39981 35.0437H30.5998C33.0186 35.0437 34.9873 33.075 34.9873 30.6562V5.39995C34.9873 2.9812 33.0186 1.01245 30.5998 1.01245ZM5.39981 3.48745H30.5998C31.6123 3.48745 32.4561 4.3312 32.4561 5.39995V11.1937H3.4873V5.39995C3.4873 4.38745 4.38731 3.48745 5.39981 3.48745ZM3.4873 30.6V13.725H23.0623V32.5125H5.39981C4.38731 32.5125 3.4873 31.6125 3.4873 30.6ZM30.5998 32.5125H25.5373V13.725H32.4561V30.6C32.5123 31.6125 31.6123 32.5125 30.5998 32.5125Z"
                    fill="black"
                  />
                </svg>
              </div>
              <h4 className="mb-4 text-2xl font-bold text-white">
                Improve everyday
              </h4>
              <p className="text-dark-6 mb-8 text-lg lg:mb-9">
                The app uses natural language processing to understand user
                queries and provide accurate and relevant responses.
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
                <svg
                  className="scale-75"
                  width="37"
                  height="37"
                  viewBox="0 0 37 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M33.5613 21.4677L31.3675 20.1177C30.805 19.7239 30.0175 19.9489 29.6238 20.5114C29.23 21.1302 29.455 21.8614 30.0175 22.2552L31.48 23.2114L18.1488 31.5927L4.76127 23.2114L6.22377 22.2552C6.84252 21.8614 7.01127 21.0739 6.61752 20.5114C6.22377 19.8927 5.43627 19.7239 4.87377 20.1177L2.68002 21.4677C2.11752 21.8614 1.72377 22.4802 1.72377 23.1552C1.72377 23.8302 2.06127 24.5052 2.68002 24.8427L17.08 33.8989C17.4175 34.1239 17.755 34.1802 18.1488 34.1802C18.5425 34.1802 18.88 34.0677 19.2175 33.8989L33.5613 24.8989C34.1238 24.5052 34.5175 23.8864 34.5175 23.2114C34.5175 22.5364 34.18 21.8614 33.5613 21.4677Z"
                    fill="black"
                  />
                  <path
                    d="M20.1175 20.4552L18.1488 21.6364L16.18 20.3989C15.5613 20.0052 14.83 20.2302 14.4363 20.7927C14.0425 21.4114 14.2675 22.1427 14.83 22.5364L17.4738 24.1677C17.6988 24.2802 17.9238 24.3364 18.1488 24.3364C18.3738 24.3364 18.5988 24.2802 18.8238 24.1677L21.4675 22.5364C22.0863 22.1427 22.255 21.3552 21.8613 20.7927C21.4675 20.2302 20.68 20.0614 20.1175 20.4552Z"
                    fill="black"
                  />
                  <path
                    d="M7.74252 18.0927L11.455 20.4552C11.68 20.5677 11.905 20.6239 12.13 20.6239C12.5238 20.6239 12.9738 20.3989 13.1988 20.0052C13.5925 19.3864 13.3675 18.6552 12.805 18.2614L9.09252 15.8989C8.47377 15.5052 7.74252 15.7302 7.34877 16.2927C6.95502 16.9677 7.12377 17.7552 7.74252 18.0927Z"
                    fill="black"
                  />
                  <path
                    d="M5.04252 16.1802C5.43627 16.1802 5.88627 15.9552 6.11127 15.5614C6.50502 14.9427 6.28002 14.2114 5.71752 13.8177L4.81752 13.2552L5.71752 12.6927C6.33627 12.2989 6.50502 11.5114 6.11127 10.9489C5.71752 10.3302 4.93002 10.1614 4.36752 10.5552L1.72377 12.1864C1.33002 12.4114 1.10502 12.8052 1.10502 13.2552C1.10502 13.7052 1.33002 14.0989 1.72377 14.3239L4.36752 15.9552C4.53627 16.1239 4.76127 16.1802 5.04252 16.1802Z"
                    fill="black"
                  />
                  <path
                    d="M8.41752 10.7239C8.64252 10.7239 8.86752 10.6677 9.09252 10.5552L12.805 8.1927C13.4238 7.79895 13.5925 7.01145 13.1988 6.44895C12.805 5.8302 12.0175 5.66145 11.455 6.0552L7.74252 8.4177C7.12377 8.81145 6.95502 9.59895 7.34877 10.1614C7.57377 10.4989 7.96752 10.7239 8.41752 10.7239Z"
                    fill="black"
                  />
                  <path
                    d="M16.18 6.05522L18.1488 4.81772L20.1175 6.05522C20.3425 6.16772 20.5675 6.22397 20.7925 6.22397C21.1863 6.22397 21.6363 5.99897 21.8613 5.60522C22.255 4.98647 22.03 4.25522 21.4675 3.86147L18.8238 2.23022C18.43 1.94897 17.8675 1.94897 17.4738 2.23022L14.83 3.86147C14.2113 4.25522 14.0425 5.04272 14.4363 5.60522C14.83 6.16772 15.6175 6.44897 16.18 6.05522Z"
                    fill="black"
                  />
                  <path
                    d="M23.4925 8.19267L27.205 10.5552C27.43 10.6677 27.655 10.7239 27.88 10.7239C28.2738 10.7239 28.7238 10.4989 28.9488 10.1052C29.3425 9.48642 29.1175 8.75517 28.555 8.36142L24.8425 5.99892C24.28 5.60517 23.4925 5.83017 23.0988 6.39267C22.705 7.01142 22.8738 7.79892 23.4925 8.19267Z"
                    fill="black"
                  />
                  <path
                    d="M34.5738 12.1864L31.93 10.5552C31.3675 10.1614 30.58 10.3864 30.1863 10.9489C29.7925 11.5677 30.0175 12.2989 30.58 12.6927L31.48 13.2552L30.58 13.8177C29.9613 14.2114 29.7925 14.9989 30.1863 15.5614C30.4113 15.9552 30.8613 16.1802 31.255 16.1802C31.48 16.1802 31.705 16.1239 31.93 16.0114L34.5738 14.3802C34.9675 14.1552 35.1925 13.7614 35.1925 13.3114C35.1925 12.8614 34.9675 12.4114 34.5738 12.1864Z"
                    fill="black"
                  />
                  <path
                    d="M24.1675 20.624C24.3925 20.624 24.6175 20.5677 24.8425 20.4552L28.555 18.0927C29.1738 17.699 29.3425 16.9115 28.9488 16.349C28.555 15.7302 27.7675 15.5615 27.205 15.9552L23.4925 18.3177C22.8738 18.7115 22.705 19.499 23.0988 20.0615C23.3238 20.4552 23.7175 20.624 24.1675 20.624Z"
                    fill="black"
                  />
                </svg>
              </div>
              <h4 className="mb-4 text-2xl font-bold text-white">
                Connect everywhere
              </h4>
              <p className="text-dark-6 mb-8 text-lg lg:mb-9">
                Connect with the AI tool from anywhere, on any device, making it
                more accessible and convenient.
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
                <svg
                  className="scale-75"
                  width="37"
                  height="37"
                  viewBox="0 0 37 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.355 2.0614H5.21129C3.29879 2.0614 1.72379 3.6364 1.72379 5.5489V12.6927C1.72379 14.6052 3.29879 16.1802 5.21129 16.1802H12.355C14.2675 16.1802 15.8425 14.6052 15.8425 12.6927V5.60515C15.8988 3.6364 14.3238 2.0614 12.355 2.0614ZM13.3675 12.7489C13.3675 13.3114 12.9175 13.7614 12.355 13.7614H5.21129C4.64879 13.7614 4.19879 13.3114 4.19879 12.7489V5.60515C4.19879 5.04265 4.64879 4.59265 5.21129 4.59265H12.355C12.9175 4.59265 13.3675 5.04265 13.3675 5.60515V12.7489Z"
                    fill="black"
                  />
                  <path
                    d="M31.0863 2.0614H23.9425C22.03 2.0614 20.455 3.6364 20.455 5.5489V12.6927C20.455 14.6052 22.03 16.1802 23.9425 16.1802H31.0863C32.9988 16.1802 34.5738 14.6052 34.5738 12.6927V5.60515C34.5738 3.6364 32.9988 2.0614 31.0863 2.0614ZM32.0988 12.7489C32.0988 13.3114 31.6488 13.7614 31.0863 13.7614H23.9425C23.38 13.7614 22.93 13.3114 22.93 12.7489V5.60515C22.93 5.04265 23.38 4.59265 23.9425 4.59265H31.0863C31.6488 4.59265 32.0988 5.04265 32.0988 5.60515V12.7489Z"
                    fill="black"
                  />
                  <path
                    d="M12.355 20.0051H5.21129C3.29879 20.0051 1.72379 21.5801 1.72379 23.4926V30.6364C1.72379 32.5489 3.29879 34.1239 5.21129 34.1239H12.355C14.2675 34.1239 15.8425 32.5489 15.8425 30.6364V23.5489C15.8988 21.5801 14.3238 20.0051 12.355 20.0051ZM13.3675 30.6926C13.3675 31.2551 12.9175 31.7051 12.355 31.7051H5.21129C4.64879 31.7051 4.19879 31.2551 4.19879 30.6926V23.5489C4.19879 22.9864 4.64879 22.5364 5.21129 22.5364H12.355C12.9175 22.5364 13.3675 22.9864 13.3675 23.5489V30.6926Z"
                    fill="black"
                  />
                  <path
                    d="M31.0863 20.0051H23.9425C22.03 20.0051 20.455 21.5801 20.455 23.4926V30.6364C20.455 32.5489 22.03 34.1239 23.9425 34.1239H31.0863C32.9988 34.1239 34.5738 32.5489 34.5738 30.6364V23.5489C34.5738 21.5801 32.9988 20.0051 31.0863 20.0051ZM32.0988 30.6926C32.0988 31.2551 31.6488 31.7051 31.0863 31.7051H23.9425C23.38 31.7051 22.93 31.2551 22.93 30.6926V23.5489C22.93 22.9864 23.38 22.5364 23.9425 22.5364H31.0863C31.6488 22.5364 32.0988 22.9864 32.0988 23.5489V30.6926Z"
                    fill="black"
                  />
                </svg>
              </div>
              <h4 className="mb-4 text-2xl font-bold text-white">
                Create command
              </h4>
              <p className="text-dark-6 mb-8 text-lg lg:mb-9">
                Enables users to locate solutions to their inquiries without
                browsing numerous resources.
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
                <svg
                  className="scale-75"
                  width="37"
                  height="37"
                  viewBox="0 0 37 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.355 2.0614H5.21129C3.29879 2.0614 1.72379 3.6364 1.72379 5.5489V12.6927C1.72379 14.6052 3.29879 16.1802 5.21129 16.1802H12.355C14.2675 16.1802 15.8425 14.6052 15.8425 12.6927V5.60515C15.8988 3.6364 14.3238 2.0614 12.355 2.0614ZM13.3675 12.7489C13.3675 13.3114 12.9175 13.7614 12.355 13.7614H5.21129C4.64879 13.7614 4.19879 13.3114 4.19879 12.7489V5.60515C4.19879 5.04265 4.64879 4.59265 5.21129 4.59265H12.355C12.9175 4.59265 13.3675 5.04265 13.3675 5.60515V12.7489Z"
                    fill="black"
                  />
                  <path
                    d="M31.0863 2.0614H23.9425C22.03 2.0614 20.455 3.6364 20.455 5.5489V12.6927C20.455 14.6052 22.03 16.1802 23.9425 16.1802H31.0863C32.9988 16.1802 34.5738 14.6052 34.5738 12.6927V5.60515C34.5738 3.6364 32.9988 2.0614 31.0863 2.0614ZM32.0988 12.7489C32.0988 13.3114 31.6488 13.7614 31.0863 13.7614H23.9425C23.38 13.7614 22.93 13.3114 22.93 12.7489V5.60515C22.93 5.04265 23.38 4.59265 23.9425 4.59265H31.0863C31.6488 4.59265 32.0988 5.04265 32.0988 5.60515V12.7489Z"
                    fill="black"
                  />
                  <path
                    d="M12.355 20.0051H5.21129C3.29879 20.0051 1.72379 21.5801 1.72379 23.4926V30.6364C1.72379 32.5489 3.29879 34.1239 5.21129 34.1239H12.355C14.2675 34.1239 15.8425 32.5489 15.8425 30.6364V23.5489C15.8988 21.5801 14.3238 20.0051 12.355 20.0051ZM13.3675 30.6926C13.3675 31.2551 12.9175 31.7051 12.355 31.7051H5.21129C4.64879 31.7051 4.19879 31.2551 4.19879 30.6926V23.5489C4.19879 22.9864 4.64879 22.5364 5.21129 22.5364H12.355C12.9175 22.5364 13.3675 22.9864 13.3675 23.5489V30.6926Z"
                    fill="black"
                  />
                  <path
                    d="M31.0863 20.0051H23.9425C22.03 20.0051 20.455 21.5801 20.455 23.4926V30.6364C20.455 32.5489 22.03 34.1239 23.9425 34.1239H31.0863C32.9988 34.1239 34.5738 32.5489 34.5738 30.6364V23.5489C34.5738 21.5801 32.9988 20.0051 31.0863 20.0051ZM32.0988 30.6926C32.0988 31.2551 31.6488 31.7051 31.0863 31.7051H23.9425C23.38 31.7051 22.93 31.2551 22.93 30.6926V23.5489C22.93 22.9864 23.38 22.5364 23.9425 22.5364H31.0863C31.6488 22.5364 32.0988 22.9864 32.0988 23.5489V30.6926Z"
                    fill="black"
                  />
                </svg>
              </div>
              <h4 className="mb-4 text-2xl font-bold text-white">
                Improve everyday
              </h4>
              <p className="text-dark-6 mb-8 text-lg lg:mb-9">
                The app uses natural language processing to understand user
                queries and provide accurate and relevant responses.
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
                <svg
                  className="scale-75"
                  width="37"
                  height="37"
                  viewBox="0 0 37 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.355 2.0614H5.21129C3.29879 2.0614 1.72379 3.6364 1.72379 5.5489V12.6927C1.72379 14.6052 3.29879 16.1802 5.21129 16.1802H12.355C14.2675 16.1802 15.8425 14.6052 15.8425 12.6927V5.60515C15.8988 3.6364 14.3238 2.0614 12.355 2.0614ZM13.3675 12.7489C13.3675 13.3114 12.9175 13.7614 12.355 13.7614H5.21129C4.64879 13.7614 4.19879 13.3114 4.19879 12.7489V5.60515C4.19879 5.04265 4.64879 4.59265 5.21129 4.59265H12.355C12.9175 4.59265 13.3675 5.04265 13.3675 5.60515V12.7489Z"
                    fill="black"
                  />
                  <path
                    d="M31.0863 2.0614H23.9425C22.03 2.0614 20.455 3.6364 20.455 5.5489V12.6927C20.455 14.6052 22.03 16.1802 23.9425 16.1802H31.0863C32.9988 16.1802 34.5738 14.6052 34.5738 12.6927V5.60515C34.5738 3.6364 32.9988 2.0614 31.0863 2.0614ZM32.0988 12.7489C32.0988 13.3114 31.6488 13.7614 31.0863 13.7614H23.9425C23.38 13.7614 22.93 13.3114 22.93 12.7489V5.60515C22.93 5.04265 23.38 4.59265 23.9425 4.59265H31.0863C31.6488 4.59265 32.0988 5.04265 32.0988 5.60515V12.7489Z"
                    fill="black"
                  />
                  <path
                    d="M12.355 20.0051H5.21129C3.29879 20.0051 1.72379 21.5801 1.72379 23.4926V30.6364C1.72379 32.5489 3.29879 34.1239 5.21129 34.1239H12.355C14.2675 34.1239 15.8425 32.5489 15.8425 30.6364V23.5489C15.8988 21.5801 14.3238 20.0051 12.355 20.0051ZM13.3675 30.6926C13.3675 31.2551 12.9175 31.7051 12.355 31.7051H5.21129C4.64879 31.7051 4.19879 31.2551 4.19879 30.6926V23.5489C4.19879 22.9864 4.64879 22.5364 5.21129 22.5364H12.355C12.9175 22.5364 13.3675 22.9864 13.3675 23.5489V30.6926Z"
                    fill="black"
                  />
                  <path
                    d="M31.0863 20.0051H23.9425C22.03 20.0051 20.455 21.5801 20.455 23.4926V30.6364C20.455 32.5489 22.03 34.1239 23.9425 34.1239H31.0863C32.9988 34.1239 34.5738 32.5489 34.5738 30.6364V23.5489C34.5738 21.5801 32.9988 20.0051 31.0863 20.0051ZM32.0988 30.6926C32.0988 31.2551 31.6488 31.7051 31.0863 31.7051H23.9425C23.38 31.7051 22.93 31.2551 22.93 30.6926V23.5489C22.93 22.9864 23.38 22.5364 23.9425 22.5364H31.0863C31.6488 22.5364 32.0988 22.9864 32.0988 23.5489V30.6926Z"
                    fill="black"
                  />
                </svg>
              </div>
              <h4 className="mb-4 text-2xl font-bold text-white">
                Improve everyday
              </h4>
              <p className="text-dark-6 mb-8 text-lg lg:mb-9">
                The app uses natural language processing to understand user
                queries and provide accurate and relevant responses.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* relied on by organizations */}
      <div
        data-aos="fade"
        data-aos-duration="1500"
        className="flex w-full max-w-6xl flex-col items-center justify-center gap-10 py-8"
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
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Glowing
              color="#8ecffb"
              className="relative w-full rounded-xl p-6 px-8 py-10 sm:p-12 md:w-1/2 lg:w-1/3 lg:px-6 lg:py-10 xl:p-14"
            >
              <span className="mb-5 block rounded-full bg-white/10 px-6 py-2 text-xl font-medium text-white backdrop-blur-2xl">
                Starter
              </span>
              <h2 className="text-dark mb-4 text-4xl font-semibold dark:text-white xl:text-[42px] xl:leading-[1.21]">
                <span className="-ml-1 -tracking-[2px]">€ 15</span>
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
              <a
                href="javascript:void(0)"
                className="hover:bg-blue-dark inline-block rounded-md bg-[#fbc466] px-7 py-3 text-center text-base font-medium text-black transition"
              >
                Get started
              </a>
            </Glowing>

            <Glowing
              color="#8ecffb"
              className="relative w-full overflow-hidden rounded-xl p-6 px-8 py-10 sm:p-12 md:w-1/2 lg:w-1/3 lg:px-6 lg:py-10 xl:p-14"
            >
              <p className="recommended absolute right-[-50px] inline-block -rotate-90 rounded-bl-md rounded-tl-md px-5 py-2 text-base font-medium text-black">
                Recommended
              </p>
              <span className="mb-5 block rounded-full bg-white/10 px-6 py-2 text-xl font-medium text-white backdrop-blur-2xl">
                Business
              </span>
              <h2 className="text-dark mb-4 text-4xl font-semibold dark:text-white xl:text-[42px] xl:leading-[1.21]">
                <span className="-ml-1 -tracking-[2px]">€ 29</span>
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
              <a
                href="javascript:void(0)"
                className="hover:bg-blue-dark inline-block rounded-md bg-[#fbc466] px-7 py-3 text-center text-base font-medium text-black transition"
              >
                Get started
              </a>
            </Glowing>

            <div className="w-full p-6 md:w-1/2 lg:w-1/3"></div>
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
        <h1 className="text-center text-4xl font-bold">
          Community members opinions
        </h1>
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
