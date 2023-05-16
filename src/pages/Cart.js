import CartItem from "../component/CartItem";

function Cart() {
  return (
    <div className="bg-slate-200 h-screen">
      <section className="flex items-center justify-center p-12 mx-28 py-20">
        <CartItem></CartItem>
        <article className="bg-zinc-300 p-10 w-1/4  rounded-2xl  ">
          <div className=" flex justify-between items-center  border-b-[1px] border-b-gray-400 py-4 border-dashed">
            <h3 className="text-xl font-medium">Delivery</h3>
            <button className="bg-gray-200 p-2 w-16 rounded-lg drop-shadow-md">
              Free
            </button>
          </div>
          <div className=" border-b-[1px] border-b-gray-400 py-4 border-dashed">
            <div className="flex justify-between">
              <h3>Subtotal</h3>
              <h3>$80</h3>
            </div>
            <div className="flex justify-between">
              <h5>Delivery</h5>
              <h5>Free</h5>
            </div>
            <div className="flex justify-between">
              <h5>Tax</h5>
              <h5>+$14.00</h5>
            </div>
          </div>
          <div className="flex justify-between">
            <h3>Total</h3>
            <h3>$94</h3>
          </div>
          <div className="flex flex-col w-full">
            <button className="bg-indigo-400">Proceed to checkout</button>
            <button className="bg-gray-200">Continue shopping</button>
          </div>
        </article>
      </section>
    </div>
  );
}

export default Cart;
