"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

type Props = {};

export interface Comments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export default function UseEffectPage({}: Props) {
  const [data, setData] = useState<Comments[]>();
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);
        console.log("API WAS CALLED");
      });
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Use Effect</h2>
      {data &&
        data.map((d, k) => {
          return <p key={k}>{d.email}</p>;
        })}
    </div>
  );
}
