import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React, { Suspense } from "react";
import book from "../../../assets/Book.png";

const Line = ({ className = "" }) => (
  <div
    className={cn(
      "h-px w-full via-zinc-400 from-10% from-background/0 to-zinc-600 absolute z-0 dark:via-zinc-700 dark:from-zinc-900/0 dark:to-90% dark:to-zinc-500",
      className,
    )}
  />
);
const Lines = () => (
  <>
    <Line className="bg-linear-to-l left-0 top-2 sm:top-4 md:top-6 z-30" />
    <Line className="bg-linear-to-r bottom-2 sm:bottom-4 md:bottom-6 left-0 z-10" />

    <Line className="w-px bg-linear-to-b left-2 sm:left-4 md:left-6 h-full inset-y-0 z-20" />
    <Line className="w-px bg-linear-to-t right-2 sm:right-4 md:right-6 h-full inset-y-0" />
    {/* <Line className="w-px  dark:bg-zinc-500/50 right-2 sm:right-4 md:right-6 h-[10%] inset-y-0 z-50" /> */}
  </>
);

const HeroCard = () => {
  return (
    <div className="px-4 md:px-8 md:16 lg:32 py-3 md:py-7 lg:py-13">
      <Card className="relative h-[70vh] w-[85vw] bg-radial from-background via-zinc-300 to-background dark:from-zinc-800 dark:via-none dark:to-zinc-900 object-contain ring-0 px-10 md:px-25 lg:px-45 py-5 md:py-10 lg:py-20">
        <Lines />
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-10 lg:gap-0 my-auto lg:my-0">
          <div className="flex justify-start items-center lg:items-start flex-col gap-4 md:gap-8 lg:gap-12">
            <CardTitle className="text-center lg:text-left text-2xl md:text-4xl lg:text-6xl font-semibold md:font-bold w-[35vw]">
              Books to freshen up your bookshelf
            </CardTitle>
            <Button size="xl" className="w-fit px-7 py-5">
              View The List
            </Button>
          </div>
          <div className="flex-1 flex justify-end items-center">
            <div className="w-48 h-64 md:w-64 md:h-80 lg:w-80 lg:h-112 rounded-lg overflow-hidden shadow-lg border-y-3 border-zinc-200 dark:border-zinc-700 bg-white flex items-center justify-center">
              <Suspense fallback={<span>Loading...</span>}>
                <img src={book} alt="Book Cover" className="object-cover lg:object-contain w-full h-full" />
              </Suspense>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default HeroCard;
