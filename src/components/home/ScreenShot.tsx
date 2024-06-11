/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Image from "next/image";
import { Layout } from "../layout/Layout";

export function ScreenShot() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <Layout className="flex h-[60vh] scale-50 items-center justify-center text-center md:scale-75 lg:scale-100">
            <p className="customTitle flex flex-col text-white">
              <span className="flex justify-center">
                <img src="/emoji/dice.png" alt="" className="size-14" />
                <span>
                  Every<span className="text-[#fbc466]">thing</span> you
                </span>
                <img src="/emoji/finger.png" alt="" className="size-14" />
              </span>
              <span className="flex justify-center gap-2">
                <img src="/emoji/target.png" alt="" className="size-14" />
                <span>
                  need <span className="text-[#96ddf2]">for</span> stunning
                </span>
                <img src="/emoji/sparkles.png" alt="" className="size-14" />
              </span>
              <span className="flex items-end justify-center gap-1">
                <img src="/emoji/movie.png" alt="" className="size-14" />
                <span>
                  video <span className="text-[#7ed957]">creations</span>
                </span>
                <img
                  src="/emoji/Laptop.png"
                  alt=""
                  className="size-14 rotate-12"
                />
              </span>
            </p>
          </Layout>
        }
      >
        <Image
          src={`/screenshot.avif`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto h-full rounded-2xl object-cover object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
