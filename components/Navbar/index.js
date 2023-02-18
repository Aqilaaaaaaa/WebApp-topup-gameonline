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
                <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/#">
                            <img src="icon/logo.svg" width={80} height={80}/>
                        </a>
                        <ToogleNav/>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
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
                                            className="border border-light bg-transparent"
                                            onClick={() => setShow(true)}>
                                                Search
                                            </button>
                                        )}
                                    </div>
                                </li>
                                <li className="nav-item my-auto">
                                    <Link className="nav-link active" href="/#">
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
