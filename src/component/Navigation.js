import { CiShoppingCart, CiUser } from "react-icons/ci";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navigation() {
  const productData = useSelector((state) => state.store.productData);
  console.log(productData);
  return (
    <nav className="bg-slate-200  p-12  w-auto sticky top-0 z-50 ">
      <section className="flex items-center justify-between mx-64">
        <Link
          to="/"
          className="font-extrabold text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 "
        >
          LapLens
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
            <Link to="/cart">
              <CiShoppingCart className="cursor-pointer "></CiShoppingCart>
              <span className="bg-indigo-400 rounded-full w-5 h-5 text-base absolute left-5 top-0 text-center text-white">
                {productData.length}
              </span>
            </Link>
            <Link to="/login">
              <CiUser className="cursor-pointer"></CiUser>
            </Link>
          </span>
        </div>
      </section>
    </nav>
  );
}

export default Navigation;
