import React,{useState,useRef} from 'react'

const Reuse = () => {
    const refVal1 = useRef(null);
    const refVal2 = useRef(null);
    const[store,setStore] = useState(0);
    const add =()=>{
        const result = parseFloat(refVal1.current.value)+parseFloat(refVal2.current.value)
        setStore(result)
    }
    const sub =()=>{
        const result = parseFloat(refVal1.current.value)-parseFloat(refVal2.current.value)
        setStore(result)
    }
    const mul =()=>{
        const result = parseFloat(refVal1.current.value)*parseFloat(refVal2.current.value)
        setStore(result)
    }
    const div =()=>{
        const result = parseFloat(refVal1.current.value)/parseFloat(refVal2.current.value)
        setStore(result)
    }
  return (
    <div>
        <input type='number' ref={refVal1} placeholder='input1'></input>
        <input type='number' ref={refVal2} placeholder='input2'></input>
        <button onClick={add}>+</button>
        <button onClick={sub}>-</button>
        <button onClick={mul}>*</button>
        <button onClick={div}>/</button>

        <h1>OUTPUT:{store}</h1>

    </div>
  )
}

export default Reuse