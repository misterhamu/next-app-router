"use client";
import axios from "axios";
import { useEffect, useState, useMemo } from "react";

export default function UseMemoPage() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  const findLongestName = (comments: any) => {
    if (!comments) return null;

    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }

    console.log("THIS WAS COMPUTED");

    return longestName;
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  // const getLongestName = useMemo(() => findLongestName(data), [data]);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Use Memo</h2>

      <div>{findLongestName(data)}</div>
      {/* <div> {getLongestName} </div> */}

      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {" "}
        Toggle
      </button>
      {toggle && <h1> toggled </h1>}
    </div>
  );
}
