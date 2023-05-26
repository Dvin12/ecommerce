import { useState } from "react";
import {
  CiShoppingCart,
  CiUser,
  CiMenuBurger,
  CiMenuFries,
} from "react-icons/ci";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const productData = useSelector((state) => state.store.productData);
  return (
    <nav className="sticky top-0  z-50  bg-slate-200 p-4 drop-shadow-lg md:p-6 ">
      <section className="relative mx-auto flex  select-none flex-col items-start sm:mx-2 xl:mx-40 xl:flex-row xl:items-center xl:justify-between">
        <Link
          to="/"
          className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-2xl font-extrabold text-transparent md:text-3xl xl:text-4xl   "
        >
          LapLens
        </Link>
        <ul
          className={`my-4 flex flex-col items-start gap-6 text-lg tracking-wider text-slate-800 transition-all duration-300 md:text-xl xl:my-6 xl:flex-row xl:items-center xl:gap-20 xl:text-xl ${
            isOpen ? "hidden" : ""
          }  xl:flex`}
        >
          <Link to="/products">
            <li className=" duration-300 hover:text-indigo-600">
              <a>Products</a>
            </li>
          </Link>
          <Link to="/explore">
            <li className=" duration-300 hover:text-indigo-600">
              <a>Explore</a>
            </li>
          </Link>
          <Link to="/support">
            <li className=" duration-300 hover:text-indigo-600">
              <a>Support</a>
            </li>
          </Link>
          <Link to="/about-us">
            <li className=" duration-300 hover:text-indigo-600">
              <a>About Us</a>
            </li>
          </Link>
        </ul>
        <section className="absolute right-0 xl:relative">
          <aside className="relative flex gap-4 text-3xl xl:text-4xl">
            <Link to="/cart">
              <CiShoppingCart className="cursor-pointer "></CiShoppingCart>
              <span className="absolute left-5 top-0 h-5 w-5 rounded-full bg-indigo-400 text-center text-sm text-white">
                {productData.length}
              </span>
            </Link>
            <Link to="/login">
              <CiUser className="cursor-pointer"></CiUser>
            </Link>
            <span
              className="cursor-pointer xl:hidden"
              onClick={handleMenuToggle}
            >
              {isOpen ? <CiMenuBurger /> : <CiMenuFries />}
            </span>
          </aside>
        </section>
      </section>
    </nav>
  );
}

export default Navigation;
