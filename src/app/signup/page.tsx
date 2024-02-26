import { SignUpForm } from "@/components/client";
import Link from "next/link";
import React from "react";

const SingUpPage = () => {
  return (
    <main className="flex justify-center items-center w-screen flex-col h-[100dvh]">
      <h1 className="text-transparent bg-clip-text text-3xl font-extrabold bg-gradient-to-r from-orange-600 to-pink-600">SignUp</h1>
      <SignUpForm />
      <p className="ml-[-13%]">
        Already have an account?
        <span className="pl-2 italic text-orange-900 font-bold">
          <Link className="hover:opacity-60 transition-all duration-90" href="/signin">signin</Link>
        </span>
      </p>
    </main>
  );
};

export default SingUpPage;
