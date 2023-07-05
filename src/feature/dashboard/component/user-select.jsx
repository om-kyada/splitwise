import React, { useState } from 'react'

function UserSelect() {
    const [user, setuser] = useState([
        { name: "Om", profession: "Frontend" },
        { name: "Dhruvik", profession: "Frontend" },
        { name: "Jay", profession: "backend" },
        { name: "Meet", profession: "QA" },
        { name: "Raj", profession: "project manager" },
        { name: "DHRUVIK", profession: "Frontend" },
        { name: "Gopal", profession: "backend" }
    ])
    console.log(user)
    // const element = [
    //     { name: "Om", profession: "Frontend" },
    //     { name: "Foram", profession: "Frontend" },
    //     { name: "Jay", profession: "backend" },
    //     { name: "Meet", profession: "QA" },
    //     { name: "Raj", profession: "project manager" },
    //     { name: "Krishna", profession: "Frontend" },
    //     { name: "Gopal", profession: "backend" }
    // ]
    const searchFunction = () => {
        console.log("====================om------------------------")
    }
    const op = () => {
        user.map((userName) => {
            return (
                <div>{userName.name}</div>
            )
        })
    }
    return (
        <div>
            <input type="text" placeholder='Select user' onKeyUp={searchFunction} onClick={op} />
            <div>{op()}</div>
        </div>
    )
}

export default UserSelect