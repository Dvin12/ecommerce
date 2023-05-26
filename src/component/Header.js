import { useSelector } from "react-redux";
import { camera_header, laptop_header, lens_header } from "../assets/images";
import Buttons from "./Buttons";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="h-full bg-slate-200 px-6 py-20 md:h-screen md:py-20 xl:p-4 ">
      <section className="  mx-auto mt-40 flex  flex-col items-center justify-center gap-40 xl:mx-40 xl:my-44 xl:grid xl:grid-cols-2 xl:gap-0 ">
        <article className="order-last flex flex-col items-center  justify-center xl:order-none xl:items-start">
          <h1 className="text-center text-5xl font-semibold text-indigo-400  sm:w-2/4 md:mt-10 md:w-3/6 md:text-6xl xl:w-2/4 xl:text-start xl:text-8xl  ">
            Fast <span className="text-gray-800">and</span> Affordable
          </h1>

          <aside className="order-last my-14 flex flex-col  items-center gap-4 sm:mt-8 md:my-20 xl:order-none xl:my-10 xl:flex-row">
            <Link to="/products">
              <Buttons variant="buy" label="Buy now"></Buttons>
            </Link>
            <Link to="/explore">
              <Buttons variant="learn" label="Learn More"></Buttons>
            </Link>
          </aside>
        </article>
        <figure className=" relative  flex w-[350px]  items-center justify-center sm:w-[700px] md:w-[720px] xl:w-[800px] xl:transform">
          <img
            className="absolute left-1 top-[-10px] z-10 w-44 drop-shadow-2xl sm:left-40  md:left-28 md:top-[-40px] md:w-64 xl:left-10 xl:top-[-40px]  xl:w-[340px] "
            src={camera_header}
            alt="camera image"
          ></img>
          <img
            className="md: absolute h-60 w-80 drop-shadow-2xl md:h-auto md:w-3/5 xl:w-[650px] "
            src={laptop_header}
            alt="laptop image"
          ></img>
          <img
            className=" absolute right-[-20px] top-[-70px] w-48 scale-100 drop-shadow-2xl sm:right-40 md:right-[120px] md:top-[-100px] md:w-60 xl:right-12  xl:top-[-120px] xl:w-[320px] "
            src={lens_header}
            alt="camera lense image"
          ></img>
        </figure>
      </section>
    </header>
  );
}

export default Header;
