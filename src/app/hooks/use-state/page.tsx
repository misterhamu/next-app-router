"use client";
import React, { useState } from "react";

type Props = {};

export default function UseStatePage({}: Props) {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Use State</h2>
      <p>Count: {count}</p>
      <button
        className=" border p-2 bg-blue-200"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}
