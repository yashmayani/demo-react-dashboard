import React, { useState } from 'react'

const Example = () => {
    const [a, Seta] = useState();
    const [b, Setb] = useState();
    const [c, Setc] = useState();

    const click = () => {
            Setc(a*b);
            Seta('');
            Setb('');
    }
    return (
        <>
            <div>
                <input type='number' value={a} onChange={(e) => Seta(e.target.value)} />
            </div>
            <div>
                <input type='number' value={b} onChange={(e) => Setb(e.target.value)} />
            </div>
            <button onClick={click}>Click Me</button>
            <div>
                Result: {c}
            </div>

        </>
    )
}

export default Example
