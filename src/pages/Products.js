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
    <div className="bg-slate-200 py-8">
      <div className="mx-auto flex flex-col items-center justify-center xl:mx-48  ">
        <h2 className="mt-6 text-4xl font-semibold  tracking-wide text-indigo-400  xl:text-6xl">
          Our Products
        </h2>

        <p className="mt-8 w-4/5  text-justify  text-gray-600 xl:mt-20 xl:w-3/4  xl:text-center ">
          Our company offers great laptops and cameras because we partner with
          top manufacturers to provide our customers with the latest technology
          and innovative designs. Whether you're looking for a high-performance
          laptop or a professional-grade camera, we have the perfect product for
          you at competitive prices.
        </p>
      </div>
      <ProductsComponent products={products}></ProductsComponent>
    </div>
  );
}
export default Products;
