import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const Hooks = () => { 
    const [num , SetNum] = useState(0);

useEffect(()=>{
    if(num!==0){
        toast(`I am clicked ${num}`);
        console.log(num);
    }
},[num]);

const click = ()=>{
    SetNum(num+1)
}

  return (
    <>
      <button onClick={()=>{SetNum(num + 1);}}>Click Me {num}</button>
      <button onClick={click}>click</button>

    </>
  )
}

export default Hooks
