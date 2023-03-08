import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import Button from "./Button";
import Header from "./Header";

function Container() {
  const { theme } = useContext(ThemeContext);
  console.log(theme);

  return (
    <div className={`app ${theme === "dark" ? "dark" : "light"}`}>
      <Button />
      <Header />
    </div>
  );
}

export default Container;
