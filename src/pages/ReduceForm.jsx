import React, { useReducer } from 'react';

const initialForm = {
    email: '',
    password: ''
};

function formReducer(state, action) {
    switch (action.type) {
        case 'SET_EMAIL':
            return { ...state, email: action.payload }
        case 'SET_PASSWORD':
            return { ...state, password: action.payload }
        case 'RESET':
            return initialForm;
        default:
            return state;
    }
}

const ReduceFrom = () => {

    const [state, dispatch] = useReducer(formReducer, initialForm);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login With:', state);
        dispatch({ type: 'RESET' })
    }
    return (
        <form onSubmit={handleSubmit} className='p-4'>
            <input type="email"
                placeholder='Email'
                value={state.email}
                onChange={(e) => dispatch({ type: 'SET_EMAIL', payload: e.target.value })} />
            <br />
            <input type="password"
                placeholder='Password'
                value={state.password}
                onChange={(e) => dispatch({ type: 'SET_PASSWORD', payload: e.target.value })} />
            <br />
            <button type='submit' >Login</button>
            <button type="button" onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
        </form>
    )
}

export default ReduceFrom