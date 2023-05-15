import { CiShoppingCart, CiUser } from "react-icons/ci";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navigation() {
  const productData = useSelector((state) => state.store.productData);
  console.log(productData);
  return (
    <nav className="bg-slate-200  p-12  w-auto sticky top-0 z-50 ">
      <section className="flex items-center justify-between mx-28">
        <Link
          to="/"
          className="font-extrabold  text-transparent text-4xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 cursor-pointer"
        >
          LOGO
        </Link>
        <ul className="flex gap-10 text-lg tracking-wide text-slate-800 ">
          <li className="cursor-pointer hover:text-indigo-600 duration-300">
            Products
          </li>
          <li className="cursor-pointer hover:text-indigo-600 duration-300">
            Explore
          </li>
          <li className="cursor-pointer hover:text-indigo-600 duration-300">
            Support
          </li>
          <li className="cursor-pointer hover:text-indigo-600 duration-300">
            About Us
          </li>
        </ul>
        <div>
          <span className="flex gap-4 text-4xl relative">
            <CiShoppingCart className="cursor-pointer "></CiShoppingCart>
            <span className="bg-indigo-400 rounded-full w-5 h-5 text-base absolute left-5 text-center text-white">
              {productData.length}
            </span>
            <CiUser className="cursor-pointer"></CiUser>
          </span>
        </div>
      </section>
    </nav>
  );
}

export default Navigation;
