import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/storeSlice";
import { ToastContainer, toast } from "react-toastify";

function Product() {
  const dispatch = useDispatch();
  const [details, setDetails] = useState({});
  let [baseQnty, setBaseQnty] = useState(1);

  const location = useLocation();
  useEffect(() => {
    setDetails(location.state.item);
  }, []);

  const handleDecrease = () => {
    setBaseQnty(baseQnty === 1 ? (baseQnty = 1) : baseQnty - 1);
  };

  const handleIncrease = () => {
    setBaseQnty(baseQnty + 1);
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: details.id,
        name: details.name,
        brand: details.brand,
        price: details.price,
        quantity: baseQnty,
        image: details.image,
        description: details.description,
      })
    ) && toast.success(`${details.name} is added to the cart!`);
  };

  return (
    <div className="bg-slate-200 xl:h-screen">
      <article className="flex flex-col items-center p-6 xl:grid xl:w-fit xl:grid-cols-2  xl:p-28 ">
        <section className="flex items-center justify-center">
          <img
            className="drop-shadow-lg xl:w-[600px]"
            src={details.image}
          ></img>
        </section>
        <section className="flex flex-col ">
          <h2 className="py-2 text-center text-4xl">{details.name}</h2>
          <span className=" text-center text-xl text-gray-500">
            {details.brand}
          </span>
          <h3 className="my-2 text-center text-3xl font-semibold">
            ${details.price}
          </h3>
          <p className="text-justify text-lg xl:my-10 xl:w-4/5">
            {details.description}
          </p>
          <div className="flex flex-col items-center justify-center gap-4 py-10 xl:gap-12">
            <div className="flex items-center justify-between gap-3 rounded-md border-2 border-slate-700 px-10 py-3 xl:w-[180px] xl:gap-4 ">
              <span>Quantity</span>
              <button onClick={handleDecrease}>-</button>
              <span>{baseQnty}</span>
              <button onClick={handleIncrease}>+</button>
            </div>
            <button
              onClick={handleAddToCart}
              className="w-fit rounded-md bg-indigo-500 px-14 py-3 text-white drop-shadow-lg duration-300 hover:bg-indigo-600 xl:w-[180px]"
            >
              Add To Cart
            </button>
          </div>
          <div className="my-8 w-fit">
            <Link to="/">
              <button className="flex items-center font-medium text-gray-500 duration-300 hover:text-gray-800">
                <HiArrowNarrowLeft className="text-lg "></HiArrowNarrowLeft>
                Go Back
              </button>
            </Link>
          </div>
        </section>
      </article>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      ></ToastContainer>
    </div>
  );
}

export default Product;
