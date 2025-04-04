import { useState } from "react";
import { createContext } from "react";
import ThemeToggle from "./components/ThemeToggle";
import UserProfile from "./components/UserProfile/UserProfile";
import "./App.css";
import Footer from "./components/Footer";

//uncomment the code turn-on react complier -> react-use-api-test/vite.config.js

export const ThemeContext = createContext("light");

function App() {
  const [theme, setTheme] = useState("light");
  const [userId, setUserId] = useState(1);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const changeUser = () => {
    setUserId((prevId) => (prevId % 10) + 1); // Cycle through users 1-10
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`app ${theme}`}>
        <h1>React use() API Example</h1>

        <ThemeToggle onToggle={toggleTheme} />

        <button onClick={changeUser}>Change User</button>

        <UserProfile userId={userId} />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
