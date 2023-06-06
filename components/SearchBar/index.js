import React from "react";
import { BsSearch } from "react-icons/bs";

export default function SearchBar({onChangeInput, value}){
    return (
        <>
            <div className="filter">
                <div className="search flex d-flex rounded my-5" action="action_page.php">
                    <input type="search" 
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
                {/* <div className="btn-radio flex-row d-flex" onChange={onFilterType}>
                    <label className="checkbox-label text-lg color-palette-1 pt-10">PC
                        <input type="radio" name="type" value={"PC"}/>
                        <span className="checkmark"></span>
                    </label>
                    <label className="checkbox-label text-lg color-palette-1 pt-10">Mobile
                        <input type="radio" name="type" value={"Mobile"}/>
                        <span className="checkmark"></span>
                    </label>
                    <button className="btn-cancel d-md-block rounded-pill fw-medium border-0 btn-lg" onClick={onCancel}>Cancel</button>
                </div> */}
            </div>
            
        </>
    )
}
