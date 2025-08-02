import React, { useState } from 'react'

const TempTest = () => {
    const [count, setCount] = useState(0);
    console.log('Rendered with count:', count);
    return (
        <div>
            <h2>Count is:{count}</h2>
            <button onClick={() => setCount(c => c + 1)}>Add</button>
        </div>
    )
}

export default TempTest