import React,{useState,useRef} from 'react'

const StorestringonUseref = () => {
    const [string,setString] = useState("");
    const newRef = useRef(null)

    const updateString =()=>{
        const newString = newRef.current.value
        setString(newString);
    }
  return (
    <div>
        <input type='text' ref={newRef} placeholder='Enter a String'></input>
        <button onClick={updateString}>Update Value</button>
        <h1>Your string is: {string}</h1>
    </div>
  )
}

export default StorestringonUseref