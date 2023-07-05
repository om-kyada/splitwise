import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AddExpense from "../../addExpanse/container/addexpense";
import Dashboard from "../../dashboard/container/dashboardRender";
const Routers = () => {
    return (
        <BrowserRouter>

            <Routes>
                <Route path='/' element={<Navigate replace to='/home' />} />
                <Route path="/home" element={<AddExpense />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>

        </BrowserRouter>
    );
};
export default Routers;
