import ProductsCard from "./ProductsCard";

function NewProducts({ products }) {
  return (
    <section className="bg-gray-900 p-12 h-full ">
      <div className="mx-64">
        <div className="flex flex-col justify-center items-center ">
          <h2 className="text-gray-100 text-6xl font-medium mt-4 tracking-wide">
            New Products
          </h2>
          <span className="w-80 h-[4px] bg-white mt-8"></span>
        </div>
        <section className="my-20 grid grid-cols-3  gap-14 items-center justify-center">
          {products.slice(2, 5).map((item) => (
            <ProductsCard key={item.id} product={item}></ProductsCard>
          ))}
        </section>
      </div>
    </section>
  );
}

export default NewProducts;
