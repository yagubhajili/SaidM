import React, { useState } from 'react'

const Counter = () => {
    let [count, setCount] = useState(0)

    return (
        <div>
            <button onClick={() => {
                setCount(--count)
            }}>DEC</button>
            <span>{count}</span>
            <button onClick={() => {
                setCount(++count)
            }}>INC</button>
        </div>
    )
}

export default Counter