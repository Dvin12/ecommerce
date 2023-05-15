import ProductsCard from "./ProductsCard";

function Products({ products }) {
  return (
    <section className="bg-gray-900 p-12 h-full ">
      <div className="mx-28">
        <div className="flex flex-col justify-center items-center ">
          <h2 className="text-gray-100 text-6xl  mt-12 font-medium  tracking-wide">
            Our Products
          </h2>
          <span className="w-64 h-[4px] bg-white mt-6"></span>
          <p className="text-center mt-6 text-gray-400 text-sm w-3/4 ">
            Our company offers great laptops and cameras because we partner with
            top manufacturers to provide our customers with the latest
            technology and innovative designs. Whether you're looking for a
            high-performance laptop or a professional-grade camera, we have the
            perfect product for you at competitive prices.
          </p>
        </div>
        <section className="my-28 grid grid-cols-3 gap-20 justify-center p-12">
          {products.map((item) => (
            <ProductsCard key={item.id} product={item}></ProductsCard>
          ))}
        </section>
      </div>
    </section>
  );
}

export default Products;
