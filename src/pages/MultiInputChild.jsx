import React, { forwardRef, useRef, useImperativeHandle } from "react";

const MultiInputChild = forwardRef((prop, ref) => {
    const firstRef = useRef();
    const lastRef = useRef();

    useImperativeHandle(ref, () => ({
        focusFirstName: () => {
            firstRef.current.focus();
        },
        clearBoth: () => {
            lastRef.current.value = "";
            firstRef.current.value = "";
        },
        focusLastName: () => {
            lastRef.current.focus();
        },
        markInvalid: () => {
            lastRef.current.classList.add("border-red-200", "border-4")
            firstRef.current.classList.add("border-red-200", "border-4")
            console.log("mark Invalid")
        }
    }))

    return (
        <div>
            <input type="text"
                ref={firstRef}
                placeholder="Enter a name..."
                className="p-3 border-gray-200 border" />

            <input type="text"
                ref={lastRef}
                placeholder="Enter a name..."
                className="p-3 border-gray-200 border" />
        </div>
    )
})

export default MultiInputChild;