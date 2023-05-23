function Newsletter() {
  return (
    <div className=" flex w-full flex-col items-center justify-center gap-6 rounded-2xl bg-gradient-to-r from-sky-300 to-blue-500  py-20 drop-shadow-lg">
      <div className="flex flex-col items-center justify-center gap-2">
        <h3 className="text-lg font-medium text-white xl:text-2xl">
          Subscribe To Our Newsletter
        </h3>
        <p className=" text-center text-xs font-medium xl:text-sm">
          Get notified whenever there's a sale or a new product line up!
        </p>
      </div>
      <div className="relative flex flex-col items-center justify-center gap-4">
        <input
          placeholder="Your email address"
          className="w-full rounded-lg p-3 xl:w-[700px] xl:p-6"
        ></input>
        <button className="right-4 rounded bg-gradient-to-r from-blue-700 to-blue-800 px-4 py-3 text-white xl:absolute">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default Newsletter;
