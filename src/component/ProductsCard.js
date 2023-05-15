function ProductsCard({ product }) {
  return (
    <article className="bg-gray-700  rounded-lg flex flex-col items-center justify-center">
      <img src={product.image} className="w-4/5 h-fit"></img>
      <div className="flex items-center justify-center">
        <div>
          <span>{product.type}</span>
          <h3>{product.name}</h3>
          <p>${product.price}</p>
        </div>
        <div>
          <button>PRESS</button>
        </div>
      </div>
    </article>
  );
}

export default ProductsCard;
