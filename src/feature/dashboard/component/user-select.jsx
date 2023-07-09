import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import { IconDownArrow } from '../../../component/icon/icons';
import "../style/dashboard.css"

function UserSelect({ onSelect }) {
    const [isActive, setIsActive] = useState(false);
    const [selected, setIsSelected] = useState("Who paid");
    // console.log(selected)


    const location = useLocation();
    const data = location.state?.data;

    return (
        <div>
            {/* <input type="text" placeholder='Select user' onKeyUp={searchFunction} /> */}
            <div className='dropdown'>
                <div className="dropdown-btn" onClick={(e) => {
                    setIsActive(!isActive);
                }}>
                    <p>
                        {selected}
                    </p>
                    <IconDownArrow />
                </div>
                <div className="dropdown-content"
                    style={{ display: isActive ? "block" : "none" }}>
                    {
                        /*data.length > 0 &&*/ data?.map((userName, index) => {
                        return (<div key={index}
                            className="item"
                            onClick={(e) => {
                                setIsSelected(e.target.textContent);
                                setIsActive(!isActive);
                                onSelect(userName)
                            }}
                        >
                            {userName.name}
                            {/* {console.log(selected)} */}
                        </div>)
                    })
                    }
                </div>
            </div>
        </div >
    )
}

export default UserSelect