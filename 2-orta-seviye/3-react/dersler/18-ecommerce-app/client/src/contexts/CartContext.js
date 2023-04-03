import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

const defaultCart = JSON.parse(localStorage.getItem("cart")) || [];

const CartProvider = ({ children }) => {
  const [items, setItems] = useState(defaultCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  const addToCart = (product, findCartItem) => {
    if (!findCartItem) return setItems((prev) => [...prev, product]);

    const filtered = items.filter((item) => item._id !== findCartItem._id);

    setItems(filtered);
  };

  const removeFromCart = (id) => {
    const filtered = items.filter((item) => item._id !== id);
    setItems(filtered);
  };

  const values = {
    items,
    addToCart,
    removeFromCart,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
