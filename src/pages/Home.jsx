import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1 className='bg-green-300 text-center font-bold '>Welcome to React PlayGround</h1>
            <div className='p-10'>
                <button className='py-4 bg-blue-300 rounded-lg px-4 hover:bg-blue-400' onClick={() => navigate("/reducer")}>
                    Go UseReducer
                </button>
            </div>
        </div>
    )
}

export default Home