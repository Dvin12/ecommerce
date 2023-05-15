import { CiShoppingCart } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/storeSlice";
import { ToastContainer, toast } from "react-toastify";
function ProductsCard({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = product.name;
  const idString = (id) => {
    return String(id).toLowerCase().split("").join("");
  };
  const rootId = idString(id);
  const handleClick = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: product,
      },
    });
  };

  const handleButtonClick = (e) => {
    e.stopPropagation();
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        brand: product.brand,
        price: product.price,
        image: product.image,
        quantity: 1,
        description: product.description,
      })
    ) && toast.success(`${product.name} is added to the cart!`);
  };
  return (
    <div className="group relative">
      <article
        onClick={handleClick}
        className="bg-gray-700  rounded-lg flex flex-col items-center justify-around w-[400px] h-[500px] p-12 gap-10 hover:bg-gray-600 duration-300 drop-shadow-sm cursor-pointer"
      >
        <img src={product.image} className="w-fit drop-shadow-xl"></img>
        <div className="flex items-center gap-12 justify-around ">
          <div className="flex flex-col gap-4">
            <span className="text-gray-400 text-sm ">{product.type}</span>
            <h3 className="text-xl text-white font-semibold">{product.name}</h3>
            <p className="text-xl text-white">${product.price}</p>
          </div>
          <div>
            <button
              onClick={handleButtonClick}
              className="bg-gradient-to-r from-pink-100 via-purple-300 to-indigo-500 text-4xl p-3 rounded-full drop-shadow-lg"
            >
              <CiShoppingCart></CiShoppingCart>
            </button>
          </div>
        </div>
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

export default ProductsCard;
