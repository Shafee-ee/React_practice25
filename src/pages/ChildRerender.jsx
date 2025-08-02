import React from 'react'

const ChildRerender = ({ onClick }) => {
    console.log("Child Rendered");

    return (
        <div className='border p-4'>
            <p>I am the child</p>

            <button className="bg-red-300 p-4" onClick={onClick}>Child Button</button>
        </div>
    )
}

export default ChildRerender