import React, { useState } from 'react'
import { FaArrowRightArrowLeft } from "react-icons/fa6";

const Leftright = () => {
    const [left , SetLeft] = useState('');
    const [right , SetRight] = useState('');

    const click = () =>{
       SetLeft(right);
       SetRight(left);
    }
  return (
    <>
    <div style={{display:"flex" , gap:"20px"}}>
      <input type="text" value={left} onChange={(e) =>SetLeft(e.target.value)} />

      <FaArrowRightArrowLeft />

      <input type="text" value={right} onChange={(e) =>SetRight(e.target.value)} />
      </div>
      <div style={{marginBlockStart:"50px" , marginInlineStart:"9%"}}>
        <button onClick={click} style={{border:"none" , borderRadius:"5px" , padding:"10px" , backgroundColor:"powderblue" , cursor:"pointer" , width:"10%"}}>Click Me</button>
      </div>
    </>
  )
}

export default Leftright
