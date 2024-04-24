import React,{useState} from 'react'

const LogInOut = () => {
    const [log,setLog] = useState("loggedin")
    const changeState = ()=>{
        if(log=="loggedin"){
        setLog("loggedout")
        }else{
            setLog("loggedin")
        }
    }
  return (
    <div>
        <h1>User is {log}</h1>
        <button onClick={changeState}>log</button>
    </div>
  )
}

export default LogInOut