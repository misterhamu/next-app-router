"use client";
import { useCallback, useEffect, useState } from "react";

export default function UseCallbackPage() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("Hello, Ariser! ");

  const returnName = useCallback(
    (name: string) => {
      return data + name;
    },
    [data]
  );

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Use Callback</h2>

      <Ariser returnName={returnName} />
    </div>
  );
}

type AriserProps = {
  returnName: (arg: string) => string;
};
function Ariser({ returnName }: AriserProps) {
  useEffect(() => {
    console.log("FUNCTION WAS CALLED");
  }, [returnName]);

  return <div>{returnName("HAM")}</div>;
}
