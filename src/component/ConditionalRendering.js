import React from 'react'

const ConditionalRendering = () => {
    let number = 0;
    
    if(number > 0){
        return <h1>THis is positive</h1>
    }else if(number < 0){
        return <h1>This is Negative</h1>
    }else{
        return <h1>This is zero</h1>
    }


}

export default ConditionalRendering