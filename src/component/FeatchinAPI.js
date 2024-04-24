import React,{useState,useEffect} from 'react'

const FeatchinAPI = () => {
    const [count,setCount] = useState(0);
    const increment = ()=>{
        setCount(count+1)
    }
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
      .then(response => response.json())
      .then(json => console.log(json))
    })
  return (
    <div>
        <h1>Featching API Data</h1>
        <h1>{count}</h1>
        <button onClick={increment}>+</button>
    </div>
  )
}

export default FeatchinAPI