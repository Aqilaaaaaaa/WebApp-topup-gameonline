import React from "react";
import Link from "next/link";
import { useState } from "react";
// import { BsSearch, BsHouseFill } from "react-icons/bs";
import Auth from "./Auth";
import ToogleNav from "./ToogleNav";


export default function Navbar(){

    const [show, setShow] = useState(false) 
    const handleShow = () => {
        setShow(false)
    } ;
   
    return (
        <>
            <section>
                <nav className="navbar navbar-expand-lg navbar-light pt-lg-10 pb-lg-30 pt-10 pb-30">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/#">
                            <img src="icon/logoo.png" width={100} height={100}/>
                        </a>
                        <ToogleNav/>
                        <div className="collapse navbar-collapse color-palette-1" id="navbarNav">
                            <ul className="navbar-nav ms-auto gap-lg-0 gap-2">
                                <li className="nav-item my-auto">
                                    <div className="d-flex rounded" action="action_page.php">
                                        {show ?(
                                            <input type="search" 
                                            className="form-control rounded border"  
                                            placeholder="Search.." 
                                            name="search"
                                            onClick={() => setShow(true)}
                                            />

                                        ):(
                                            <button 
                                            className="border border-light bg-transparent border-0"
                                            onClick={() => setShow(true)}>
                                                Search
                                            </button>
                                        )}
                                    </div>
                                </li>
                                <li className="nav-item my-auto">
                                    <Link className="nav-link active color-palette-1" href="/#">
                                        Home
                                    </Link>
                                </li>
                                <Auth isLogin/>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    );
}
