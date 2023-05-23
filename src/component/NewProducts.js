import ProductsCard from "./ProductsCard";

function NewProducts({ products }) {
  return (
    <section className="bg-gray-900 p-12">
      <div className="mx-auto xl:mx-64">
        <div className="my-6 flex flex-col items-center justify-center ">
          <h2 className=" text-4xl font-medium tracking-wide text-gray-100 xl:text-6xl">
            New Products
          </h2>
          <span className="mt-6 h-[3px] w-48 bg-white xl:mt-8 xl:w-80"></span>
        </div>
        <section className="   my-10 flex flex-col items-center justify-center gap-12   xl:grid xl:grid-cols-3">
          {products.slice(2, 5).map((item) => (
            <ProductsCard key={item.id} product={item}></ProductsCard>
          ))}
        </section>
      </div>
    </section>
  );
}

export default NewProducts;
