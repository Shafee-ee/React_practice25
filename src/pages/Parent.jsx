import React, { useState, useMemo, useCallback } from 'react';
import Child from './Child';

const Parent = () => {

    const [count, setCount] = useState(0);
    const info = useMemo(() => ({ name: 'Shafee' }), []);

    const childContent = useMemo(() => { return <p>I am a child element passed as children</p> }, [])
    const handleChildClick = useCallback(() => {
        console.log('Child button clicked');
    }, []);

    console.log('👨‍👧 Parent rendered');
    return (
        <div className='border-2 p-4'>
            <h2>Parent Count:{count}</h2>
            <button className='bg-green-200 p-4 rounded' onClick={() => setCount(count + 1)}>Increment Parent Count</button>
            <Child info={info} onClick={handleChildClick} >
                {childContent}
            </Child>
        </div>
    )
}

export default Parent;