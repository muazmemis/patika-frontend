import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

axios.interceptors.request.use(
  function (config) {
    const { origin } = new URL(config.url);
    const allowedOrigins = [API_URL];

    const token = localStorage.getItem("access-token");

    if (allowedOrigins.includes(origin)) {
      config.headers.authorization = token;
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export const fetchProducts = async ({ pageParam = 1 }) => {
  const { data } = await axios.get(`${API_URL}/product?page=${pageParam}`);
  return data;
};

export const fetchAllProducts = async () => {
  const { data } = await axios.get(`${API_URL}/product`);
  return data;
};

export const fetchProduct = async (id) => {
  const { data } = await axios.get(`${API_URL}/product/${id}`);
  return data;
};

export const deleteProduct = async (id) => {
  const { data } = await axios.delete(`${API_URL}/product/${id}`);
  return data;
};

export const fetchRegister = async (input) => {
  const { data } = await axios.post(`${API_URL}/auth/register`, input);
  return data;
};

export const fetchLogin = async (input) => {
  const { data } = await axios.post(`${API_URL}/auth/login`, input);
  return data;
};

export const fetchMe = async () => {
  const { data } = await axios.get(`${API_URL}/auth/me`);
  return data;
};

export const fetchLogout = async () => {
  const { data } = await axios.post(`${API_URL}/auth/logout`, {
    refresh_token: localStorage.getItem("refresh-token"),
  });
  return data;
};

export const postOrder = async (input) => {
  const { data } = await axios.post(`${API_URL}/order`, input);
  return data;
};

export const fetchOrders = async () => {
  const { data } = await axios.get(`${API_URL}/order`);
  return data;
};

export const updateProduct = async (id, input) => {
  const { data } = await axios.put(`${API_URL}/product/${id}`, input);
  return data;
};
