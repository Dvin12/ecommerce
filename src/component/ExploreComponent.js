import { Link } from "react-router-dom";
import { camera_header, laptop_header, lens_header } from "../assets/images";
import Buttons from "./Buttons";
import Newsletter from "./Newsletter";
function ExploreComponent() {
  return (
    <section className="h-fit w-fit bg-slate-200">
      <div className="mx-40  p-10 py-40 ">
        <article className="mb-20 grid grid-cols-2  ">
          <div className="flex items-center justify-center">
            <img
              src={laptop_header}
              className=" w-4/5 items-center drop-shadow-lg"
            ></img>
          </div>
          <div className="flex w-fit flex-col gap-4 ">
            <tag className="w-fit rounded  bg-indigo-300 px-4 py-2 text-sm drop-shadow-md">
              We Offer
            </tag>
            <h2 className="w-3/5 text-5xl font-semibold leading-[54px] tracking-wide text-gray-800 ">
              Awesome In Any Space. Perfectly Blend In Your Life.
            </h2>
            <p className=" w-2/3 text-lg leading-relaxed tracking-wide  text-gray-600 ">
              Designed to excel in any environment with its powerful performance
              and sleek design. Seamlessly integrating into your lifestyle, it
              effortlessly harmonizes productivity and style, making it the
              perfect companion for your everyday endeavors.
            </p>
            <div className="flex gap-8 py-4">
              <Link to="/products">
                <Buttons variant="buy" label="Buy Now"></Buttons>
              </Link>
            </div>
          </div>
        </article>
        <article className="mx-28 my-48 grid grid-cols-2 ">
          <div className="flex w-fit flex-col gap-4 ">
            <tag className="w-fit rounded bg-indigo-300 px-4 py-2 text-sm drop-shadow-md">
              We Offer
            </tag>
            <h2 className="w-3/4 text-5xl font-semibold leading-[54px] tracking-wide text-gray-800 ">
              Capture Life's Brilliance. Unleash Your Inner Photographer.
            </h2>
            <p className=" w-4/5 text-lg leading-relaxed tracking-wide  text-gray-600 ">
              Effortlessly capture the essence of life, empowering you to
              unleash your inner photographer and create stunning visuals that
              tell your unique story. With outstanding image quality and
              intuitive controls, it's the perfect companion for capturing and
              preserving unforgettable moments.
            </p>
            <div className="flex gap-8 py-4">
              <Link to="/products">
                <Buttons variant="buy" label="Buy Now"></Buttons>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img src={camera_header} className="w-3/5 drop-shadow-lg"></img>
          </div>
        </article>
        <article className="mx-28 mb-20">
          <Newsletter></Newsletter>
        </article>
      </div>
    </section>
  );
}

export default ExploreComponent;
