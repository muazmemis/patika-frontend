import { useTheme } from "../context/ThemeContext";

function Button() {
  //   const data = useContext(ThemeContext);
  const { theme, setTheme } = useTheme();
  //   console.log(data);
  return (
    <div>
      {/* Button - {data} */}
      Active theme - {theme}
      <br />
      {/* Button - {children} */}
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Change Theme
      </button>
    </div>
  );
}

export default Button;
