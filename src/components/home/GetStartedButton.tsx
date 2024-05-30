"use client"
import Link from "next/link";
import { SigninBtn } from "../../features/auth/SigninBtn";

export type GetStartedButtonProps = {
  isAuthenticated: boolean;
};

export const GetStartedButton = (props: GetStartedButtonProps) => {
  if (props.isAuthenticated) {
    return (
      <Link
        className="bg-blue-600 hover:bg-blue-700 flex justify-center items-center px-4 py-2 rounded-lg transition text-white shadow-md"
        href="/hackathon/registration"
      >
        Participer au hackathon
      </Link>
    );
    
  } else {
    return <SigninBtn/>
  }
};
