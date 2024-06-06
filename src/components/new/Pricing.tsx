"use client";
import { Check } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export type PricingProps = {};

export const Pricing = (props: PricingProps) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      id="pricing"
      className="relative z-20 overflow-hidden bg-[#191919] pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span
                className="mb-2 block text-lg font-semibold text-[#fbc466]"
                data-aos="fade-up"
              >
                Pricing Table
              </span>
              <h2
                className="mb-3 text-3xl font-bold text-white sm:text-4xl md:text-[40px] md:leading-[1.2]"
                data-aos="fade-up"
              >
                Awesome Pricing Plan
              </h2>
              <p
                className="text-body-color dark:text-dark-6 text-base"
                data-aos="fade-up"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
                incidunt reprehenderit sequi.
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div
              data-aos="zoom-in-down"
              className="shadow-pricing relative z-10 mb-10 overflow-hidden rounded-xl bg-background px-8 py-10 sm:p-12 lg:px-6 lg:py-10 xl:p-14"
            >
              <span className="text-dark mb-5 block text-xl font-medium dark:text-white">
                Starter
              </span>
              <h2 className="text-dark mb-11 text-4xl font-semibold dark:text-white xl:text-[42px] xl:leading-[1.21]">
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
                    <Check color="#fbc466" />
                    <span className="text-base font-medium text-white">
                      {" "}
                      HD Footage & Photos{" "}
                    </span>
                  </li>
                  <li className="inline-flex items-center space-x-2">
                    <Check color="#fbc466" />
                    <span className="text-base font-medium text-white">
                      {" "}
                      Musics & sound Effects{" "}
                    </span>
                  </li>
                  <li className="inline-flex items-center space-x-2">
                    <Check color="#fbc466" />
                    <span className="text-base font-medium text-white">
                      {" Adobe's app templates "}
                    </span>
                  </li>
                  <li className="inline-flex items-center space-x-2">
                    <Check color="#fbc466" />
                    <span className="text-base font-medium text-white">
                      {" "}
                      Pack for video editing and thumbnails{" "}
                    </span>
                  </li>
                  <li className="inline-flex items-center space-x-2">
                    <Check color="#fbc466" />
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
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div
              data-aos="zoom-in-up"
              className="shadow-pricing relative z-10 mb-10 overflow-hidden rounded-xl border-4 border-[#fbc466] bg-background px-8 py-10 sm:p-12 lg:px-6 lg:py-10 xl:p-14"
            >
              <p className="absolute right-[-50px] inline-block -rotate-90 rounded-bl-md rounded-tl-md bg-[#fbc466] px-5 py-2 text-base font-medium text-black">
                Recommended
              </p>
              <span className="text-dark mb-5 block text-xl font-medium dark:text-white">
                Business
              </span>
              <h2 className="text-dark mb-11 text-4xl font-semibold dark:text-white xl:text-[42px] xl:leading-[1.21]">
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
                    <Check color="#fbc466" />
                    <span className="text-base font-medium text-white">
                      {" "}
                      HD Footage & Photos{" "}
                    </span>
                  </li>
                  <li className="inline-flex items-center space-x-2">
                    <Check color="#fbc466" />
                    <span className="text-base font-medium text-white">
                      {" "}
                      Musics & sound Effects{" "}
                    </span>
                  </li>
                  <li className="inline-flex items-center space-x-2">
                    <Check color="#fbc466" />
                    <span className="text-base font-medium text-white">
                      {" Adobe's app templates "}
                    </span>
                  </li>
                  <li className="inline-flex items-center space-x-2">
                    <Check color="#fbc466" />
                    <span className="text-base font-medium text-white">
                      {" "}
                      Pack for video editing and thumbnails{" "}
                    </span>
                  </li>
                  <li className="inline-flex items-center space-x-2">
                    <Check color="#fbc466" />
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
