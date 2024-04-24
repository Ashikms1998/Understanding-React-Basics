import React,{useState} from 'react'

const Counterapp = () => {
const [count,setCount] = useState(0);

const clickHandler =() => {
  setCount(count+1);
};
return (<div>
    <h1>{count}</h1>
    <button onClick={clickHandler}>Click Me</button>
</div>
  )
};

export default Counterapp