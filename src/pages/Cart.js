import { useSelector } from "react-redux";
import CartItem from "../component/CartItem";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    <main className=" bg-slate-200">
      <section className="mx-auto flex  flex-col  justify-center  xl:mx-48 xl:grid xl:grid-cols-2 xl:items-start xl:justify-items-end xl:py-20">
        <CartItem></CartItem>

        <article className="  h-fit bg-gray-100 p-4 py-14   md:p-8   xl:h-fit xl:w-3/4 xl:rounded-2xl xl:p-14 xl:drop-shadow-lg">
          <section className=" flex items-center justify-between  border-b-[1px] border-dashed border-b-gray-400 py-4">
            <h3 className="text-xl font-medium">Delivery</h3>
            <button className="w-16 rounded-lg bg-gray-200 p-2 drop-shadow-md">
              Free
            </button>
          </section>
          <section className=" border-b-[1px] border-dashed border-b-gray-400 py-4">
            <div className="flex items-center  justify-between text-xl text-gray-900">
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
          </section>
          <section className="flex justify-between py-4 text-xl">
            <h3 className="text-gray-800">Total</h3>
            <span className=" font-medium text-black">${totalAmount}</span>
          </section>
          <section className="flex w-full flex-col gap-4   ">
            <button className="rounded-lg bg-indigo-500 p-2 text-lg font-medium text-gray-100 drop-shadow-lg duration-300 hover:bg-indigo-600">
              Proceed to checkout
            </button>
            <Link to="/products">
              <button className="w-full rounded-lg bg-gray-100 p-2 text-lg font-medium text-gray-900 drop-shadow-lg duration-300 hover:bg-gray-200">
                Continue shopping
              </button>
            </Link>
          </section>
        </article>
      </section>
    </main>
  );
}

export default Cart;
