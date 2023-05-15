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

const Layout = () => {
  return (
    <div>
      <Navigation></Navigation>
      <ScrollRestoration></ScrollRestoration>
      <Outlet></Outlet>
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
