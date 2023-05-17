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
            <div className="border-2 rounded-md border-slate-700 w-[180px] p-2 flex items-center justify-center gap-4 ">
              <span>Quantity</span>
              <button onClick={handleDecrease}>-</button>
              <span>{baseQnty}</span>
              <button onClick={handleIncrease}>+</button>
            </div>
            <button
              onClick={handleAddToCart}
              className="bg-indigo-500 w-[180px] rounded-md text-white hover:bg-indigo-600 duration-300 drop-shadow-lg"
            >
              Add To Cart
            </button>
          </div>
          <div className="my-8 w-fit">
            <Link to="/">
              <button className="text-gray-500 font-medium hover:text-gray-800 duration-300 flex items-center">
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
