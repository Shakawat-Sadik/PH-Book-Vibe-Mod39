import { cn } from "@/lib/utils";
import React from "react";

const HydrateFallbackElement2 = ({ className }) => {
  return (
    <div className="flex justify-center items-center h-screen bg-white dark:bg-black">
      <div className={cn("animate-none", className)}>
        <div className="animate-bounce grid grid-cols-2">
          <div className="p-1 animate-(--spin-1) dark:drop-shadow-2xl bg-linear-to-bl from-white to-black md:w-8 md:h-8 h-4 w-4 aspect-auto rounded-xs">
            <div className="rounded-xs h-full w-full bg-white dark:bg-zinc-900 background-blur-md"></div>
          </div>
          <div className="p-1 animate-spin dark:drop-shadow-2xl bg-linear-to-bl from-lime-400 via-green-400 to-green-600 md:w-8 md:h-8 h-4 w-4 aspect-auto rounded-xs">
            <div className="rounded-xs h-full w-full bg-white dark:bg-zinc-900 background-blur-md"></div>
          </div>
          <div className="p-1 animate-spin dark:drop-shadow-2xl bg-linear-to-bl from-cyan-400 via-sky-900 to-sky-600 md:w-8 md:h-8 h-4 w-4 aspect-auto rounded-xs">
            <div className="rounded-xs h-full w-full bg-white dark:bg-zinc-900 background-blur-md"></div>
          </div>
          <div className="p-1 animate-(--spin-1) dark:drop-shadow-2xl bg-linear-to-bl from-white to-black md:w-8 md:h-8 h-4 w-4 aspect-auto rounded-xs">
            <div className="rounded-xs h-full w-full bg-white dark:bg-zinc-900 background-blur-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HydrateFallbackElement2;
