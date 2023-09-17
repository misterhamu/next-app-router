"use client"
import React, { useContext } from "react";
import { AppContext } from "../page";

type Props = {};

export default function UserPage({}: Props) {
  const { username } = useContext(AppContext);

  return (
    <div>
      <h1>User: {username}</h1>
    </div>
  );
}
