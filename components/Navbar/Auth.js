import { userService } from "@/services";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Auth(){
    
    const [isLogin, setIsLogin] = useState();
    const [data, setData] = useState()

    const getItemLocal =()=>{
        const item = localStorage.getItem('history_payment')
        const parseData = JSON.parse(item)
        const temp = parseData?.filter((data)=>data.email == userService?.userValue.email)
        setData(temp)
    }
    useEffect(()=>{
        getItemLocal()
    },[])

    const sumCoin =(data)=>{
        if(data){
          let sum=0
          data?.forEach(element => {
            sum+=element.coin
          });
          return sum
        }else{
          return 0
        }
    }
    const titikPrice =(numb)=>{
        return numb.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    }



    function logOut (){
        userService.logout();
      
    }
    console.log(logOut)

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
                    <li><Link href="/historyPurchase" className="dropdown-item text-lg color-palette-2">Cash Coin : Rp {titikPrice(sumCoin(data))}</Link></li>
                    <li><Link href="/historyPurchase" className="dropdown-item text-lg color-palette-2">History Purchase</Link></li>
                    <li onClick={logOut} className="dropdown-item text-lg color-palette-2"> Log Out</li>
                </ul>
            </div>
        </li>   
    );
}
