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
    <section className="w-2/3 pr-12 ">
      <div className="w-full bg-slate-100 rounded-xl p-12 drop-shadow-lg">
        <div className="border-b-[2px] border-gray-300 py-4 overflow-auto">
          <h2 className="text-2xl font-medium">Cart</h2>
        </div>
        <div className="">
          {productData.map((item) => (
            <div key={item.id} className="border-b-[2px] border-gray-300 py-8">
              <div className="flex flex-row gap-8">
                <img
                  className=" p-2  w-1/5  bg-gray-300 rounded-xl"
                  src={item.image}
                ></img>
                <div className="w-full">
                  <div className="flex justify-between text-xl my-4">
                    <h2 className="text-gray-800">{item.name}</h2>
                    <h2 className="font-medium">
                      ${item.quantity * item.price}
                    </h2>
                  </div>
                  <div className="flex justify-between">
                    <div className="border-[1px] py-1 w-24 border-gray-400 flex items-center justify-center gap-4 rounded-xl my-4 text-lg text-gray-800">
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
                      className="flex items-center gap-2 text-lg font-medium text-gray-500 hover:text-gray-800 duration-300 cursor-pointer"
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
          className="my-4 bg-gray-100 px-4 py-2 rounded-lg drop-shadow-lg"
        >
          Reset The Cart
        </button>
        <Link to="/">
          <button className="flex items-center gap-1 text-gray-500 hover:text-gray-800 duration-300">
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
