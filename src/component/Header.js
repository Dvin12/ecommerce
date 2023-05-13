function Header() {
  return (
    <header className="bg-slate-200 p-12 h-screen">
      <section className="mx-28 my-28  grid grid-cols-2 items-center justify-center">
        <article className="flex flex-col  justify-center">
          <div className="w-1">
            <h1 className="text-8xl font-semibold text-indigo-400">
              Fast <span className="text-gray-800">and</span> Affordable
            </h1>
          </div>
          <div className="flex gap-8 my-14">
            <button className=" bg-indigo-500 py-5 px-11 rounded-lg text-white font-medium text-xl tracking-wider hover:bg-indigo-600 transition-all duration-300">
              Buy Now
            </button>
            <button className=" text-gray-600 font-semibold text-md  underline decoration-2 underline-offset-[6px] hover:text-gray-900 duration-300">
              Learn More
            </button>
          </div>
        </article>
        <article className="flex relative w-full items-center justify-center">
          <img
            className="w-96 h-96 absolute z-10 left-14 top-[-140px] drop-shadow-2xl"
            src="./assets/camera_header.png"
          ></img>
          <img
            className="w-96 h-96 absolute drop-shadow-2xl"
            src="./assets/laptop_header.png"
          ></img>
          <img
            className="w-96 h-96 absolute right-5 drop-shadow-2xl"
            src="./assets/lens_header.png"
          ></img>
        </article>
      </section>
    </header>
  );
}

export default Header;
