"use client"
import React, { createContext, useState } from "react";
import LoginPage from "./login/page";
import UserPage from "./user/page";


interface IAppContext{
    username: string;
    setUsername: React.Dispatch<React.SetStateAction<string>>;
}

export const AppContext = createContext<IAppContext>(
    {
        username: "",
        setUsername: () => {}
    }
);

export default function UseContextPage() {
  const [username, setUsername] = useState("");

  return (
    <AppContext.Provider value={{ username, setUsername }}>
      <div>
        <h2 className="text-xl font-semibold mb-6">Use Context</h2>
      </div>
      <LoginPage /> <UserPage />
    </AppContext.Provider>
  );
}
