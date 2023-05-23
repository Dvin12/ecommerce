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
        className="flex cursor-pointer  flex-col items-center justify-around gap-8 rounded-lg bg-gray-700 p-10 drop-shadow-sm duration-300 hover:bg-gray-600 xl:h-[500px] xl:w-[400px] xl:p-12"
      >
        <img src={product.image} className="w-fit drop-shadow-xl"></img>
        <div className="flex items-center justify-around gap-6 ">
          <div className="flex flex-col gap-6">
            <span className="text-sm text-gray-400 ">{product.type}</span>
            <h3 className="text-lg font-semibold text-white">{product.name}</h3>
            <p className="text-lg text-white">${product.price}</p>
          </div>
          <div>
            <button
              onClick={handleButtonClick}
              className="rounded-full bg-gradient-to-r from-pink-100 via-purple-300 to-indigo-500 p-3 text-4xl drop-shadow-lg"
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
