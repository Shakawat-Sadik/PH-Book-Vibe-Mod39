import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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

  const theBook = bookProm?.filter((book) => book?.bookId === Number(par) && book);
  const [{ bookId: id, bookName: name, author, image, publisher, rating, review, tags, totalPages, yearOfPublishing }] =
    theBook ?? {};

  return (
    <div className="h-full w-full flex items-center">
      {/* <div className="relative flex flex-row items-center mx-auto h-full w-full max-w-sm pt-0 hover:scale-105 transition-all duration-300 outline-0">
        <div className="flex flex-col">
          <div
            className={`absolute inset-0 -z-10 aspect-video bg-zinc-300/35 dark:bg-linear-180 from-zinc-500 via-zinc-700 to-card border-none outline-0 ring-0`}
          />
          <img
            src={image}
            alt={`book cover of /"${name}/"`}
            className="relative z-20 aspect-video w-full object-contain brightness-60 grayscale dark:brightness-40 py-2 md:py-5 lg:py-8 border-none outline-0 ring-0"
          />
        </div>
        <CardHeader className="flex flex-col gap-2 md:gap-4">
          <CardAction className="flex gap-0.5">
            {tags.map((tag, index) => (
              <Badge key={tag + index} variant="secondary">
                {tag}
              </Badge>
            ))}
          </CardAction>
          <CardTitle>{name}</CardTitle>
          <CardContent>{author}</CardContent>
          <CardDescription className="h-20 overflow-clip hover:overflow-auto transition-all duration-300">
            {review}
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between">
          <p>{author}</p>
          <p className="flex items-center gap-1">
            <span className="">{rating}</span>{" "}
            <span className="">
              <FaRegStar />
            </span>
          </p>
        </CardFooter>
      </div> */}

      {/* <div>
        <Card className="flex flex-col md:flex-row gap-12 aspect-square">
        <div className="bg-background w-[50%] max-h-[80vh]">
          <img src={image} alt={`Book cover of ${name}`} className="object-cover m-6 md:m-12 lg:m-18" />
        </div>
            <CardHeader>
                <CardTitle className="h-fit">{name}</CardTitle>
            </CardHeader>
        </Card>
      </div> */}

      <Card className="w-full max-w-6xl mx-auto overflow-hidden rounded-2xl border-0 shadow-lg bg-white dark:bg-zinc-950">
        <CardContent className="grid p-0 md:grid-cols-[2fr,3fr]">
          {/* Left Column: Image Section */}
          <div className="flex items-center justify-center p-6 md:p-12 bg-zinc-300 dark:bg-zinc-700">
            <img
              src={image}
              alt={name}
              className="w-full h-auto max-w-[300px] object-contain rounded-sm shadow-2xl transition-transform hover:scale-105"
            />
          </div>

          {/* Right Column: Information Section */}
          <div className="flex flex-col gap-6 p-6 md:p-12 lg:p-16">
            <div className="space-y-2">
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">{name}</h1>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 font-medium">By : {author}</p>
            </div>

            <hr className="border-zinc-200 dark:border-zinc-800" />
            <p className="text-lg text-zinc-600 dark:text-zinc-400">{"Fiction"}</p>
            <hr className="border-zinc-200 dark:border-zinc-800" />

            <div className="space-y-3">
              <p className="font-bold text-zinc-900 dark:text-zinc-50">Review :</p>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{review}</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-bold text-zinc-900 dark:text-zinc-50">Tag</span>
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
              <span className="font-bold text-zinc-900 dark:text-zinc-50">{totalPages}</span>

              <span className="text-zinc-500">Publisher:</span>
              <span className="font-bold text-zinc-900 dark:text-zinc-50">{publisher}</span>

              <span className="text-zinc-500">Year of Publishing:</span>
              <span className="font-bold text-zinc-900 dark:text-zinc-50">{yearOfPublishing}</span>

              <span className="text-zinc-500">Rating:</span>
              <div className="flex items-center gap-1 font-bold text-zinc-900 dark:text-zinc-50">{rating}</div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-4">
              <Button variant="outline" className="px-8 py-6 text-lg border-zinc-300">
                Read
              </Button>
              <Button className="px-8 py-6 text-lg bg-[#3AB7C9] hover:bg-[#32a3b3] text-white">Wishlist</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookDetails;
