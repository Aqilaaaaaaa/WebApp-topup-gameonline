import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Auth from "./Auth";


export default function Navbar(){
    const [isShow, setShow] = useState(false)

    const handleModal =()=>{
        setShow(!isShow)
        console.log(isShow)
    }
    return (
        <>
            <section>
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <div className="container-fluid">
                        <Link className="navbar-brand" href="/#">
                            <Image src="/icon/logoo.png" width={100} height={100}/>
                        </Link>
                        <button onClick={handleModal} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={isShow?"collapse navbar-collapse color-palette-1":'d-none'} id="navbarNav">
                            <ul onClick={handleModal} className={"navbar-nav ms-auto gap-lg-0 gap-2"}>
                                <li className="nav-item my-auto">
                                    <Link className="nav-link text-lg text-center" href="/#">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item my-auto">
                                    <Link className="nav-link text-lg text-center" href="/product">
                                        All Games
                                    </Link>
                                </li>
                                <Auth/>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    );
}
