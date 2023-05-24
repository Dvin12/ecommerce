import ProductsCard from "./ProductsCard";

function NewProducts({ products }) {
  return (
    <section className="bg-gray-900 p-6">
      <div className="mx-auto sm:mx-2 xl:mx-20">
        <div className="my-8 flex flex-col items-center justify-center ">
          <h2 className="   text-4xl font-medium tracking-wide text-gray-100 xl:text-6xl">
            New Products
          </h2>
          <span className="mt-6 h-[3px] w-48 bg-white xl:mt-7 xl:w-80"></span>
        </div>
        <section className="  mx-auto   flex flex-col items-center justify-center  pb-10  md:mx-[120px] xl:mx-0  xl:grid xl:grid-cols-3 xl:pb-20 xl:pt-8">
          {products.slice(2, 5).map((item) => (
            <ProductsCard key={item.id} product={item}></ProductsCard>
          ))}
        </section>
      </div>
    </section>
  );
}

export default NewProducts;
