import { useState } from "react";
import { Link } from "react-router-dom";
import "../style/addExpanse.css";
import { IconPlus } from "../../../component/icon/icons";

const AddExpense = () => {
    const [id, setId] = useState(1);
    const [name, setName] = useState("");
    const [artists, setArtists] = useState([]);
    const [active, setActive] = useState(true);
    const [isFieldEmpty, setIsFieldEmpty] = useState(false);

    return (
        <>
            <div className="new-user-back-img">

                <div className="new-user">
                    <form>
                        <div>
                            <div className="input-error-message">
                                <input type="text" value={name} name='expense' onChange={e => setName(e.target.value)} placeholder="Enter The Member" />
                                {isFieldEmpty && <p className="error-message">Enter minimum 3 Name</p>}
                            </div>
                            <button className="new-user-add" type="submit" onClick={(e) => {
                                e.preventDefault();
                                if (name !== '') {
                                    setArtists([...artists, { id: id, name: name }]);
                                    setName('');
                                    setId(prevId => prevId + 1);
                                    setIsFieldEmpty(false);
                                    id === 3 && setActive(false);
                                    // id >= 3 && setActive(false);
                                    console.log(id, name)
                                }
                                else {
                                    setIsFieldEmpty(true);
                                    id === 3 && setActive(true);
                                };
                            }}
                            ><IconPlus /></button>
                        </div>

                        <div className="member-lists">
                            <h4 className="member-list-title">Member List</h4>
                            {artists.map((artist, index) => (
                                <li key={index}>{artist.name}</li>
                            ))}
                        </div>
                    </form>
                    <Link to="/dashboard" state={{ data: artists }}>
                        <button className="add-expense" disabled={active}>
                            Add Expense
                        </button>
                    </Link>
                </div >
            </div >
        </>
    );
};
export default AddExpense;