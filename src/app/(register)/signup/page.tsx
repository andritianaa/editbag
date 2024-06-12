/* eslint-disable @next/next/no-img-element */

import type { PageParams } from "@/types/next";
import { NavBar } from "../../../components/common/NavBar";
import { Footer } from "../../../components/common/Footer";

export default async function RoutePage(props: PageParams<{}>) {
  return (
    <>
      <NavBar />
      <section className="relative py-10 sm:py-16 lg:py-24">
        <div className="absolute inset-0"></div>

        <div className="relative mx-auto max-w-lg px-4 sm:px-0">
          <div className="overflow-hidden rounded-md bg-[rgba(38,38,38,.6)] shadow-md">
            <div className="px-4 py-6 sm:px-8 sm:py-7">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white">
                  Create an account
                </h2>
                <p className="mt-2 text-base text-muted-foreground">
                  Already joined?{" "}
                  <a
                    href="/signin"
                    title=""
                    className="text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline"
                  >
                    Sign in now
                  </a>
                </p>
              </div>

              <form action="#" method="POST" className="mt-8">
                <div className="space-y-5">
                  <div>
                    <label className="text-base font-medium text-white">
                      {" "}
                      First & Last name{" "}
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Enter your full name"
                        className="border-gray- block w-full rounded-md border bg-[#1c1c1c] p-4 text-black placeholder-gray-500 caret-blue-600 transition-all duration-200 focus:border-blue-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-base font-medium text-white">
                      {" "}
                      Email address{" "}
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="email"
                        name=""
                        id=""
                        placeholder="Enter email to get started"
                        className="border-gray- block w-full rounded-md border bg-[#1c1c1c] p-4 text-black placeholder-gray-500 caret-blue-600 transition-all duration-200 focus:border-blue-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-base font-medium text-white">
                      {" "}
                      Password{" "}
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="password"
                        name=""
                        id=""
                        placeholder="Enter your password"
                        className="border-gray- block w-full rounded-md border bg-[#1c1c1c] p-4 text-black placeholder-gray-500 caret-blue-600 transition-all duration-200 focus:border-blue-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="pinkButton inline-flex w-full items-center justify-center rounded-md border border-transparent px-4 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-blue-700 focus:bg-blue-700 focus:outline-none"
                    >
                      Sign up
                    </button>
                  </div>

                  <div>
                    <button
                      type="button"
                      className="border-gray- relative inline-flex w-full items-center justify-center rounded-md border-2 bg-white px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                    >
                      <div className="absolute inset-y-0 left-0 p-4">
                        <svg
                          className="h-6 w-6 text-blue-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                        </svg>
                      </div>
                      Sign up with Google
                    </button>
                  </div>
                </div>
              </form>

              <p className="mx-auto mt-5 max-w-xs text-center text-sm text-muted-foreground">
                This site is protected by reCAPTCHA and the Google{" "}
                <a
                  href="#"
                  title=""
                  className="text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline"
                >
                  Privacy Policy
                </a>{" "}
                &
                <a
                  href="#"
                  title=""
                  className="text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline"
                >
                  Terms of Service
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
