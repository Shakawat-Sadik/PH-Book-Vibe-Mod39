import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import HydrateFallbackElement from "./component/HydrateFallbackElement";
import Root from "./component/Root";
import { RouterProvider } from "react-router";
import ErrorPage from "./component/ErrorPage";
import GoBackOrHome from "./component/GoBackOrHome";
import HydrateFallbackElement2 from "./component/HydrateFallbackElement2";

const router = createBrowserRouter([
  {
    path: "/",
    HydrateFallback: HydrateFallbackElement2,
    Component: Root,
    ErrorBoundary: ErrorPage,
    children: [
      {
        path: "App",
        Component: App,

      }
    ]
  },
  {
    path: "*",
    Component: GoBackOrHome,
    ErrorBoundary: ErrorPage,
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
