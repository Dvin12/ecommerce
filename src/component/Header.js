import { useSelector } from "react-redux";
import { camera_header, laptop_header, lens_header } from "../assets/images";
import Buttons from "./Buttons";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="h-full bg-slate-200 px-6 py-20 md:h-screen md:py-60 xl:p-4 ">
      <section className="  mx-auto mt-40 flex  flex-col items-center justify-center gap-44 xl:mx-40 xl:my-44 xl:grid xl:grid-cols-2 xl:gap-0 ">
        <article className="order-last flex flex-col items-center  justify-center xl:order-none xl:items-start">
          <h1 className="text-center text-5xl font-semibold text-indigo-400  md:text-6xl xl:w-2/4 xl:text-start xl:text-8xl  ">
            Fast <span className="text-gray-800">and</span> Affordable
          </h1>

          <div className="order-last my-4 flex  flex-col items-center gap-5 md:my-40 xl:order-none xl:my-10 xl:flex-row">
            <Link to="/products">
              <Buttons variant="buy" label="Buy now"></Buttons>
            </Link>
            <Link to="/explore">
              <Buttons variant="learn" label="Learn More"></Buttons>
            </Link>
          </div>
        </article>
        <article className=" relative  flex w-full items-center justify-center xl:scale-100 xl:transform">
          <img
            className="absolute left-1 top-[-10px] z-10 w-44 drop-shadow-2xl  md:left-28 md:top-[-40px] md:w-64 xl:left-10 xl:top-[-40px]  xl:w-[340px] "
            src={camera_header}
          ></img>
          <img
            className="md: absolute h-60 w-80 drop-shadow-2xl md:h-auto md:w-3/5 xl:w-[650px] "
            src={laptop_header}
          ></img>
          <img
            className=" absolute right-[-20px] top-[-70px] w-48 scale-100 drop-shadow-2xl md:right-[120px] md:top-[-100px] md:w-60 xl:right-12  xl:top-[-120px] xl:w-[320px] "
            src={lens_header}
          ></img>
        </article>
      </section>
    </header>
  );
}

export default Header;
