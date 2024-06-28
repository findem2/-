import React, { ChageEvent, useEffect, useState } from "react"
import './App.scss';
import Test from "./Components/Test";

function App(): JSX.Element {
  const [test, setTest]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ] = useState<boolean>(true);
  const [test1, setTest1] = useState<string >("");
  useEffect(()=>{
    console.log("Mount");
  }, [])

  useEffect(()=>{
    console.log("testing1");
    return () => {
      console.log("testing????");
    }
  }, [test1]);

  return(
    <div className="container mx-auto">
      <div
      className="border"
      onClick={() =>{
        setTest(!test);
      }}
      >
        test
      </div>
      {test && <Test></Test>}
      <input
        type="text"
        value={test1}
        onInput={{e: ChangeEvent<HTMLInputElement>} => {
          setTest1(e.target.value);
        }}
      />
    </div>
  )
}

export default App;
