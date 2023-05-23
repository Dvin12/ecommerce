import { useSelector } from "react-redux";
import { camera_header, laptop_header, lens_header } from "../assets/images";
import Buttons from "./Buttons";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="h-fit bg-slate-200 p-6 xl:p-12 ">
      <section className="  mx-auto mt-40 flex  flex-col items-center justify-center gap-44 xl:mx-64 xl:my-28 xl:grid xl:grid-cols-2 xl:gap-0">
        <article className="order-last flex flex-col items-center  justify-center xl:order-none xl:items-start">
          <div className="">
            <h1 className="text-center text-5xl font-semibold text-indigo-400 xl:w-1/3 xl:text-start xl:text-8xl">
              Fast <span className="text-gray-800">and</span> Affordable
            </h1>
          </div>
          <div className="order-last my-16  flex flex-col items-center gap-5 xl:order-none">
            <Link to="/products">
              <Buttons variant="buy" label="Buy now"></Buttons>
            </Link>
            <Link to="/explore">
              <Buttons variant="learn" label="Learn More"></Buttons>
            </Link>
          </div>
        </article>
        <article className=" relative  flex w-full items-center justify-center">
          <img
            className="absolute left-1 top-[-10px] z-10  w-44 drop-shadow-2xl xl:left-14 xl:top-[-60px] xl:h-60 xl:w-72"
            src={camera_header}
          ></img>
          <img
            className="absolute h-60 w-80 drop-shadow-2xl xl:h-80 xl:w-80"
            src={laptop_header}
          ></img>
          <img
            className=" absolute right-[-20px] top-[-70px] w-48 drop-shadow-2xl xl:right-20 xl:top-[-100px] xl:h-60 xl:w-60"
            src={lens_header}
          ></img>
        </article>
      </section>
    </header>
  );
}

export default Header;
