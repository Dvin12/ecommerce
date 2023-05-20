import { useEffect, useState } from "react";
import Header from "../component/Header";
import NewProducts from "../component/NewProducts";
import { useLoaderData } from "react-router-dom";
import ExploreComponent from "../component/ExploreComponent";

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
      <ExploreComponent></ExploreComponent>
    </div>
  );
}

export default Home;
