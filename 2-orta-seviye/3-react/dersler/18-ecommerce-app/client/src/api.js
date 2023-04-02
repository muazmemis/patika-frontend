import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const fetchProducts = async ({ pageParam = 1 }) => {
  const { data } = await axios.get(`${API_URL}/product?page=${pageParam}`);
  return data;
};

export const fetchProduct = async (id) => {
  const { data } = await axios.get(`${API_URL}/product/${id}`);
  return data;
};

export const fetchRegister = async (input) => {
  const { data } = await axios.post(`${API_URL}/auth/register`, input);
  return input;
};
