import { createContext, useContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addToCart = (product, findCartItem) => {
    if (!findCartItem) return setItems((prev) => [...prev, product]);
    
    const filtered = items.filter((item) => item._id !== findCartItem._id);

    setItems(filtered);
  };

  const values = {
    items,
    addToCart,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
