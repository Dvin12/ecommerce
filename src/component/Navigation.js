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
    <nav className="sticky  top-0  z-50 w-auto bg-slate-200 p-12 drop-shadow-lg ">
      <section className="relative mx-auto  flex select-none flex-col items-start xl:mx-64 xl:flex-row xl:items-center xl:justify-between">
        <Link
          to="/"
          className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-4xl font-extrabold text-transparent "
        >
          LapLens
        </Link>
        <ul
          className={`my-8 flex  flex-col gap-10 text-lg tracking-wide text-slate-800 transition-all duration-300 xl:flex-row ${
            isOpen ? "hidden" : ""
          }`}
        >
          <Link to="/products">
            <li className="cursor-pointer duration-300 hover:text-indigo-600">
              Products
            </li>
          </Link>
          <Link to="/explore">
            <li className="cursor-pointer duration-300 hover:text-indigo-600">
              Explore
            </li>
          </Link>
          <Link to="/support">
            <li className="cursor-pointer duration-300 hover:text-indigo-600">
              Support
            </li>
          </Link>
          <Link to="/about-us">
            <li className="cursor-pointer duration-300 hover:text-indigo-600">
              About Us
            </li>
          </Link>
        </ul>
        <div className="absolute right-0 xl:relative">
          <span className="relative flex gap-4 text-4xl">
            <Link to="/cart">
              <CiShoppingCart className="cursor-pointer "></CiShoppingCart>
              <span className="absolute left-5 top-0 h-5 w-5 rounded-full bg-indigo-400 text-center text-base text-white">
                {productData.length}
              </span>
            </Link>
            <Link to="/login">
              <CiUser className="cursor-pointer"></CiUser>
            </Link>
            <div className="cursor-pointer" onClick={handleMenuToggle}>
              {isOpen ? <CiMenuFries /> : <CiMenuBurger />}
            </div>
          </span>
        </div>
      </section>
    </nav>
  );
}

export default Navigation;
