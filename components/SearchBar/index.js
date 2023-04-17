import React from 'react';
import { BsSearch } from "react-icons/bs";

export default function SearchBar({onChangeInput, value, onFilterType}){
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
            <div className="btn-radio flex" onChange={onFilterType}>
                <input type="radio" name="type" value={'PC'}/>
                <label>PC</label><br/>
                <input type="radio" name="type" value={'Mobile'}/>
                <label>Mobile</label>
                <button className="rounded-pill fw-medium border-0 text-lg">clear</button>
            </div>
        </>
    )
}
