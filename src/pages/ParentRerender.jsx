import React, { useState } from 'react';
import ChildRerender from './ChildRerender';

const ParentRerender = () => {

    const [count, setCount] = useState(0);

    const handleChildClick = () => {
        console.log('Child button Clicked')
    }

    console.log('Parent Rendered');



    return (
        <div className='border p-4'>
            <h2>Parent Count:{count}</h2>
            <p>Count is: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>

            <ChildRerender onClick={handleChildClick} />
            <ChildRerender onClick={handleChildClick} />
        </div>
    )
}

export default ParentRerender