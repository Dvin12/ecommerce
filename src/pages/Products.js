import ProductsComponent from "../component/ProductsComponent";
import ProductsCard from "../component/ProductsCard";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const data = useLoaderData();
  useEffect(() => {
    setProducts(data.data);
  }, [data]);
  return (
    <div className="bg-slate-200 py-2">
      <div className=" mx-4 flex flex-col items-center justify-center sm:mx-6 xl:mx-0  ">
        <h2 className="mt-8 text-3xl font-semibold  tracking-wide text-indigo-400  xl:mt-20 xl:text-5xl">
          Our Products
        </h2>

        <p className="mt-8 text-justify  text-gray-600  xl:mt-10 xl:w-4/5  xl:text-center ">
          Our company offers great laptops and cameras because we partner with
          top manufacturers to provide our customers with the latest technology
          and innovative designs. Whether you're looking for a high-performance
          laptop or a professional-grade camera, we have the perfect product for
          you at competitive prices.
        </p>
      </div>
      <div className="mx-4 md:mx-40 xl:mx-auto">
        <ProductsComponent products={products}></ProductsComponent>
      </div>
    </div>
  );
}
export default Products;
