import Link from "next/link";

export const SigninBtn = () => {
  return (
    <Link href="/signin">
      <button className="pinkButton justify-centerh-12 relative flex h-10 items-center overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <p className="px-6">Sign in</p>
      </button>
    </Link>
  );
};
