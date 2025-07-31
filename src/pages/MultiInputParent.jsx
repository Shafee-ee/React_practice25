import React, { useRef } from 'react';
import MultiInputChild from './MultiInputChild';

const MultiInputParent = () => {
    const childRef = useRef();
    const handleFocusFirst = () => {
        childRef.current.focusFirstName();
    }

    const handleFocusLast = () => {
        childRef.current.focusLastName();
    }

    const handleClearBoth = () => {
        childRef.current.clearBoth();
    }

    const handleMarkInvalid = () => {
        childRef.current.markInvalid();
    }
    return (
        <div className='p-6 border-2'>
            <h2>Parent:Multi Input Control</h2>
            <button onClick={handleFocusFirst} className='bg-green-300 p-2 hover:bg-green-400' >
                Focus First Name
            </button>

            <button onClick={handleFocusLast} className='bg-green-400 p-2 hover:bg-green-500'>
                Focus Last Name
            </button>

            <button onClick={handleClearBoth} className='bg-blue-300 p-2 hover:bg-blue-400'>
                Clear Both
            </button>

            <button onClick={handleMarkInvalid} className='bg-blue-300 p-2 hover:bg-blue-400'>
                highlight Input
            </button>

            <div>
                <MultiInputChild ref={childRef} />
            </div>
        </div>
    )
}

export default MultiInputParent