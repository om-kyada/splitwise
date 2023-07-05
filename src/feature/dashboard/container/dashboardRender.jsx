import React, { useRef } from 'react'
import "../style/dashboard.css"
import UserSelect from '../component/user-select';

const Dashboard = () => {
    const inputRef = useRef(null);
    const array = [1, 2, 3];
    function settle() {
        const om = inputRef.current.value;
        console.log("om", om / array.length);
    }
    return (
        <>
            <UserSelect />
            <input type="number" placeholder='Enter amount' ref={inputRef} />
            <button onClick={settle}> Settle</button>
        </>
    )
}

export default Dashboard