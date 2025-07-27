import React from 'react'
import { useReducer } from 'react'
import { useNavigate } from 'react-router-dom';


const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        case 'RESET':
            return { count: 0 };
        default:
            return state;
    }
}

const UseReducerExample = () => {
    const navigate = useNavigate();

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="p-10  flex flex-col gap-4 items-center ">

            <div className='flex bg-blue-100 gap-10 w-full '><h1 className='text-5xl  text-center font-semibold text-gray-700 mb-6 p-3 w-full'>useReducer Demo</h1>
                <button className='px-4 bg-red-600 text-white' onClick={() => navigate("/")}> Home </button>
            </div>
            <button className='font-bold text-4xl bg-green-400 px-4 rounded w-20 p-2 ' onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
            <button className='font-bold text-4xl bg-red-600 px-4 w-20 rounded p-2' onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
            <button className='font-bold text-4xl bg-blue-600 px-4 w-40 rounded p-2' onClick={() => dispatch({ type: "RESET" })}>Reset</button>
            <p className='font-bold text-4xl bg-gray-100 w-full text-center py-2 '>{state.count}</p>

        </div>
    )
}

export default UseReducerExample