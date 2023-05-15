import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

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
          <img className="w-[600px]" src={details.image}></img>
        </section>
        <section>
          <h2 className="text-4xl py-1">{details.name}</h2>
          <span className="text-xl text-gray-500">{details.brand}</span>
          <h3 className="text-3xl my-2 font-semibold">${details.price}</h3>
          <p className="my-10 text-lg w-4/5">{details.description}</p>
          <div className="flex">
            <div className="border-1">
              <span>Quantity</span>
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
            <button>Add To Cart</button>
          </div>
        </section>
      </article>
    </div>
  );
}

export default Product;
