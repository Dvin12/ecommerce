import axios from "axios";

export async function productData() {
  const products = await axios.get("http://localhost:3001/products");
  return products;
}
