import { CiShoppingCart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
function ProductsCard({ product }) {
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
    return console.log("Button clicked!");
  };
  return (
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
  );
}

export default ProductsCard;
