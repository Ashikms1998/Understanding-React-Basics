import React,{useRef,useState} from 'react'

const Demojs = () => {
    const RefVal1 = useRef(null);
    const RefVal2 = useRef(null);
    const [sum,setSum] = useState(0)
    const updateSum = ()=>{
        const result = parseInt(RefVal1.current.value)+parseInt(RefVal2.current.value)
        setSum(result)
    }
  return (
    <div>
        <input type='number' ref={RefVal1} placeholder='input number 1'></input>
        <input type='number' ref={RefVal2} placeholder='input number 2'></input>
        <button onClick={updateSum}>+</button>
        <h1>{sum}</h1>
    </div>
  )
}

export default Demojs