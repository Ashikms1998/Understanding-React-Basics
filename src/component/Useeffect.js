import React,{useState,useEffect} from 'react'

const Useeffect = () => {
    const[count,setCount] = useState(0)
    const[count2,setCount2] = useState(0)
    const increment = ()=>{
        setCount(count+1);
    }
    const decrement =()=>{
        setCount(count-1);
    }
    const increment2 = ()=>{
        setCount2(count2+1);
    }
    useEffect(()=>{
        console.log("hai");
    },[count2])
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>

        <h1>{count2}</h1>
        <button onClick={increment2}>+</button>

    </div>
  )
}

export default Useeffect