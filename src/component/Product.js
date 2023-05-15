import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";

function Product() {
  const [details, setDetails] = useState({});
  const location = useLocation();
  useEffect(() => {
    setDetails(location.state.item);
  }, []);
  return (
    <div className="bg-slate-200 h-screen">
      <article className="grid grid-cols-2 items-center p-28  w-fit ">
        <section className="flex items-center justify-center">
          <img className="w-[600px] drop-shadow-lg" src={details.image}></img>
        </section>
        <section>
          <h2 className="text-4xl py-1">{details.name}</h2>
          <span className="text-xl text-gray-500">{details.brand}</span>
          <h3 className="text-3xl my-2 font-semibold">${details.price}</h3>
          <p className="my-10 text-lg w-4/5">{details.description}</p>
          <div className="flex gap-12">
            <div className="border-2 rounded-md border-slate-700 w-[160px] p-2 flex items-center justify-center gap-4">
              <span>Quantity</span>
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
            <button className="bg-indigo-500 w-[160px] rounded-md text-white hover:bg-indigo-600 duration-300 drop-shadow-lg">
              Add To Cart
            </button>
          </div>
          <Link to="/">
            <div className="my-10">
              <button className="text-gray-500 font-medium hover:text-gray-800 duration-300 flex items-center">
                <HiArrowNarrowLeft className="text-lg "></HiArrowNarrowLeft>
                Go Back
              </button>
            </div>
          </Link>
        </section>
      </article>
    </div>
  );
}

export default Product;
