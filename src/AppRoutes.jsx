import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import UseReducerExample from "./pages/UseReducerExample";
import ReduceAgain from './pages/ReduceAgain';
import ReduceForm from './pages/ReduceForm';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reducer" element={<UseReducerExample />} />
            <Route path="/reducerMem" element={<ReduceAgain />} />
            <Route path="/reduceForm" element={<ReduceForm />} />


        </Routes>
    )
}