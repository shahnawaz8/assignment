import {useState} from "react";
export function Counter(props){
  const [counter,setCounter] = useState(0)
  return <h1>Counter : {counter}
    <br/>
    <button onClick={()=>{
      setCounter(counter+1)
    }}>increment</button>
    <button onClick={()=>{
      setCounter(counter-1)
      if(counter<=0){
        setCounter(0)
      }
      
    }}>decrement</button>

<button onClick={()=>{
      setCounter(counter*2)
    }}>Double</button>

<button onClick={()=>{
      setCounter(0)
    }}>Reset</button>
  </h1>
}