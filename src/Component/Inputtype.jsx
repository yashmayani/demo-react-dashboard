import { click } from '@testing-library/user-event/dist/click';
import React, { useState } from 'react'

const Inputtype = () => {
    const [a , Seta] = useState('');
    const [b , Setb] = useState('');
    const [c , Setc] = useState('');
    const [totalchar , Settotalchar] = useState(0);
 const click = () =>{
         Setc(a+' '+b);
 }
const total = () =>{
    const totalLength = c.length;
    Settotalchar(totalLength);
}
  return (
    <>
    <div style={{display:"flex" , gap:"10px"}}>
    <input type="text" value={a} onChange={(e) => Seta(e.target.value)} />
  
      <input type="text" value={b} onChange={(e) => Setb(e.target.value)} />

      <button onClick={click}>Click Me</button>
      </div>
      <div >
        Result : {c}
      </div>
      <div>
        <button onClick={total}> Total Character </button>
        </div>
        <div>
        Total Character : {totalchar}
        </div>
    </>
  )
}

export default Inputtype
