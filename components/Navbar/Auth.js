import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { userService } from "@/services";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Auth(){
    
    const [isLogin, setIsLogin] = useState();

    // const [token, setToken] = useState({
    //     token: ""
    // });
    // const router = useRouter();
    // useEffect(() => {
    //     const token = userService.userValue.token
        
    //     if(!token) {
    //         router.push('/');
    //     }else{
    //         setIsLogin(true);
    //         setToken(token);
    //     }
    // })
    // console.log(userService);

    const logOut = () => {
        userService.logout(token);
        router.push('/');
        setIsLogin(false);
    }

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
                        <li onClick={logOut} className="dropdown-item text-lg color-palette-2"> Log Out</li>
                    </ul>
                </div>
            </li>   
        );
    }
    return (
        <>
            <li className="nav-item my-auto">
                <Link className="btn btn-login d-flex justify-content-center ms-lg-2 rounded-pill"
                    href="/account/login" role="button"> Sign In
                </Link>
            </li>
        </> 
        
        
                         
    
);
}
