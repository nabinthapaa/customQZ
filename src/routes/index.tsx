import { lazy } from "react";
import { createBrowserRouter } from "react-router";

const Home = lazy(() => import("@/pages/Home"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const CreateQuiz = lazy(() => import("@/pages/CreateQuiz"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/create-quiz",
    element: <CreateQuiz />,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);
