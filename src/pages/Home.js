import { useEffect, useState } from "react";
import Header from "../component/Header";
import NewProducts from "../component/NewProducts";
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
      <NewProducts products={products}></NewProducts>
      <Explore></Explore>
    </div>
  );
}

export default Home;
