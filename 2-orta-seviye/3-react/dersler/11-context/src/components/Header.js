import { useTheme } from "../context/ThemeContext";

function Header() {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      Active theme {theme} from header
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Change Theme
      </button>
    </div>
  );
}

export default Header;
