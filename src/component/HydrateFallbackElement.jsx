import { cn } from "@/lib/utils";

const HydrateFallbackElement = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <div className="p-2 animate-spin dark:drop-shadow-2xl bg-linear-to-bl from-lime-400 via-green-400 to-green-600 md:w-20 md:h-20 h-12 w-12 aspect-square rounded-full">
        <div className="rounded-sm h-full w-full bg-white dark:bg-zinc-900 background-blur-md">
          <div className="grid grid-cols-2">
            <div className="p-1 animate-spin dark:drop-shadow-2xl bg-linear-to-bl from-lime-400 via-green-400 to-green-600 md:w-8 md:h-8 h-4 w-4 aspect-auto rounded-xs">
              <div className="rounded-xs h-full w-full bg-white dark:bg-zinc-900 background-blur-md"></div>
            </div>
            <div className="p-1 animate-spin dark:drop-shadow-2xl bg-linear-to-bl from-lime-400 via-green-400 to-green-600 md:w-8 md:h-8 h-4 w-4 aspect-auto rounded-xs">
              <div className="rounded-xs h-full w-full bg-white dark:bg-zinc-900 background-blur-md"></div>
            </div>
            <div className="p-1 animate-spin dark:drop-shadow-2xl bg-linear-to-bl from-lime-400 via-green-400 to-green-600 md:w-8 md:h-8 h-4 w-4 aspect-auto rounded-xs">
              <div className="rounded-xs h-full w-full bg-white dark:bg-zinc-900 background-blur-md"></div>
            </div>
            <div className="p-1 animate-spin dark:drop-shadow-2xl bg-linear-to-bl from-lime-400 via-green-400 to-green-600 md:w-8 md:h-8 h-4 w-4 aspect-auto rounded-xs">
              <div className="rounded-xs h-full w-full bg-white dark:bg-zinc-900 background-blur-md"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HydrateFallbackElement;
