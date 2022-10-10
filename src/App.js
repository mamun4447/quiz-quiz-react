import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blogs from "./components/Blogs";
import ErrorPage from "./components/ErorrPage";
import Home from "./components/Home";
import Main from "./components/Main";
import Statistics from "./components/Statistics";
import Topics from "./components/Topics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/topics",
        element: <Topics />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
