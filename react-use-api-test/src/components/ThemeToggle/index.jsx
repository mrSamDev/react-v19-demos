import { use } from "react";
import { ThemeContext } from "../../App";

function ThemeToggle({ onToggle }) {
  // Using the use() hook with context
  const theme = use(ThemeContext);

  return (
    <button onClick={onToggle} className={`theme-toggle ${theme}`}>
      Current theme: {theme}
    </button>
  );
}

export default ThemeToggle;
