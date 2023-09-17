"use client"
import React, { useRef } from "react";

type Props = {};

export default function UseRefPage({}: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onClick = () => {
    if (!inputRef.current) {
      return;
    }
    // inputRef.current.focus();
    inputRef.current.value = "";
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Use Ref</h2>
      <input type="text" placeholder="Ex..." ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
    </div>
  );
}
