import { useContext } from "react";
import { BookShelfContext } from "../ContextAPI/BookShelfContext";
import { DirectionAwareTabs } from "@/components/ui/direction-aware-tabs";
import { cn } from "@/lib/utils";
import Listed_Books_Cards from "./3.2_Listed_Books_Cards";

const CultTabs = ({className}) => {

  const { read, wishlist } = useContext(BookShelfContext);
  const all = [...read, ...wishlist];
  console.log(all);
  console.log(read);
  console.log(wishlist);
  const tabs = [
    {
      id: 0,
      label: "Books read already",
      content: (
        <div className="border border-black/10 w-full flex flex-col items-center h-full flex-1 p-4 rounded-lg gap-3">
          {read.length > 0 ? read.map((readThisBook) => <Listed_Books_Cards keys={`read${readThisBook?.bookId}`} listing={readThisBook}></Listed_Books_Cards>) : <div className="flex flex-col items-center h-full text-4xl font-extrabold">No Book Listed here</div> }
        </div>
      ),
    },
    {
      id: 1,
      label: "Books planned to read",
      content: (
        <div className="border border-black/10 w-full flex flex-col items-center p-4 rounded-lg gap-3">
          {wishlist?.length > 0 ? wishlist.map((wishlistThisBook) => <Listed_Books_Cards keys={`wish${wishlistThisBook?.bookId}`} listing={wishlistThisBook}></Listed_Books_Cards>) : <div className="flex flex-col items-center h-full text-4xl font-extrabold">No Book Listed here</div>}
        </div>
      ),
    },
    {
      id: 2,
      label: "default",
      content: (
        <div className="border border-black/10 w-full flex flex-col items-center gap-3 p-4">
          {all.length > 0 ? all.map((allThisBook) => <Listed_Books_Cards keys={`all${allThisBook?.bookId}`} listing={allThisBook}></Listed_Books_Cards>) : <div className="flex flex-col items-center h-full text-4xl font-extrabold">No Book Listed here</div>}
        </div>
      ),
    }
  ];

  return (
    <div className={cn("", className)}>
      <DirectionAwareTabs tabs={tabs}/>
    </div>
  );
};

export default CultTabs;
