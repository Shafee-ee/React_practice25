import React from 'react'

const Child = ({ onClick, info, children }) => {

    console.log('🧒 Child rendered', info);
    console.log('children info:', children)
    return (
        <div >
            <h3>I am the child</h3>
            <button className='mt-4px border-2 p-4 bg-red-300' onClick={onClick}>Child Button</button>
        </div>
    )
}

export default React.memo(Child);