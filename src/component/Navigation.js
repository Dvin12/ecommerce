import { CiShoppingCart, CiUser } from "react-icons/ci";
function Navigation() {
  return (
    <nav className="bg-slate-200  p-12  w-auto">
      <section className="flex items-center justify-between mx-28">
        <h2 className="font-extrabold  text-transparent text-4xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 cursor-pointer">
          LOGO
        </h2>
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
          <span className="flex gap-4 text-4xl">
            <CiShoppingCart className="cursor-pointer"></CiShoppingCart>
            <CiUser className="cursor-pointer"></CiUser>
          </span>
        </div>
      </section>
    </nav>
  );
}

export default Navigation;
