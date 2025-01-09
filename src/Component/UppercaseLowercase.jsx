import React, { useState } from 'react'

const UppercaseLowercase = () => {
    const [name, setName] = useState('');
    const [nameUpper, setNameUpper] = useState('');
    const [nameLower, setNameLower] = useState('');
    
    const click=()=>{
        setNameUpper(name.toUpperCase())
        setNameLower(name.toLowerCase())
    }
    
    return (
        <>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={click}>Click Me</button>
            <div>Uppercase : {nameUpper}
            </div>
            <div>Lowercase : {nameLower}
            </div>
        </>
    )
}

export default UppercaseLowercase