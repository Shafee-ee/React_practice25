import React, { useReducer } from 'react';

const initialTheme = { mode: "light" }

function themeReducer(state, action) {
    switch (action.type) {
        case 'LIGHT':
            return { mode: 'light' }
        case 'DARK':
            return { mode: 'dark' }
        case 'TOGGLE':
            return { mode: 'toggle' }
        default:
            return state;
    }
}

const ReduceAgain = () => {

    const [state, dispatch] = useReducer(themeReducer, initialTheme)
    return (
        <>
            <div className='bg-pink-200 text-center font-bold text-5xl p-4'>ReduceAgain</div>

            <div style={{
                background: state.mode === 'light' ? '#fff' : '#222',
                color: state.mode === 'light' ? '#000' : '#fff',
                padding: '2rem',
                textAlign: 'center'

            }}>
                <h2>Current Theme:{state.mode}</h2>
                <button className='p-2 bg-gray-100 text-black rounded-lg mr-2' onClick={() => dispatch({ type: 'LIGHT' })}>Light</button>
                <button className='p-2 bg-gray-600 text-white rounded-lg mr-2' onClick={() => dispatch({ type: 'DARK' })}>Dark</button>
                <button className='p-2 bg-green-600 rounded-lg mr-2' onClick={() => dispatch({ type: 'TOGGLE' })}>Toggle</button>
            </div>
        </>
    )
}

export default ReduceAgain