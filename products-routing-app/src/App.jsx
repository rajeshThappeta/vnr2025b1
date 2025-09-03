import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./components/RootLayout";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateProduct from "./components/CreateProduct";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";

function App() {
  //create router obj
  const routerObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "product",
          element: <CreateProduct />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "product/id",
          element: <ProductDetails />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routerObj} />;
}

export default App;
