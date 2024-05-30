import type { PageParams } from "@/types/next";
import Link from "next/link";
import { Input } from "@/components/ui/input";

export default async function RoutePage(props: PageParams<{}>) {
    return (
      <form>
      <div className="lg:max-w-lg lg:mx-auto lg:me-0 ms-auto">
        <div className="p-4 sm:p-7 flex flex-col card  shadow-lg ">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Start for free
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
              Already have an account?
              <a
                className="text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500 ml-2"
                href="#"
              >
                Sign in here
              </a>
            </p>
          </div>

          <div className="mt-5">
            <button
              type="button"
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border- shadow-sm  disabled:opacity-50 disabled:pointer-events-none bg-background"
            >
              <svg
                className="w-4 h-auto"
                width="46"
                height="47"
                viewBox="0 0 46 47"
                fill="none"
              >
                <path
                  d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                  fill="#4285F4"
                ></path>
                <path
                  d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                  fill="#34A853"
                ></path>
                <path
                  d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                  fill="#FBBC05"
                ></path>
                <path
                  d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                  fill="#EB4335"
                ></path>
              </svg>
              Sign up with Google
            </button>

            <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-700 dark:after:border-neutral-700">
              Or
            </div>

            <div className="grid  gap-4">
              <Input
                type="text"
                placeholder="John Doe"
                label="Full Name"
                />
              <Input
                type="email"
                placeholder="you@email.com"
                label="Email"
              />

              <div className="relative col-span-full">
                <Input
                  type="password"
                  placeholder="********"
                  label="New password"
                />
                <div className="hidden absolute z-10 w-full bg-gray-100 rounded-lg p-4 dark:bg-neutral-950">
                  <div
                    data-hs-strong-password='{
                "target": "#hs-hero-signup-form-floating-input-new-password",
                "hints": "#hs-strong-password-popover",
                "stripclassNamees": "hs-strong-password:opacity-100 hs-strong-password-accepted:bg-teal-500 h-2 flex-auto rounded-full bg-blue-500 opacity-50 mx-1",
                "mode": "popover"
              }'
                    className="flex mt-2 -mx-1"
                  ></div>

                  <h4 className="mt-3 text-sm font-semibold text-gray-800 dark:text-white">
                    Your password must contain:
                  </h4>

                  <ul className="space-y-1 text-sm text-gray-500 dark:text-neutral-500">
                    <li
                      data-hs-strong-password-hints-rule-text="min-length"
                      className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2"
                    >
                      <span className="hidden" data-check>
                        <svg
                          className="flex-shrink-0 size-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span data-uncheck>
                        <svg
                          className="flex-shrink-0 size-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 6 6 18" />
                          <path d="m6 6 12 12" />
                        </svg>
                      </span>
                      Minimum number of characters is 6.
                    </li>
                    <li
                      data-hs-strong-password-hints-rule-text="lowercase"
                      className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2"
                    >
                      <span className="hidden" data-check>
                        <svg
                          className="flex-shrink-0 size-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span data-uncheck>
                        <svg
                          className="flex-shrink-0 size-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 6 6 18" />
                          <path d="m6 6 12 12" />
                        </svg>
                      </span>
                      Should contain lowercase.
                    </li>
                    <li
                      data-hs-strong-password-hints-rule-text="uppercase"
                      className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2"
                    >
                      <span className="hidden" data-check>
                        <svg
                          className="flex-shrink-0 size-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span data-uncheck>
                        <svg
                          className="flex-shrink-0 size-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 6 6 18" />
                          <path d="m6 6 12 12" />
                        </svg>
                      </span>
                      Should contain uppercase.
                    </li>
                    <li
                      data-hs-strong-password-hints-rule-text="numbers"
                      className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2"
                    >
                      <span className="hidden" data-check>
                        <svg
                          className="flex-shrink-0 size-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span data-uncheck>
                        <svg
                          className="flex-shrink-0 size-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 6 6 18" />
                          <path d="m6 6 12 12" />
                        </svg>
                      </span>
                      Should contain numbers.
                    </li>
                    <li
                      data-hs-strong-password-hints-rule-text="special-characters"
                      className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2"
                    >
                      <span className="hidden" data-check>
                        <svg
                          className="flex-shrink-0 size-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span data-uncheck>
                        <svg
                          className="flex-shrink-0 size-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 6 6 18" />
                          <path d="m6 6 12 12" />
                        </svg>
                      </span>
                      Should contain special characters.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-span-full">
                <Input
                  type="password"
                  placeholder="********"
                  label="Current password"
                />
              </div>
            </div>

            <div className="mt-5 flex items-center">
              <div className="flex">
                <Input
                  name="remember-me"
                  type="checkbox"
                  className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                />
              </div>
              <div className="ms-3">
                <Link href={"/terms"}>Terms and Conditions</Link>
              </div>
            </div>

            <div className="mt-5">
              <button
                type="submit"
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
      );
}