import { useSelector } from "react-redux";
import CartItem from "../component/CartItem";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";

function Cart() {
  const productData = useSelector((state) => state.store.productData);
  const [totalAmount, setTotalAmount] = useState("");
  const [subTotalAmount, setSubTotalAmount] = useState("");

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setSubTotalAmount(price.toFixed(2));
  }, [productData]);

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity + 14;
      return price;
    });
    setTotalAmount(price.toFixed(2));
  }, [productData]);

  return (
    <div className="bg-slate-200 h-screen">
      <section className="flex  justify-center  mx-20 py-20">
        <CartItem></CartItem>
        <article className="bg-gray-100 p-10 w-1/4  rounded-2xl drop-shadow-lg h-fit">
          <div className=" flex justify-between items-center  border-b-[1px] border-b-gray-400 py-4 border-dashed">
            <h3 className="text-xl font-medium">Delivery</h3>
            <button className="bg-gray-200 p-2 w-16 rounded-lg drop-shadow-md">
              Free
            </button>
          </div>
          <div className=" border-b-[1px] border-b-gray-400 py-4 border-dashed">
            <div className="flex justify-between  text-gray-900 text-xl items-center">
              <h3>Subtotal</h3>
              <span>${subTotalAmount}</span>
            </div>
            <div className="flex justify-between py-2  text-gray-600">
              <h5>Delivery</h5>
              <span>Free</span>
            </div>
            <div className="flex justify-between  text-gray-500">
              <h5>Tax</h5>
              <span>+ $14.00</span>
            </div>
          </div>
          <div className="flex justify-between py-4 text-xl">
            <h3 className="text-gray-800">Total</h3>
            <span className=" text-black font-medium">${totalAmount}</span>
          </div>
          <div className="flex flex-col w-full gap-2  ">
            <button className="bg-indigo-500 p-2 rounded-lg drop-shadow-lg text-gray-100 text-lg font-medium hover:bg-indigo-600 duration-300">
              Proceed to checkout
            </button>
            <button className="bg-gray-100 text-gray-900 p-2 rounded-lg text-lg font-medium drop-shadow-lg hover:bg-gray-200 duration-300">
              Continue shopping
            </button>
          </div>
        </article>
      </section>
    </div>
  );
}

export default Cart;
