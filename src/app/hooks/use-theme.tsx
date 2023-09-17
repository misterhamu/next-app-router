import { useState, useEffect } from "react";

type Theme = "light" | "dark";

export default function useTheme(): [Theme, () => void]  {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    // Get the current theme from local storage (if available)
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // If no theme is saved, use the user's OS preference for the initial theme
      const userPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(userPrefersDark ? "dark" : "light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme: Theme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return [theme, toggleTheme];
}
