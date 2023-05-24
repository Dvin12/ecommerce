import { CiShoppingCart } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/storeSlice";
import { ToastContainer, toast } from "react-toastify";
function ProductsCard({ product, page }) {
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

  const cardBackground =
    page === "products"
      ? "bg-gray-100 hover:bg-gray-300"
      : "bg-gray-700 hover:bg-gray-600";

  const cardTextColour = page === "products" ? "text-gray-800" : "text-white";

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
    <div className="group relative flex justify-center">
      <article
        onClick={handleClick}
        className={` my-20  flex cursor-pointer flex-col items-center gap-10 rounded-lg ${cardBackground} p-14 drop-shadow-sm duration-300 md:w-fit md:justify-center xl:my-0  xl:h-[500px] xl:w-[400px] xl:p-8`}
      >
        <img
          src={product.image}
          className="w-fit drop-shadow-xl md:w-3/4"
        ></img>
        <div className="flex items-center justify-around gap-16 ">
          <div className="flex flex-col gap-6">
            <span className="text-sm text-gray-400 ">{product.type}</span>
            <h3 className={`text-lg font-semibold ${cardTextColour}`}>
              {product.name}
            </h3>
            <p className={`text-lg ${cardTextColour}`}>${product.price}</p>
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
