import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import UseReducerExample from "./pages/UseReducerExample";
import ReduceAgain from './pages/ReduceAgain';
import ReduceForm from './pages/ReduceForm';
import Parent from './pages/Parent';
import FocusParent from './pages/FocusParent';
import FocusInput from './pages/FocusInput';
import MultiInputChild from './pages/MultiInputChild';
import MultiInputParent from './pages/MultiInputParent';
import ParentRerender from './pages/ParentRerender';
import ChildRerender from './pages/ChildRerender';
import TempTest from './pages/TempTest';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reducer" element={<UseReducerExample />} />
            <Route path="/reducerMem" element={<ReduceAgain />} />
            <Route path="/reduceForm" element={<ReduceForm />} />
            <Route path="/parent" element={<Parent />} />
            <Route path="/FocusParent" element={<FocusParent />} />
            <Route path="/FocusInput" element={<FocusInput />} />
            <Route path="MultiInputChild" element={<MultiInputChild />} />
            <Route path="/MultiInputParent" element={<MultiInputParent />} />
            <Route path="/ParentRerender" element={<ParentRerender />} />
            <Route path="/ChildRerender" element={<ChildRerender />} />
            <Route path="/temp" element={<TempTest />} />
        </Routes>
    )
}