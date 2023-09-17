"use client"
import Navbar from "./components/navbar";
import "./globals.css";
import useTheme from "./hooks/use-theme";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, toggleTheme] = useTheme();

  return (
    <html lang="en">
      <body
        className={`min-h-screen ${
          theme === "light" ? "white" : "dark:bg-gray-800"
        } text-${
          theme === "light" ? "black" : "white"
        } transition-colors duration-300`}
      >
        <Navbar />
        <h1 className="text-2xl font-bold mb-4">Theme: {theme}</h1>
        <button
          className={`px-4 py-2 bg-${
            theme === "light" ? "gray-200" : "gray-700"
          } text-${
            theme === "light" ? "black" : "white"
          } rounded-md shadow-md transition-colors duration-300 hover:bg-${
            theme === "light" ? "gray-300" : "gray-600"
          }`}
          onClick={toggleTheme}
        >
          Toggle Theme
        </button>
        <div className="p-6">{children}</div>
      </body>
    </html>
  );
}
