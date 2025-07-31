import React, { forwardRef, useRef, useImperativeHandle } from 'react'

const FocusInput = forwardRef((props, ref) => {
    const inputRef = useRef();

    useImperativeHandle(ref, () => ({
        focusInput: () => {
            inputRef.current.focus();
        },
        clearInput: () => {
            inputRef.current.value = "";
        },
        markInvalid: () => {
            inputRef.current.classList.add('border-red-500')
        }

    }))
    return (
        <div>
            <h2>I am a Child (FocusInput)</h2>
            <input type="text" ref={inputRef} className='border p-2 mt-2' placeholder='Type Something...' />
        </div>
    )
});

export default FocusInput