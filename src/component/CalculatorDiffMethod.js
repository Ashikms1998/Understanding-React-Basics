import React, { useState } from "react";

const NewCalculator = () => {
  const [value1, setvalue1] = useState(0);
  const [value2, setvalue2] = useState(0);
  const [store, setstore] = useState(0);

  const getvalue1 = (e) => {
    setvalue1(e.target.value1);
    console.log();
  };

  const getvalue2 = (e) => {
    setvalue2(e.target.value2);
  };

  const add = () => {
    const result = parseInt(value1) + parseInt(value2);

    setstore(result);
  };

  const sub = () => {
    const result = parseInt(value1) - parseInt(value2);
    setstore(result);
  };

  const div = () => {
    const result = parseInt(value1) % parseInt(value2);
    setstore(result);
  };

  const mul = () => {
    const result = parseInt(value1) * parseInt(value2);
    setstore(result);
  };

  return (
    <div>
      <input type="text" onChange={(e) => setvalue1(e.target.value)} />
      <input type="text" onChange={(e) => setvalue2(e.target.value)} />
      <button onClick={add}>+</button>
      <button onClick={sub}>-</button>
      <button onClick={div}>%</button>
      <button onClick={mul}>*</button>
      <h1>{store}</h1>
    </div>
  );
};

export default NewCalculator;