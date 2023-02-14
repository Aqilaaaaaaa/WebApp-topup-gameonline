import React from "react";
import Link from "next/link";
import Image from 'next/image';
import fas from '@fortawesome/free-solid-svg-icons'
FiSearch


export default function Index(props){
    // const getNavLinkClass = (path) => {
    //     return props.location.pathname === path ? " active" : "";
    //   };
    return (
        <>
            <section>
                <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/#">
                            <Image src="icon/logo.svg" width={60} height={60}/>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
                                <div>
                                    <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                                    
                                </div>
                                <li className="nav-item">
                                    <Link className="nav-link" type="link" href="/">
                                        Home
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
