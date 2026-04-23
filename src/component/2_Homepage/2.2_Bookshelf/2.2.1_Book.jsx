import { Badge } from "@/components/ui/badge";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router";
import { FaRegStar } from 'react-icons/fa';

// const num = (min, max) => {
//   // +1 makes the 'max' inclusive
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// };

const Book = ({ bookData }) => {
  const {
    bookId: id,
    bookName: name,
    author,
    image,
    rating,
    review,
    tags
  } = bookData ?? {};

  return (
    <Link to={`/Books/${id}`}>
      <Card className="relative mx-auto w-full max-w-sm pt-0 hover:scale-105 transition-all duration-300">
        <div
          className={`absolute inset-0 z-10 aspect-video bg-zinc-300/35 dark:bg-linear-180 from-zinc-500 via-zinc-700 to-card`}
        />
        <img
          src={image}
          alt={`book cover of /"${name}/"`}
          className="relative z-20 aspect-video w-full object-contain brightness-60 grayscale dark:brightness-40 py-2 md:py-5 lg:py-8"
        />
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
          <p className="flex items-center gap-1"><span className="">{rating}</span> <span className=""><FaRegStar /></span></p>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default Book;
