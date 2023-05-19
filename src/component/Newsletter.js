function Newsletter() {
  return (
    <div className=" flex w-full flex-col items-center justify-center gap-6 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600  py-20 drop-shadow-lg">
      <div className="flex flex-col items-center justify-center gap-2">
        <h3 className="text-2xl font-medium text-white">
          Subscribe To Our Newsletter
        </h3>
        <p className="text-sm font-medium">
          Get notified whenever there's a sale or a new product line up!
        </p>
      </div>
      <div className="relative flex items-center justify-center">
        <input
          placeholder="Your email address"
          className="w-[700px] rounded-lg p-6"
        ></input>
        <button className="absolute right-4 rounded bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-3 text-white">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default Newsletter;
