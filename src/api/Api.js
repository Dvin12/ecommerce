import axios from "axios";

export async function productData() {
  const products = await axios.get(
    "https://my-json-server.typicode.com/dvin12/mockJSON/products"
  );
  return products;
}
