import { camera_header, laptop_header, lens_header } from "../assets/images";

function Explore() {
  return (
    <section className="bg-slate-200 p-12 w-fit h-fit  ">
      <article className="grid grid-cols-2 p-28 ">
        <img src={laptop_header} className="w-4/5 drop-shadow-lg"></img>
        <div className="flex flex-col w-fit gap-6 ">
          <tag className="bg-indigo-200 w-fit py-2 px-3 rounded text-sm">
            We Offer
          </tag>
          <h2 className="text-5xl w-3/5 font-semibold tracking-wide leading-[54px] text-gray-800 ">
            Awesome In Any Space. Perfectly Blend In Your Life.
          </h2>
          <p className=" text-lg w-2/3 tracking-wide leading-relaxed  text-gray-600 ">
            Designed to excel in any environment with its powerful performance
            and sleek design. Seamlessly integrating into your lifestyle, it
            effortlessly harmonizes productivity and style, making it the
            perfect companion for your everyday endeavors.
          </p>
        </div>
      </article>
      <article className="grid grid-cols-2 p-28 ">
        <div className="flex flex-col w-fit gap-6 ">
          <tag className="bg-indigo-200 w-fit py-2 px-3 rounded text-sm">
            We Offer
          </tag>
          <h2 className="text-5xl w-3/5 font-semibold tracking-wide leading-[54px] text-gray-800 ">
            Capture Life's Brilliance. Unleash Your Inner Photographer.
          </h2>
          <p className=" text-lg w-2/3 tracking-wide leading-relaxed  text-gray-600 ">
            Effortlessly capture the essence of life, empowering you to unleash
            your inner photographer and create stunning visuals that tell your
            unique story. With outstanding image quality and intuitive controls,
            it's the perfect companion for capturing and preserving
            unforgettable moments.
          </p>
        </div>
        <img src={camera_header} className="w-4/5 drop-shadow-lg"></img>
      </article>

      <article className="px-28">
        <div className="bg-gradient-to-r from-sky-400 to-blue-500 p-20 w-full flex flex-col gap-6 items-center justify-center rounded-2xl mb-14 drop-shadow-lg">
          <h3 className="text-2xl font-medium text-white">
            Subscribe To Our Newsletter
          </h3>
          <div className="relative flex items-center justify-center">
            <input
              placeholder="Your email address"
              className="p-6 w-[700px] rounded-lg"
            ></input>
            <button className="absolute right-4 bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-3 rounded text-white">
              Subscribe
            </button>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Explore;
