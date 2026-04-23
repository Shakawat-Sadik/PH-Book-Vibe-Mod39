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
        Component: Homepage
      },
      {
        path: "App",
        Component: App,
      },
      {
        path: "Books",
        loader: async() => await fetch(`/booksData.json`),
        Component: Bookshelf,
      },
      {
        path: "Books/:id",
        loader: async() =>  await fetch(`/booksData.json`),
        Component: BookDetails,
      },
    ],
  },
]);

export default router;