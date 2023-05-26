import { Link } from "react-router-dom";
import { camera_header, laptop_header, } from "../assets/images";
import Buttons from "./Buttons";
import Newsletter from "./Newsletter";
function ExploreComponent() {
  return (
    <section className=" bg-slate-200 ">
      <div className="px-4 py-20 md:mx-8   xl:mx-20 ">
        <section className="mb-20 flex flex-col xl:grid xl:grid-cols-2  ">
          <figure className="flex items-center justify-center">
            <img
              src={laptop_header}
              className=" w-full items-center drop-shadow-lg sm:w-2/3 md:w-4/6 xl:w-4/5" alt="laptop"
            ></img>
          </figure>
          <article className="flex  flex-col items-center gap-2 py-4 xl:items-start ">
            <tag className="rounded  bg-indigo-300 px-2 py-2 text-sm text-black drop-shadow-lg">
              We Offer
            </tag>
            <h2 className=" py-4 text-center text-3xl font-semibold tracking-wide text-gray-800 xl:w-3/5 xl:text-start xl:text-5xl xl:leading-[54px] ">
              Awesome In Any Space. Perfectly Blend In Your Life.
            </h2>
            <p className=" text-justify text-lg leading-relaxed tracking-wider text-gray-600  xl:w-2/3 xl:text-start ">
              Designed to excel in any environment with its powerful performance
              and sleek design. Seamlessly integrating into your lifestyle, it
              effortlessly harmonizes productivity and style, making it the
              perfect companion for your everyday endeavors.
            </p>
            <aside className="flex  py-8">
              <Link to="/products">
                <Buttons variant="buy" label="Buy Now"></Buttons>
              </Link>
            </aside>
          </article>
        </section>
        <section className="mx-auto flex  flex-col   xl:mx-28 xl:grid xl:grid-cols-2 ">
          <article className=" order-1 my-8 flex    flex-col items-center justify-center gap-4 xl:order-none xl:items-start">
            <tag className=" rounded bg-indigo-300 px-4 py-2 text-sm drop-shadow-md">
              We Offer
            </tag>
            <h2 className=" py-3 text-center text-3xl font-semibold tracking-wide text-gray-800 xl:w-5/6 xl:text-start xl:text-5xl xl:leading-[54px] ">
              Capture Life's Brilliance. Unleash Your Inner Photographer.
            </h2>
            <p className=" py-2 text-justify text-lg leading-relaxed tracking-wider text-gray-600  xl:w-4/5 ">
              Effortlessly capture the essence of life, empowering you to
              unleash your inner photographer and create stunning visuals that
              tell your unique story. With outstanding image quality and
              intuitive controls, it's the perfect companion for capturing and
              preserving unforgettable moments.
            </p>
            <aside className="flex  py-8">
              <Link to="/products">
                <Buttons variant="buy" label="Buy Now"></Buttons>
              </Link>
            </aside>
          </article>
          <figure className=" flex  items-center justify-center">
            <img
              src={camera_header}
              className="w-3/5 drop-shadow-lg md:w-2/5" alt="camera"
            ></img>
          </figure>
        </section>
        <article className="md:mb-12 xl:mx-28 xl:my-20 ">
          <Newsletter></Newsletter>
        </article>
      </div>
    </section>
  );
}

export default ExploreComponent;
