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
    <div className="bg-slate-200">
      <div className="mx-48 flex flex-col items-center justify-center  ">
        <h2 className="mt-28 text-6xl  font-medium tracking-wide  text-indigo-400">
          Our Products
        </h2>
        <span className="mt-6 h-[4px] w-64 bg-indigo-400"></span>
        <p className="mt-20 w-3/4 text-center  text-gray-600 ">
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
