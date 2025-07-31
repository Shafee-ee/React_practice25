import React, { forwardRef, useImperativeHandle, useRef } from 'react'

const MultiInputChild = forwardRef((props, ref) => {

    const firstRef = useRef();
    const lastRef = useRef();

    useImperativeHandle(ref, () => ({
        focusFirstName: () => {
            firstRef.current.focus();
        },
        focusLastName: () => {
            lastRef.current.focus();
        },
        clearBoth: () => {
            firstRef.current.value = "";
            lastRef.current.value = "";
        }
    }))
    return (
        <div className='p-4 border'>
            <h3>Child:Multi Input</h3>
            <input type="text"
                ref={firstRef}
                placeholder='First Name...'
                className='border p-2 mb-2 block w-full' />
            <input type="text"
                ref={lastRef}
                placeholder='Last Name...'
                className='border p-2 block w-full' />

        </div>
    )
})

export default MultiInputChild