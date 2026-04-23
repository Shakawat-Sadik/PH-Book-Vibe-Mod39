import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyTitle } from "@/components/ui/empty";
import { HomeIcon, CompassIcon } from "lucide-react";

export default function GoBackOrHome() {
  const nav = useNavigate();
  return (
    <div className="relative flex min-h-full w-full items-center justify-center overflow-hidden">
      <Empty>
        <EmptyHeader>
          <EmptyTitle className="mask-b-from-20% mask-b-to-80% font-extrabold text-9xl">404</EmptyTitle>
          <EmptyDescription className="-mt-8 text-nowrap text-foreground/80">
            The page you're looking for might have been <br />
            moved or doesn't exist.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <div className="flex gap-2">
            <Button onClick={() => nav("/")} asChild>
              <div className="inline-flex">
                <HomeIcon data-icon="inline-start" />
                Go Home
              </div>
            </Button>

            <Button onClick={() => nav(-1)} asChild variant="outline">
              <div className="inline-flex">
                <CompassIcon data-icon="inline-start" /> Go Back
              </div>
            </Button>
          </div>
        </EmptyContent>
      </Empty>
    </div>
  );
}
