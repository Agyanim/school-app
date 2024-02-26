import { SignInForm } from "@/components/client";
import Link from "next/link";
import React from "react";

const signInPage = () => {
  return (
    <main className="flex justify-center items-center w-screen h-[100dvh] flex-col">
      <h1 className="text-transparent bg-clip-text text-3xl bg-gradient-to-r from-orange-600 to-pink-600 font-extrabold">User Login</h1>
        <SignInForm />
        <p className="ml-[-10%]">
          Have no account yet?
          <span className="pl-2 italic text-orange-900 font-bold ">
            <Link className="hover:opacity-60 transition-all duration-90 " href="/signup">Create account</Link>
          </span>
        </p>
    </main>
  );
};

export default signInPage;
