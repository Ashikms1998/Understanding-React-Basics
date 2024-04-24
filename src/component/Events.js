import React from 'react'

const Events = () => {
    const clickHandle = ()=>{
        console.log("You clicked Me");
    }
    const doubleClick = (name)=>{
        console.log("You Double Clicked ME")
        alert("Hellow " + name)
    }
    const inputItem = ()=>{
        alert("You Typed in the TextBox");
    };
    const onMouseOver = ()=>{
        alert("Bruh Moveeee")
    }
    const onKeyDown = ()=>{
        alert("You Pressed a Key VroHhh")
    }

  return (
    <div>
        <h1>Learn React Events</h1>
        <button onClick={clickHandle}>Click Me</button>
        <h1>Double Click</h1>
        <button onDoubleClick={()=>doubleClick("Ashik")}>Tap me Twice</button>
        <h1>Input text</h1>
        <input onChange={inputItem} type='text'/>
        <h1>On Mouse Over</h1>
        <button onMouseOver={onMouseOver}>Mouse Over ME</button>
        <h1>On Key down</h1>
        <input onKeyDown={onKeyDown} type='text'></input>
    </div>
  )
}

export default Events