import React,{useState,useRef} from 'react'

const UseRefjs = () => {
    const [count,setCount] = useState(0);
    const refItem = useRef(0)
    const increment = ()=>{
        setCount(count+1);
        refItem.current++

        console.log("State:", count);
        console.log("refItem:", refItem.current)

    }

  return (
    <div>
        <h2>{count}</h2>
       <button onClick={increment}>increment</button>
    </div>
  )
}

export default UseRefjs