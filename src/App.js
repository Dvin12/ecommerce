import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";

import Navigation from "./component/Navigation";
import Home from "./pages/Home";

function App() {
  return (
    <div className="font-body">
      <Navigation></Navigation>
      <Home></Home>
    </div>
  );
}

export default App;
