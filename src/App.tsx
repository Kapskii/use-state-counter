import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [a, setA] = useState(1)
  const onClickHandler = () => {
    setA(++a);
  }
  const onClickClear = () => {
    setA(0);
  }


  return (
    <div className="App">
      <h1>{a}</h1>
      <button onClick={onClickHandler}>click</button>
      <button onClick={onClickClear}>clear</button>
    </div>
  );
}

export default App;
