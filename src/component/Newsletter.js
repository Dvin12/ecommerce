function Newsletter() {
  return (
    <article className=" flex  flex-col items-center justify-center gap-6 rounded-2xl bg-gradient-to-r from-sky-300 to-blue-500 px-2 py-20 drop-shadow-lg md:py-8  xl:py-24">
      <section className="flex flex-col items-center justify-center gap-2">
        <h3 className="text-lg font-medium text-white xl:text-3xl">
          Subscribe To Our Newsletter
        </h3>
        <p className=" text-center text-xs font-medium xl:text-lg">
          Get notified whenever there's a sale or a new product line up!
        </p>
      </section>
      <section className=" relative flex flex-col items-center justify-center gap-8">
        <input
          placeholder="Your email address"
          className="w-full rounded-lg p-4 md:w-[700px] xl:w-[800px] xl:p-6"
        ></input>
        <button className="rounded bg-gradient-to-r from-blue-700 to-blue-800 px-3  py-3 text-white md:absolute md:right-2 md:py-2 xl:right-3 xl:p-3">
          Subscribe
        </button>
      </section>
    </article>
  );
}

export default Newsletter;
