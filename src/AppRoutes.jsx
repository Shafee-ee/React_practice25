import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import UseReducerExample from "./pages/UseReducerExample";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reducer" element={<UseReducerExample />} />
        </Routes>
    )
}