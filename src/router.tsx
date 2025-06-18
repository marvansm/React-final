import { createBrowserRouter } from "react-router";
import HomePage from "./Featured/Pages/Home/Page/Home";
import Layout from "./Layout";
import ShopPage from "./Featured/Pages/Shop/Page/shop";
import ErrorPage from "./Featured/Pages/404/error";
import Login from "./Featured/Pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
