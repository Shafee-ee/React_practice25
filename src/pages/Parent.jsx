import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {

    const [count, setCount] = useState(0);

    const handleChildClick = () => {
        console.log('Child button clicked');
    };

    console.log('👨‍👧 Parent rendered');
    return (
        <div className='border-2 p-4'>
            <h2>Parent Count:{count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment Parent Count</button>
            <Child onClick={handleChildClick} />
        </div>
    )
}

export default Parent;