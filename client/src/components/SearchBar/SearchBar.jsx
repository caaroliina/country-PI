import style from "./SearchBar.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SearchBar() {
    const navigate = useNavigate();
    const [name, setName] = useState("");

    const searchCountry = async () => {
        try {
            const response = await axios.get(
            `http://localhost:3001/countries?name=${name}`
            );
            const country = response.data;
            const id = country.id;
            navigate(`/detail/${id}`);
        } catch (error) {
            console.log("Error searching country:", error);
        }
    };

    const handleChange = (event) => {
        setName(event.target.value);
    };

    return (
        <div className={style.bonita}>
            <input
            placeholder="Search country"
            type="search"
            value={name}
            onChange={handleChange}
            />
            <button type="button" onClick={searchCountry}>
            Search
            </button>
        </div>
    );
}

export default SearchBar;