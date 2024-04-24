import React,{useState,useEffect} from 'react'

const Usestate = () => {
    // let [colour,setColour] = useState("Green")
    // let changeColour =()=>{
    //     setColour("Red")
    // }

    const [count,setCount] = useState(0)
    const [count2,setCount2] = useState(0)

    const increment =()=>{
      setCount(count+1);
    };
    const decrement = () =>{
      setCount(count-1);
    }
    const increment2 =()=>{
      setCount2(count2+1);
    };
    const decrement2 = () =>{
      setCount2(count2-1);
    }
    useEffect(()=>{
      fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
      .then(response => response.json())
      .then(json => console.log(json))
      return ()=>{
        console.log("hellwo")
      }
    },[count])

  return (
    <div>
        {/* <h1>This is the {colour}</h1>
        <button onClick={changeColour}>Click Me</button> */}

        <br/>

        <h1>CounterApp</h1>
        <h1>{count}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>

        <h1>CounterApp2</h1>
        <h1>{count2}</h1>
        <button onClick={increment2}>+</button>
        <button onClick={decrement2}>-</button>
    </div>
  )
}

export default Usestate