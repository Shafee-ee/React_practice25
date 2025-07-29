import React from 'react'

const Child = ({ onClick }) => {

    console.log('🧒 Child rendered');
    return (
        <div className='mt-4px border-2 p-4 bg-red-300'>
            <h3>I am the child</h3>
            <button onClick={onClick}>Child Button</button>
        </div>
    )
}

export default Child