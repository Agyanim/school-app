import { SignUpForm } from "@/components/client";
import Link from "next/link";
import React from "react";

const SingUpPage = () => {
  return (
    <main className="flex justify-center items-center w-screen flex-col h-[100vh]">
      <SignUpForm />
      <p className="ml-[-13%]">
        Already have an account?
        <span className="pl-2 italic text-orange-900 font-bold">
          <Link href="/signin">signin</Link>
        </span>
      </p>
    </main>
  );
};

export default SingUpPage;
