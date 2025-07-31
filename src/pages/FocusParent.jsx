import React, { useRef } from 'react';
import FocusInput from './FocusInput';

const FocusParent = () => {

    const childRef = useRef();

    const handleFocus = () => {
        if (childRef.current) {
            childRef.current.focusInput();
        }
    }

    const handleClear = () => {
        if (childRef.current) {
            childRef.current.clearInput();
        }
    }

    const markInvalid = () => {
        if (childRef.current) {
            childRef.current.markInvalid();
        }
    }
    return (
        <div>
            <h1>Parent Component</h1>
            <button className="bg-green-200 px-4 py-4" onClick={handleFocus}>Focus Child Input</button>
            <button className="bg-red-300 px-4 py-4" onClick={handleClear}>Clear Child Input</button>
            <button className='bg-blue-300 px-4 py-4 ' onClick={markInvalid}>Mark Invalid</button>
            <FocusInput ref={childRef} />
        </div>
    )
}

export default FocusParent