import { useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";

function CartItem() {
  const productData = useSelector((state) => state.store.productData);
  return (
    <section className="w-2/3 pr-14 ">
      <div className="w-full bg-slate-100 rounded-xl p-12 drop-shadow-lg">
        <div className="border-b-[2px] border-gray-300 py-4">
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
                    <h2 className="font-medium">${item.price}</h2>
                  </div>
                  <div className="flex justify-between">
                    <div className="border-[1px] py-1 w-24 border-gray-400 flex items-center justify-center gap-4 rounded-xl my-4 text-lg text-gray-800">
                      <button className="font-medium">-</button>
                      <span>1</span>
                      <button className="font-medium">+</button>
                    </div>
                    <div className="flex items-center gap-2 text-lg font-medium text-gray-500 hover:text-gray-800 duration-300 cursor-pointer">
                      <FaTrash></FaTrash>
                      <span>Delete</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CartItem;
