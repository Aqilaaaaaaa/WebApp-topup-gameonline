import React from 'react';
import { BsSearch } from "react-icons/bs";

export default function SearchBar({onChangeInput, value, onFilterType, onCancel}){
    return (
        <>
            <div className="search flex d-flex rounded my-5" action="action_page.php">
                <input type="text" 
                className="form-control rounded border"  
                placeholder="Search Game" 
                name="search"
                value={value}
                onChange={onChangeInput}
                />
                <button 
                    className="border border-light bg-transparent border-0">
                    <BsSearch className="m-2"/>
                </button>
            </div>
            <div className="btn-radio flex-row d-flex" onChange={onFilterType}>
                <input type="radio" name="type" value={'PC'}/>
                <label className="my-2">PC</label><br/>
                <input type="radio" name="type" value={'Mobile'}/>
                <label className="my-2">Mobile</label>
                <button className="btn-cancel rounded-pill fw-medium border-0 btn-lg" onClick={onCancel}>Cancel</button>
            </div>
        </>
    )
}
