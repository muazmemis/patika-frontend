import axios from "axios";

export const fetchProducts = async () => {
  const { data } = await axios.get("http://localhost:4000/product");
  return data;
};
