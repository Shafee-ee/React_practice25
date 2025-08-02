import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1 className='bg-green-300 text-center font-bold '>Welcome to React PlayGround</h1>
            <div className='p-10'>
                <button className='py-4 bg-blue-300 rounded-lg px-4 mt-2 hover:bg-blue-400' onClick={() => navigate("/reducer")}>
                    Go UseReducer
                </button>

                <button className='py-4 bg-red-300 rounded-lg px-4 mt-2 ml-5 hover:bg-red-400' onClick={() => navigate("/reducerMem")}>
                    ReduceAgain                </button>
                <button className='py-4 bg-green-300 rounded-lg px-4 mt-2 ml-5 hover:bg-green-400' onClick={() => navigate("/reduceForm")}>
                    ReduceForm                </button>

                <button className='py-4 bg-green-300 rounded-lg px-4  mt-2 ml-5 hover:bg-green-400' onClick={() => navigate("/Parent")}>
                    Parent                </button>

                <button className='py-4 bg-green-300 rounded-lg px-4 mt-2 ml-5 hover:bg-green-400' onClick={() => navigate("/Child")}>
                    Child                </button>

                <button className='py-4 bg-green-300 rounded-lg px-4 mt-2 ml-5 hover:bg-green-400' onClick={() => navigate("/FocusParent")}>
                    FocusParent                </button>

                <button className='py-4 bg-green-300 rounded-lg px-4 mt-2 ml-5 hover:bg-green-400' onClick={() => navigate("/FocusInput")}>
                    FocusInput                </button>

                <button className='py-4 px-4 rounded bg-gray-300 ml-5 mt-2 hover:bg-gray-400' onClick={() => navigate("/MultiInputParent")}>MultiInputParent</button>
                <button className='p-4  rounded  bg-pink-300 hover:bg-pink-400 mt-2' onClick={() => navigate("/ParentRerender")}> Parent Re-render</button>

            </div>
        </div>
    )
}

export default Home