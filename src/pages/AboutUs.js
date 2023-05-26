import MapComponent from "../component/MapComponent";

function AboutUs() {
  return (
    <main className="bg-slate-200">
      <section className="h-full p-5 py-10 sm:p-6 md:p-8 xl:mx-28 xl:p-20">
        <div className="flex flex-col gap-8">
          <article className="flex flex-col items-center justify-center gap-8">
            <h2 className="text-4xl font-semibold text-indigo-400 xl:text-5xl">
              About Us
            </h2>
            <p className="text-justify">
              Your go-to destination in Dallas for cutting-edge technology
              catering to filmmakers, photographers, and video editors. We offer
              a curated selection of high-performance laptops and
              professional-grade cameras, along with repair and maintenance
              services, ensuring your equipment stays in top shape. With
              worldwide shipping available, we are here to help you bring your
              creative vision to life.
            </p>
          </article>

          <figure className="h-[500px] w-full  md:mb-4 xl:mt-3 xl:h-[400px]">
            <MapComponent></MapComponent>
          </figure>
        </div>
      </section>
    </main>
  );
}

export default AboutUs;
