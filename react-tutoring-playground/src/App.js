import logo from "./logo.svg";
import "./App.css";
import { useRef, useState } from "react";

function App() {
  // so const b is destructred giving us the inital value
  //b can be any variable name or first value, second value setb gives us a function
  //useState(0) 0 is the initial value of this variable

  let a = 12;
  let ref = useRef(0);
  const [b, setb] = useState(0);

  return (
    <div className="App">
      {a}

      <button
        onClick={() => {
          // a = 15
          a = a + 1;
          console.log(a);
        }}>
        change value
      </button>

      {b}

      <button
        onClick={() => {
          setb(b + 1);
        }}>
        change state
      </button>

      {ref.current}
    </div>
  );
}

export default App;
