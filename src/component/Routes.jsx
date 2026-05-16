import React from 'react';
import { createBrowserRouter } from 'react-router';
import App from "../App.jsx";
import Root from "./Root";
import HydrateFallbackElement2 from "./Supporting_Components/HydrateFallbackElement2";
import ErrorPage from "./Supporting_Components/ErrorPage";
import GoBackOrHome from './Supporting_Components/GoBackOrHome';
import Homepage from './2_Homepage/Homepage.jsx';
import Bookshelf from './2_Homepage/2.2_Bookshelf/2.2_Bookshelf.jsx';
import BookDetails from './2_Homepage/2.2_Bookshelf/2.2.2_BookDetails/2.2.2_BookDetails.jsx';
import ListedBooks from './3_Listed_Books/3_Listed_Books.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    HydrateFallback: HydrateFallbackElement2,
    Component: Root,
    ErrorBoundary: ErrorPage,
    children: [
      {
        path: "*",
        Component: GoBackOrHome,
        ErrorBoundary: ErrorPage,
      },{
        path: "/",
        loader: async() => await fetch(`/booksData.json`),
        Component: Homepage,
        ErrorBoundary: ErrorPage,
      },
      {
        path: "App",
        Component: App,
        ErrorBoundary: ErrorPage,
      },
      {
        path: "Books",
        loader: async() => await fetch(`/booksData.json`),
        Component: Bookshelf,
        ErrorBoundary: ErrorPage,
      },
      {
        path: "Books/:id",
        loader: async() =>  await fetch(`/booksData.json`),
        Component: BookDetails,
        ErrorBoundary: ErrorPage,
      },
      {
        path: "ListedBooks",
        Component: ListedBooks,
        ErrorBoundary: ErrorPage,

      }
    ],
  },
]);

export default router;