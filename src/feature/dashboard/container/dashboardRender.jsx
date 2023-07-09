import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import UserSelect from '../component/user-select';
import "../style/dashboard.css"

const Dashboard = () => {
    const [id, setId] = useState(1);
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");
    const [selectedUser, setSelectedUser] = useState("");
    const [isFieldEmpty, setIsFieldEmpty] = useState(false);
    const [isNegativeValue, setIsNegativeValue] = useState(false)
    const [isActive, setIsActive] = useState(false);
    const [divideAmount, setDivideAmount] = useState(0)
    const location = useLocation();
    const navigate = useNavigate();
    const data = location.state?.data;
    return (
        <>
            <div className="from-container">

                <div className="from-details">
                    <h2 className='add-expense-title'>Add Expense</h2>
                    <UserSelect onSelect={setSelectedUser} />
                    <div className='form-detail' >
                        <input className='amount-detail' type="number" value={amount} placeholder='Enter amount' onChange={e => setAmount(e.target.value)} />
                        <input className='description' type="text" value={description} placeholder='Enter description' onChange={e => setDescription(e.target.value)} />
                        {isFieldEmpty && <p className="error-message">Please fill in all fields</p>}
                        {isNegativeValue && <p className="error-message">Amount cannot be negative</p>}
                        {/* <Link to="/add-expense-detail"> */}
                        <button
                            className='add-expense-btn'
                            type='button'
                            onClick={(e) => {
                                e.preventDefault();
                                if (amount === '' || description === '' || selectedUser === "") {
                                    setIsFieldEmpty(true);
                                } else if (Number(amount) < 0) {
                                    setIsNegativeValue(true);
                                }
                                else {
                                    setIsFieldEmpty(false);
                                    setId(prevId => prevId + 1)
                                    const divide = (amount / data.length).toFixed(2);
                                    setDivideAmount(divide);
                                    setIsActive(!isActive);
                                    setIsNegativeValue(false);


                                    const expense = {
                                        id,
                                        amount,
                                        description,
                                        paidBy: selectedUser,
                                        divideAmount: divide,
                                    };
                                    const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
                                    expenses.push(expense);
                                    localStorage.setItem('expenses', JSON.stringify(expenses));
                                    console.log(expenses)
                                    navigate('/add-expense-detail', { state: { expenses, data } })
                                }

                            }}>
                            Add Expense

                        </button>
                        <div className="expense-detail"
                            style={{ display: isActive ? "block" : "none" }}>
                            <div className="who-paid">
                                <p>
                                    Paid by: {selectedUser.name}(You):
                                </p>
                                <p>
                                    {amount}
                                </p>
                            </div>
                            <div className="not-paid">
                                {data?.map((userName, index) => {
                                    return (<div key={index}>
                                        <p>
                                            {userName.name}
                                        </p>
                                        {/* <p className='divide-amount'>
                                    {divideAmount}
                                </p> */}
                                        <p className="divide-amount">{selectedUser === userName ? 0 : divideAmount}</p>
                                    </div>)
                                })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard