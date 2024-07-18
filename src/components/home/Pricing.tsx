import { Check } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

const includedFeatures = [
  "Private forum access",
  "Access to the discord",
  "+ 300 beautiful reusable components",
  "Lifetime updates",
];

export default function Pricing() {
  return (
    <section className="bg-transparent py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center text-white">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Pricing & Plans
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis.
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 text-black sm:mt-16 sm:grid-cols-2">
          <Card className="rounded-md">
            <div className="p-6 md:px-9 md:py-10">
              <div className="inline-block rounded-full bg-gray-100/20 px-4 py-2">
                <h3 className="text-sm font-semibold text-white">Beginner</h3>
              </div>
              <p className="mt-5 text-5xl font-bold text-white">
                € 15{" "}
                <span className="text-sm font-medium text-muted-foreground">
                  Per month
                </span>
              </p>
              <p className="mt-2 text-sm font-bold text-muted-foreground">
                <span className="text-red-500">5</span> Total Monthly Downloads
              </p>

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

              <Button className="mt-4 w-full" size={"lg"}>
                Upgrade
              </Button>
            </div>
          </Card>

          <Card className="rounded-md border-4 border-[#ffffff]">
            <div className="p-6 md:px-9 md:py-10">
              <div className="inline-block rounded-full bg-gray-100/20 px-4 py-2">
                <h3 className="text-sm font-semibold text-white">Business</h3>
              </div>
              <p className="mt-5 text-5xl font-bold text-white">
                € 29{" "}
                <span className="text-sm font-medium text-muted-foreground">
                  Per month
                </span>
              </p>
              <p className="mt-2 text-sm font-bold text-muted-foreground">
                <span className="text-green-500">Unlimited</span> Downloads
              </p>

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

              <Button className="mt-4 w-full" size={"lg"}>
                Upgrade
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
