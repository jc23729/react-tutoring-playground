import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // so const b is destructred giving us the inital value
  //b can be any variable name or first value, second value setb gives us a function
  //useState(0) 0 is the initial value of this variable

  let a = 12
  const [b, setb] = useState(0)

  return (
    <div className="App">
      {a}
      
      <button onClick={() => {
        a = 15
        console.log(a)
      }}>change value</button>

      {b}

      <button onClick={() => {
        setb(b+1)
      }}>change state</button>
    </div>
  );
}

export default App;
