function Buttons({ variant, label }) {
  let buttonClasses = "";

  if (variant === "buy") {
    buttonClasses +=
      "rounded-lg bg-indigo-500 px-11 py-5 text-xl font-medium tracking-wider text-white drop-shadow-lg transition-all duration-300 hover:bg-indigo-600";
  } else if (variant === "learn") {
    buttonClasses +=
      "text-md font-semibold text-gray-600  underline decoration-2 underline-offset-[6px] duration-300 hover:text-gray-900";
  } else if (variant === "send") {
    buttonClasses +=
      "rounded-lg bg-indigo-500 px-4 py-4 text-xl  tracking-wider text-white drop-shadow-lg transition-all duration-300 hover:bg-indigo-600";
  }

  return <button className={buttonClasses}>{label}</button>;
}

export default Buttons;
