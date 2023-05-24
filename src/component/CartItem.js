import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import {
  decreaseQuantity,
  deleteFromCart,
  increaseQuantity,
  resetCart,
} from "../redux/storeSlice";
import { ToastContainer, toast } from "react-toastify";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

function CartItem() {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.store.productData);

  return (
    <section className=" flex xl:w-full xl:gap-20 ">
      <div className="bg-slate-100 p-4 md:p-8 xl:w-full xl:rounded-xl xl:p-12 xl:drop-shadow-lg">
        <div className="overflow-auto border-b-[2px] border-gray-300 py-4">
          <h2 className="text-2xl font-medium">Cart</h2>
        </div>
        <div className="">
          {productData.map((item) => (
            <div key={item.id} className="border-b-[2px] border-gray-300 py-8">
              <div className="flex flex-row gap-4">
                <img
                  className=" w-1/3  rounded-xl  bg-gray-300 p-2"
                  src={item.image}
                ></img>
                <div className="w-full">
                  <div className="flex justify-between xl:my-4 xl:text-xl">
                    <h2 className="text-gray-800">{item.name}</h2>
                    <h2 className="font-medium">
                      ${item.quantity * item.price}
                    </h2>
                  </div>
                  <div className="flex justify-between">
                    <div className="my-4 flex w-24 items-center justify-center gap-4 rounded-xl border-[1px] border-gray-400 py-1 text-lg text-gray-800">
                      <button
                        className="font-medium"
                        onClick={() =>
                          dispatch(
                            decreaseQuantity({
                              id: item.id,
                              name: item.name,
                              image: item.image,
                              price: item.price,
                              quantity: 1,
                              description: item.description,
                            })
                          )
                        }
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="font-medium"
                        onClick={() =>
                          dispatch(
                            increaseQuantity({
                              id: item.id,
                              name: item.name,
                              image: item.image,
                              price: item.price,
                              quantity: 1,
                              description: item.description,
                            })
                          )
                        }
                      >
                        +
                      </button>
                    </div>
                    <div
                      className="flex cursor-pointer items-center gap-2 font-medium text-gray-500 duration-300 hover:text-gray-800 xl:text-lg"
                      onClick={() =>
                        dispatch(deleteFromCart(item.id)) &&
                        toast.error(`${item.name} has been removed`)
                      }
                    >
                      <FaTrash></FaTrash>
                      <span>Delete</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => dispatch(resetCart([]))}
          className="my-4 rounded-lg bg-gray-100 px-4 py-2 drop-shadow-lg"
        >
          Reset The Cart
        </button>
        <Link to="/">
          <button className="flex items-center gap-1 text-gray-500 duration-300 hover:text-gray-800">
            <HiArrowNarrowLeft></HiArrowNarrowLeft>
            <span>Go Back</span>
          </button>
        </Link>
      </div>
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
    </section>
  );
}

export default CartItem;
