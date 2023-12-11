
"use client"

import React from "react";
import { toast } from "sonner";

const Notify = () => {
  return (
    <div className="flex justify-center items-center h-full text-white mt-[25%]">
      <button
        onClick={() =>toast.info("Notification")}
        className="px-5 py-2 bg-blue-600 rounded"
      >
        Notify me
      </button>
    </div>
  );
};
export default Notify;
