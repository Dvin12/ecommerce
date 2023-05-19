import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Navigation from "./component/Navigation";
import Product from "./component/Product";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { productData } from "./api/Api";
import Login from "./pages/Login";
import Footer from "./component/Footer";
import Products from "./pages/Products";
import Explore from "./pages/Explore";
import Support from "./pages/Support";
import AboutUs from "./pages/AboutUs";

const Layout = () => {
  return (
    <div>
      <Navigation></Navigation>
      <ScrollRestoration></ScrollRestoration>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: productData,
      },
      {
        path: "/product/:id",
        element: <Product></Product>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },

      {
        path: "/explore",
        element: <Explore></Explore>,
      },

      {
        path: "/support",
        element: <Support></Support>,
      },

      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
    ],
  },
]);

function App() {
  return (
    <div className="font-body">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
