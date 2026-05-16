import React, { useState } from "react";
import { BookShelfContext } from "./BookShelfContext";

const BookShelfProvider = ({children}) => {
  const [wishlist, wishlisted] = useState([]);
  const [read, readlisted] = useState([]);
  return (
    <BookShelfContext.Provider value={{ read, readlisted, wishlist, wishlisted }}>
      {children}
    </BookShelfContext.Provider>
  );
};

export default BookShelfProvider;
