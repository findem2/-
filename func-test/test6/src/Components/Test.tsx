import { FC, useEffect, useState } from "react";

const Test: FC = () => {
  const [test, _] = useState<string>("now Testing");
  const [a, b] = useState("asdf"); 

  useEffect(() => {
    console.log("Test Component Mounted");
    return () => {
      console.log("Test Component Will Mount");
    };
  }, []);

  return <div>{test}</div>;
};

export default Test;
