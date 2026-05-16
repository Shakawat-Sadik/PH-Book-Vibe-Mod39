import { Button } from "@/components/ui/button";
import { BookOpen, Heart, Users, Fingerprint, Star } from "lucide-react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLoaderData, useParams } from "react-router";
import { useContext } from "react";
import { BookShelfContext } from "../../../ContextAPI/BookShelfContext";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

const BookTag = ({ label, icon: Icon }) => (
  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/50 px-3 py-1 text-sm font-medium text-emerald-800 dark:text-emerald-300">
    {Icon && <Icon className="h-4 w-4" />}
    {label}
  </span>
);

const BookDetails = () => {
  const { id: par } = useParams(),
    bookProm = useLoaderData();

  const getTagIcon = (tagLabel) => {
    if (tagLabel.toLowerCase().includes("adult")) return Users;
    if (tagLabel.toLowerCase().includes("identity")) return Fingerprint;
    return Star; // Fallback icon
  };

  /**
         let theBook = bookProm?.filter((book) => book?.bookId === Number(par) && book);
        const [{ bookName: name, author, image, publisher, rating, review, tags, totalPages, yearOfPublishing }] =
            theBook ?? {};

        const { read, readlisted, wishlist, wishlisted } = useContext(BookShelfContext);

        const handleList = (x) => {
            const newBook = theBook[0];
            const wishFilter = wishlist.filter((w) => w?.bookId !== newBook?.bookId);
            const readFilter = read.filter((r) => r?.bookId !== newBook?.bookId);

            x === "read" ? readlisted([...readFilter, newBook]) : readlisted([...readFilter]);
            x === "wish" ? wishlisted([...wishFilter, newBook]) : wishlisted([...wishFilter]);
        };
   */

  let theBook = bookProm?.find((book) => book?.bookId === Number(par) && book);
  const {
    bookId: id,
    bookName: name,
    author,
    image,
    publisher,
    rating,
    review,
    tags,
    totalPages,
    yearOfPublishing,
  } = theBook ?? {};

  const { read, readlisted, wishlist, wishlisted } = useContext(BookShelfContext);

  const handleList = (type) => {
    const listConfig = {
      read: {
        list: read,
        setList: readlisted,
        name: "read list",
      },
      wish: {
        list: wishlist,
        setList: wishlisted,
        name: "wish list",
      },
    };

    const { list, setList, name } = listConfig[type];

    Object.keys(listConfig).forEach(
      (key) => key !== type && listConfig[key].setList(listConfig[key].list.filter((boi) => boi?.bookId !== id)),
    );

    list.some((boi) => boi?.bookId === id)
      ? toast.warning(`Already been added to ${name}`, {
          description: `${new Date().toLocaleDateString("en-UK", { hour: "numeric", minute: "2-digit", second: "2-digit", hour12: true }).toLowerCase()}`,
          action: {
            label: "Hide",
            onClick: () => null,
          },
          actionButtonStyle: {
            backgroundColor: "#000",
            color: "#fff",
            borderRadius: "4px",
          },
        })
      : (setList([...list, theBook]), toast.success(`Added to your ${name}`));
  };

  //   const handleList = (x) => {
  //     if (x === "read") {
  //       read.some((readThisBook) => readThisBook?.bookId === id) //.find() returns an object/undefined, not a boolean - so I needed to use .some() to check existence
  //         ? toast.warning("Already been added to read list")
  //         : readlisted([...read, theBook]);
  //     }

  //     if (x === "wish") {
  //       wishlist.some((wishThisBook) => wishThisBook?.bookId === id) //.find() returns an object/undefined, not a boolean - you should use .some() to check existence
  //         ? toast.warning("Already been added to wish list")
  //         : wishlisted([...wishlist, theBook]) && toast.success("Added to your wish list");
  //     }

  // const wishFilter = wishlist.filter((w) => w?.bookId !== id);
  // const readFilter = read.filter((r) => r?.bookId !== id);

  // x === "read" ? readlisted([...readFilter, theBook]) : readlisted([...readFilter]);
  // x === "wish" ? wishlisted([...wishFilter, theBook]) : wishlisted([...wishFilter]);

  // wishlist.find(w => w?.bookId === id) && toast.warning("Already been added to read list");
  // read.find(r => r?.bookId === id) && toast.warning("Already been added to read list");
  //   };

  console.log(read);
  console.log(wishlist);
  console.log(Date());

  return (
    <div className="h-full w-full flex items-center">
      <Card className="w-full max-w-screen mx-auto overflow-hidden rounded-2xl border-0 shadow-lg bg-white dark:bg-background">
        <CardContent className="grid p-0 grid-cols-[2fr,3fr] lg:grid-cols-[4fr_5fr]">
          {/* Left Column: Image Section */}
          <div className="flex items-center justify-center p-6 md:p-12 bg-linear-180 lg:bg-linear-90 from-zinc-300 to-background dark:bg-linear-180 dark:lg:bg-linear-90 dark:from-zinc-700 dark:to-background">
            <img
              src={image}
              alt={name}
              className="w-full h-auto max-w-75 object-contain rounded-sm shadow-2xl transition-transform hover:scale-105"
            />
          </div>

          {/* Right Column: Information Section */}
          {/* <div className="flex flex-col gap-6 p-6 md:p-12 lg:p-16"></div> */}
          <div className="flex flex-col gap-6 p-6 md:p-12 lg:p-16">
            <div className="space-y-2">
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">{name}</h1>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 font-medium">By : {author}</p>
            </div>

            <hr className="border-zinc-200 dark:border-zinc-800" />
            <p className="text-lg text-zinc-600 dark:text-zinc-400">{"Fiction"}</p>
            <hr className="border-zinc-200 dark:border-zinc-800" />

            <div className="space-y-3">
              <p className="font-bold">Review :</p>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{review}</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-bold">Tag</span>
              <div className="flex gap-2 flex-wrap">
                {tags?.map((tag, index) => (
                  <BookTag key={index} label={tag} icon={getTagIcon(tag)} />
                ))}
              </div>
            </div>

            <hr className="border-zinc-200 dark:border-zinc-800" />
            {/* Stats Grid */}
            <div className="grid grid-cols-[160px_1fr] gap-y-3 text-sm md:text-base">
              <span className="text-zinc-500">Number of Pages:</span>
              <span className="font-bold">{totalPages}</span>

              <span className="text-zinc-500">Publisher:</span>
              <span className="font-bold">{publisher}</span>

              <span className="text-zinc-500">Year of Publishing:</span>
              <span className="font-bold">{yearOfPublishing}</span>

              <span className="text-zinc-500">Rating:</span>
              <div className="flex items-center gap-1 font-bold">{rating}</div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-4">
              <Button
                id="read"
                onClick={() => handleList("read")}
                variant="outline"
                className="px-8 py-6 text-lg border-zinc-300"
              >
                Read
              </Button>
              <Button
                id="wishlist"
                onClick={() => handleList("wish")}
                className="px-8 py-6 text-lg hover:bg-[#32a3b3] text-white transition-all duration-300"
              >
                Wishlist
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookDetails;

//   const [listed, setListed] = useState({read: [], wishlist: []});

//   const handleListed = (type) => {
//     const newBook = theBook [0];
//     setListed(prev => {prev[type].filter(t => t?.bookId !== newBook?.bookId}))
//   }
