import { SignInForm } from "@/components/client";
import Link from "next/link";
import React from "react";

const signInPage = () => {
  return (
    <main className="flex justify-center items-center w-screen h-[100vh] flex-col">
        <SignInForm />
        <p className="ml-[-10%]">
          Have no account yet?
          <span className="pl-2 italic text-orange-900 font-bold">
            <Link href="/signup">Create account</Link>
          </span>
        </p>
    </main>
  );
};

export default signInPage;
