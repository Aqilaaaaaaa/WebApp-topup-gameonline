import React from "react";
import Link from "next/link";
import Image from 'next/image'; 
import { useState } from "react";
import { BsSearch, BsHouseFill } from "react-icons/bs";


export default function Index(){

    const [show, setShow] = useState(false) 
    const handleShow = () => {
        setShow(false)
    } ;
    // const getNavLinkClass = (path) => {
    //     return props.location.pathname === path ? " active" : "";
    //   };
    return (
        <>
            <section>
                <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/#">
                            <Image src="icon/logo.svg" width={80} height={80}/>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
                                <li className="nav-item d-flex">
                                    <form className="d-flex  rounded" action="action_page.php">
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
                                            <BsSearch />
                                        </button>

                                    )}
                                    </form>
                                    <Link className="nav-link w-6 h-6" type="link" href="/">
                                        <BsHouseFill/>
                                    </Link>
                                </li>
                                <li className="nav-item my-auto">
                                    <a className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
                                        href="./sign-in" role="button">Sign
                                        In</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    );
}
