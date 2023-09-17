"use client";
import React, { useContext } from "react";
import { AppContext } from "../page";

type Props = {};

export default function LoginPage({}: Props) {
  const { setUsername } = useContext(AppContext);
  return (
    <div>
      <h2>Login</h2>
      <input
        className="border border-blue-800"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
    </div>
  );
}
