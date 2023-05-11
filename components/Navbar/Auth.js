import Link from "next/link";
import Image from "next/image";

export default function Auth(props){
    const {isLogin} = props;
    if (isLogin) {
        return (
            <li className="nav-item my-auto dropdown d-flex">
                <div className="vertical-line d-lg-block d-none"></div>
                <div>
                    <Link className="dropdown-toggle ms-lg-40" href="#" role="button" id="dropdownMenuLink"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <Image src="/img/avatar-1.png" 
                            className="rounded-circle" width="40" height="40"
                           alt=""/>
                    </Link>

                    <ul className="dropdown-menu border-0" aria-labelledby="dropdownMenuLink">
                        <li><Link href="/historyPurchase" className="dropdown-item text-lg color-palette-2">Cash Coin : Rp 15.000</Link></li>
                        <li><Link href="/historyPurchase" className="dropdown-item text-lg color-palette-2">History Purchase</Link></li>
                        <li><Link href="/#" className="dropdown-item text-lg color-palette-2">Log Out</Link></li>
                    </ul>
                </div>
            </li>   
        );
    }
    return (
        <>
            <li className="nav-item my-auto">
                <Link className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
                    href="/sign-in" role="button"> Sign In
                </Link>
            </li>
        </> 
        
        
                         
    
);
}
