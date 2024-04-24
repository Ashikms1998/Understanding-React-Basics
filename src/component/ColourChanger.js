import React,{useState} from 'react'

const ColourChanger = () => {
    const [colour,setColour] = useState('black');
    const changes = ()=>{
        if(colour=='black'){
            setColour('red')
        }else{
            setColour('black')
        }
    };

  return (
    <div>
        <h1 style={{color:colour}}>This is the color change</h1>
        <button onClick={changes}>click me</button>
    </div>
  )
}

export default ColourChanger