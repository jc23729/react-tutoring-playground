// import logo from "./logo.svg";
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
      {/* //A has no memory doesn't update ui */}
      {a}
      <button
        onClick={() => {
          // a = 15
          a = a + 1;
          console.log(a);
        }}>
        change value
      </button>

      {/* b button uses usestate, has its memory that keeps when component rerenders*/}
      {b}
      <button
        onClick={() => {
          setb(b + 1);
        }}>
        change state
      </button>
      
      {/* useRef it will keep its value but doesn't refresh its component, when rerenders the new screen */}
      {ref.current}
      <button
        onClick={() => {
          ref.current=15;
        }}>
        chang ref
      </button>
    </div>
  );
}

export default App;
