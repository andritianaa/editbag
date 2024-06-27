"use client";

import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Input from "./Input";

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const session = useSession();
  const router = useRouter();
  const [variant, setVariant] = useState<Variant>("REGISTER");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/products");
    }
  }, [session?.status, router]);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else setVariant("LOGIN");
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === "REGISTER") {
      axios
        .post("/api/register", data)
        .then(() => signIn("credentials", data))
        .catch(() => toast.error("Something went wrong !"))
        .finally(() => setIsLoading(false));
    }
    if (variant === "LOGIN") {
      signIn("credentials", {
        ...data,
        redirect: false,
      })
        .then((callback) => {
          if (callback?.error) {
            toast.error("Invalid Credentials");
          }
          if (callback?.ok && !callback?.error) {
            toast.success("Logged in !");
            router.push("/products");
          }
        })
        .finally(() => setIsLoading(false));
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);

    signIn(action, { redirect: false })
      .then((callback) => {
        if (callback?.error) {
          toast.error("Invalid Credentials");
        }
        if (callback?.ok && !callback?.error) {
          toast.success("Logged in !");
        }
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="relative mx-auto max-w-lg px-4 sm:px-0">
      <div className="overflow-hidden rounded-md bg-[rgba(38,38,38,.6)] shadow-md">
        <div className="px-4 py-6 sm:px-8 sm:py-7">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">
              {variant === "LOGIN" ? "Welcome back" : "Create an account"}
            </h2>
            <p className="mt-2 text-base text-muted-foreground">
              {variant === "LOGIN"
                ? "Does not have account ?"
                : "Already joined ?"}
              <span
                onClick={toggleVariant}
                className="ml-2 cursor-pointer text-[#ffbb80] transition-all duration-200 hover:text-[#d89459] hover:underline"
              >
                {variant === "LOGIN" ? "Create an account" : "Login"}
              </span>
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
            <div className="space-y-5">
              {variant === "REGISTER" && (
                <Input
                  id="name"
                  label="Your name"
                  placeholder="Enter your name"
                  register={register}
                  errors={errors}
                />
              )}
              <Input
                id="email"
                label="Email address"
                type="email"
                register={register}
                errors={errors}
                placeholder="Enter your email"
                disabled={isLoading}
              />
              <Input
                id="password"
                label="Password"
                type="password"
                placeholder="Enter your password"
                register={register}
                errors={errors}
                disabled={isLoading}
              />

              <div>
                <button
                  disabled={isLoading}
                  type="submit"
                  className="pinkButton inline-flex w-full items-center justify-center rounded-md border border-transparent px-4 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-blue-700 focus:bg-blue-700 focus:outline-none"
                >
                  {variant === "LOGIN" ? "Sign in" : "Create account"}
                </button>
              </div>

              <div>
                <button
                  onClick={() => socialAction("google")}
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
                  Sign in with Google
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
  );
};
export default AuthForm;
