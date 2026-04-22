import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router";

const num = (min, max) => {
  // +1 makes the 'max' inclusive
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const Book = ({ bookData }) => {
    const nav = useNavigate();
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
  } = bookData ?? {};

  return (
    <div>
      <Card className="relative mx-auto w-full max-w-sm pt-0 hover:scale-105 transition-all duration-300 outline-0">
        <div
          className={`absolute inset-0 z-10 aspect-video bg-zinc-300/35 dark:bg-linear-180 from-zinc-500 via-zinc-700 to-card border-none outline-0 ring-0`}
        />
        <img
          src={image}
          alt={`book cover of /"${name}/"`}
          className="relative z-20 aspect-video w-full object-contain brightness-60 grayscale dark:brightness-40 py-2 md:py-5 lg:py-8 border-none outline-0 ring-0"
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
          <Button className="w-full">View Event</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Book;
