import { createBrowserRouter } from "react-router-dom";
import Blogs from "./Blogs";
import ErrorPage from "./ErorrPage";
import Home from "./Home";
import Main from "./Main";
import Quiz from "./Quizs";
import Statistics from "./Statistics";
import Topics from "./Topics";

export const router = createBrowserRouter([
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
        path: "/home",
        element: <Home />,
      },
      {
        path: "/topics",
        element: <Topics />,
      },
      {
        path: "/topics/:id",
        element: <Quiz />,
        loader: ({ params }) =>
          fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
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
