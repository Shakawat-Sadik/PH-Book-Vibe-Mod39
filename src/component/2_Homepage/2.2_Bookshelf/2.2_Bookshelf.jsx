import React from 'react';
import { useLoaderData } from 'react-router';
import Book from './2.2.1_Book';
import { cn } from '@/lib/utils';


const Bookshelf = ({className}) => {
    const books = useLoaderData();
    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 my-15", className)}>
            {
                books.map(bookData =>
                    <Book key={bookData?.bookId} bookData={bookData}/>
                )
            }
        </div>
    );
};

export default Bookshelf;