import Image from "next/image";
import Link from "next/link";
import Auth from "./Auth";
import ToogleNav from "./ToogleNav";


export default function Navbar(){

    
   
    return (
        <>
            <section>
                <nav className="navbar navbar-expand-lg navbar-light pt-lg-10 pb-lg-30 pt-10 pb-30">
                    <div className="container-fluid">
                        <Link className="navbar-brand" href="/#">
                            <Image src="/icon/logoo.png" width={100} height={100}/>
                        </Link>
                        <ToogleNav/>
                        <div className="collapse navbar-collapse color-palette-1" id="navbarNav">
                            <ul className="navbar-nav ms-auto gap-lg-0 gap-2">
                                <li className="nav-item my-auto">
                                    <Link className="nav-link text-lg" href="/#">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item my-auto">
                                    <Link className="nav-link text-lg" href="/product">
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
