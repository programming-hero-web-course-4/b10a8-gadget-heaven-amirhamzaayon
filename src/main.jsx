import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import ProductDetails from "./Components/Products/ProductDetails";
import ErrorPage from "./Components/ErrorPage";
import Dashboard from "./Components/Dashboard/Dashboard";
import Carts from "./Components/Dashboard/Carts";
import Wishlists from "./Components/Dashboard/Wishlists";
import { Ontheway } from "./Components/Ontheway";
import Products from "./Components/Products/Products";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "Home",
        element: <Home></Home>,
        children: [
          {
            path: ":id",
            element: <Products></Products>,
          },
        ],
      },
      {
        path: "ProductDetails",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "Ontheway",
        element: <Ontheway></Ontheway>,
      },
      {
        path: "Dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "Carts",
            element: <Carts></Carts>,
          },
          {
            path: "Whislists",
            element: <Wishlists></Wishlists>,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>
);
