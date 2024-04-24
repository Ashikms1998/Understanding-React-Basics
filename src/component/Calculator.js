import React,{useState,useRef} from 'react'

const Calculator = () => {
  const useRefVal1 = useRef(null);
  const useRefVal2 = useRef(null);
  const [store,setStore] = useState(0);
  const add = ()=>{
    const result = parseInt(useRefVal1.current.value)+parseInt(useRefVal2.current.value)
    setStore(result)
  }
  const sub = ()=>{
    const result = parseInt(useRefVal1.current.value)-parseInt(useRefVal2.current.value)
    setStore(result)
  }
  const mul = ()=>{
    const result = parseInt(useRefVal1.current.value)*parseInt(useRefVal2.current.value)
    setStore(result)
  }
  const div = ()=>{
    const result = parseInt(useRefVal1.current.value)/parseInt(useRefVal2.current.value)
    setStore(result)
  }
  return (
    <div>
        <input type='number' ref={useRefVal1} placeholder='First Number'></input>
        <input type='number' ref={useRefVal2} placeholder='Second Number'></input>
        <button onClick={add}>+</button>
        <button onClick={sub}>-</button>
        <button onClick={mul}>*</button>
        <button onClick={div}>/</button>
        <h1>{store}</h1>
    </div>
  );
};

export default Calculator;