import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Navigation from "./component/Navigation";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const Layout = () => {
  return (
    <div>
      <Navigation></Navigation>
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
