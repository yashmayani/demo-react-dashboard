import React, { useState } from 'react'

const Button = () => {
    const [mode , setMode] = useState('light');
    const click = () =>{
        if (mode == 'light'){
            setMode('dark');
        }else{
            setMode('light');
        }
    }
  return (
    <>
    <div>
        Mode: {mode}
    </div>
      <button onClick={click}>Chnage Mode</button>
    </>
  )
}

export default Button
