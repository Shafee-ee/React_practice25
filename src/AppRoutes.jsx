import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import UseReducerExample from "./pages/UseReducerExample";
import ReduceAgain from './pages/ReduceAgain';
import ReduceForm from './pages/ReduceForm';
import Parent from './pages/Parent';
import Child from './pages/Child';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reducer" element={<UseReducerExample />} />
            <Route path="/reducerMem" element={<ReduceAgain />} />
            <Route path="/reduceForm" element={<ReduceForm />} />
            <Route path="/parent" element={<Parent />} />
            <Route path="/child" element={<Child />} />



        </Routes>
    )
}