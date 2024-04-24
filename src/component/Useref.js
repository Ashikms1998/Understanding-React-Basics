import React,{useState} from 'react'

const Useref = () => {
    const [niram,setNiram]= useState("Yellow")
    const niramChanger = ()=>{
        if(niram=="Yellow"){
        setNiram("green")
        }else{
            setNiram("Yellow")
        }
    }
  return (
    <div>
        <h1 style={{color:niram}}>This is the niram changed</h1>
        <button onClick={niramChanger}>Click Vro</button>
    </div>
  )
}

export default Useref