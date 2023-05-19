import { useSelector } from "react-redux";
import { camera_header, laptop_header, lens_header } from "../assets/images";
import Buttons from "./Buttons";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="h-screen bg-slate-200 p-12">
      <section className="mx-64 my-28  grid grid-cols-2 items-center justify-center">
        <article className="flex flex-col  justify-center">
          <div className="w-1">
            <h1 className="text-8xl font-semibold text-indigo-400">
              Fast <span className="text-gray-800">and</span> Affordable
            </h1>
          </div>
          <div className="my-14  flex items-center gap-8">
            <Link to="/products">
              <Buttons variant="buy" label="Buy now"></Buttons>
            </Link>
            <Link to="/explore">
              <Buttons variant="learn" label="Learn More"></Buttons>
            </Link>
          </div>
        </article>
        <article className="relative flex w-full items-center justify-center">
          <img
            className="absolute left-14 top-[-60px] z-10 h-60 w-72 drop-shadow-2xl"
            src={camera_header}
          ></img>
          <img
            className="absolute h-80 w-80 drop-shadow-2xl"
            src={laptop_header}
          ></img>
          <img
            className="absolute right-20 top-[-100px] h-60 w-60 drop-shadow-2xl"
            src={lens_header}
          ></img>
        </article>
      </section>
    </header>
  );
}

export default Header;
