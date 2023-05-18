import { useEffect, useState } from "react";
import Header from "../component/Header";
import Products from "../component/Products";
import { useLoaderData } from "react-router-dom";
import Explore from "../component/Explore,";

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
      <Explore></Explore>
    </div>
  );
}

export default Home;
