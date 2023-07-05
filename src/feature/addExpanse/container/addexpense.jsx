import { Link } from "react-router-dom";
import "../style/addExpanse.css"
import { useState } from "react";

const AddExpense = () => {
    const [name, setName] = useState("");
    const [artists, setArtists] = useState([]);
    const [isFieldEmpty, setIsFieldEmpty] = useState(false);
    let id = 0;


    if (name !== '') {
        id = id + 1;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name !== '') {
            setArtists([...artists, { id: id + 1, name: name }]);
            setName('');
            setIsFieldEmpty(false);
        }
        else {
            setIsFieldEmpty(true);
        }
    };

    return (
        <>
            <div>
                <Link to="/dashboard">
                    <button>
                        Add Expense
                    </button>
                </Link>
                <div className="new-user">
                    <form>
                        <input type="text" value={name} name='expense' onChange={e => setName(e.target.value)} />
                        {isFieldEmpty && <p className="error-message">Input is required</p>}
                        <button className="new-user-add" type="submit" onClick={handleSubmit}
                        >+</button>
                    </form>
                </div>
                {artists.map((artist, index) => (
                    <li key={index}>{artist.name}</li>
                ))}
            </div >
        </>
    );
};
export default AddExpense;