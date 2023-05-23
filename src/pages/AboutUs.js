import MapComponent from "../component/MapComponent";

function AboutUs() {
  return (
    <section className="bg-slate-200">
      <div className="p-12 xl:mx-48 xl:p-28">
        <div className="flex flex-col gap-8">
          <article className="flex flex-col items-center justify-center gap-8">
            <h2 className="text-4xl font-semibold text-indigo-500">About Us</h2>
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

          <article className="h-[500px] w-fit xl:h-[300px]">
            <MapComponent></MapComponent>
          </article>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
