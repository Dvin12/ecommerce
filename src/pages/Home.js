import { useEffect, useState } from "react";
import Header from "../component/Header";
import Products from "../component/Products";
import { useLoaderData } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  const data = useLoaderData();
  useEffect(() => {
    setProducts(data.data);
  }, [data]);
  return (
    <div>
      <Header></Header>
      <Products products={products}></Products>
    </div>
  );
}

export default Home;
