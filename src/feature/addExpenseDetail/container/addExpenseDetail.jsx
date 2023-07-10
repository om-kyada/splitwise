import React from 'react'
import { useLocation } from 'react-router-dom'
import '../style/addExpenseDetail.css'

function AddExpenseDetail() {
    const location = useLocation();
    console.log(location)
    const data = location.state.expenses;
    console.log(data);
    const names = location.state.data;
    return (
        <div className='add-expense-detail-container'>
            <h2>
                AddExpenseDetail
            </h2>
            <div className="not-paid">
                {data?.map((userName, index) => {
                    return (<div key={index} className='add-expense-detail'>
                        <table>
                            <tbody>
                                <tr>
                                    <td>

                                        <p>PaidBy: </p>
                                    </td>
                                    <td>
                                        <p>
                                            {userName.paidBy.name}(you)
                                        </p>
                                    </td>
                                </tr>

                                {names?.map((names, index) => {
                                    return (
                                        <><tr>
                                            <td>
                                                <p key={index}>
                                                    {names.name}
                                                </p>
                                            </td>
                                            <td>
                                                <p className="divide-amount">₹ {userName.paidBy.name === names.name ? 0 : userName.divideAmount}</p>
                                            </td>
                                        </tr>
                                        </>
                                    )
                                })
                                }
                            </tbody>
                        </table>
                    </div>)
                })
                }
            </div>
        </div >
    )
}

export default AddExpenseDetail