import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Listed_Books_Cards = ({ listing }) => {
  const {
    bookId: id,
    bookName: name,
    author,
    category,
    image,
    publisher,
    rating,
    review,
    tags,
    totalPages,
    yearOfPublishing,
  } = listing ?? {};
  return (
    <Card className="bg-background/80 grid grid-cols-[2fr_5fr] items-center w-full bg-linear-90 from-zinc-300 dark:from-zinc-800 via-background via-30% to-zinc-300 dark:to-zinc-800 p-0 rounded-lg m-3 md:m-6">
      <CardContent className="w-[20vw] h-[20vw] flex justify-center items-center rounded-l-lg m-3 md:m-6"><img src={image} alt={name} className="h-full px-6 md:px-12 py-3 md:py-6"/></CardContent>
      <div className="flex flex-col justify-center flex-1 h-full">
        <CardHeader>
            <CardTitle className="text-2xl font-bold shadow-xs">{name}</CardTitle>
        </CardHeader>
        <CardDescription className="p-4">By {author}</CardDescription>
        Card
      </div>
    </Card>
  );
};

export default Listed_Books_Cards;
