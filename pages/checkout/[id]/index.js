import DetailPayment from "@/components/Checkout/DetailPayment";
import CheckoutConfirm from "@/components/Checkout/checkoutConfirm";
import CheckoutItem from "@/components/Checkout/checkoutItem";
import { userService } from "@/services";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

export default function index({product}) {
    const [data, setData] = useState(product)
    const [localData, setLocalData] = useState()
    const [total, setTotal] = useState()
    const [isCheckPoint, setIsCheckPoint] = useState(false)
    const [point, setPoint] = useState()
    const router = useRouter()


    const priceFilter = (temp)=>{
        const x = temp?.find((data)=>(data.item == router.query.item))
        return x.price
    }
    const itemNameMap = (temp)=>{
        const x =  temp?.find((data)=>(data.item == router.query.item))
        return x.itemName
    }
    const paymentType =(temp)=>{
        const x = temp?.find((data)=>data.payName == router.query.paymentMethod)
        return x.typePay
    }
    const cointMap =(temp)=>{
        const x =  temp?.find((data)=>(data.item == router.query.item))
        return x.coin
    }
    
    useEffect(()=>{
        getItemLocal()
        setPoint(sumCoin(localData))
    },[])

    const handleCheckPoint =()=>{
        setIsCheckPoint(!isCheckPoint)
        
        let temp = 0
        if(isCheckPoint == false){
            temp = priceFilter(data.priceList) - sumCoin(localData)
            setTotal(temp)
            setPoint(sumCoin(localData))
        }else {
            temp = priceFilter(data.priceList) 
            setTotal(temp)
            setPoint(0)
        }
        
    }

    const getItemLocal =()=>{
        const item = localStorage.getItem('history_payment')
        const parseData = JSON.parse(item)
        const temp = parseData?.filter((data)=>data.email == userService?.userValue.email)
        setLocalData(temp)
    }
    // logic coin pengguna baru dan jumlahin coin 
    const sumCoin =(data)=>{
        if(data){
          let sum=0
          data?.forEach(element => {
            // if(!element.resetCoin){
                sum+=element.coin
            // }
          })
          return sum
        }else{
          return 0
        }
    }
    const totalCoin=(coin)=>{
        if(coin?.resetCoin != 0){
            let temp = 0
            coin?.forEach(i=>{
                temp += (i.resetCoin)
            })
            return (temp)
        }
        // return(x)
    }

    const allCoin =(data)=>{
        return (sumCoin(data)-(totalCoin(data)))
    }
    
    const titikPrice =(numb)=>{
        return numb?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    }
    
    const onCheckout =()=>{
        let temp={
            email: userService?.userValue.email,
            idOrder: router.query.idOrder,
            item: router.query.item,
            type: data.type,
            name: data.name,
            price: priceFilter(data.priceList),
            itemName: itemNameMap(data.priceList),
            coin: cointMap(data.priceList),
            resetCoin: point,
            totalPrice: total
        }
        const dataLocalStorage = localStorage.getItem('history_payment')
        const historyData = dataLocalStorage?[...JSON.parse(dataLocalStorage), temp]:[temp]
        if(dataLocalStorage){
            localStorage.removeItem('history_payment')
        }
        localStorage.setItem('history_payment', JSON.stringify(historyData))
    }
    
    // console.log(sumCoin(localData))

    
    return (
        <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
            <div className="container-fluid">
                <div className="head-box d-flex justify-content-between text-md-center pb-20">
                    <Link href={`/details/${data.id}`}>
                        <button className="border-0 bg-transparent mt-20"><IoIosArrowBack size={30}/></button>
                    </Link>
                    <Link href="/#">
                        <img src="/icon/logo.svg" className="logo" width={130} height={100}/>
                    </Link>
                </div>
                <div className="title-text pt-md-50 pt-0">
                    <h2 className="text-4xl fw-bold color-palette-1 mb-10">Checkout</h2>
                    <p className="text-lg color-palette-1 mb-0">Waktunya meningkatkan semangat bermainmu</p>
                </div>
                <CheckoutItem img={data.img} title={data.name} type={data.type}/>
                <hr/>
                <div className="purchase pt-md-50 pt-30">
                    <h2 className="fw-bold text-xl color-palette-1 mb-20">Purchase Details</h2>
                    <DetailPayment label="Your Game ID" value={router.query.idGame}/>
                    <DetailPayment label="Order ID" value={router.query.idOrder}/>
                    <DetailPayment label="Item" value={`${router.query.item}`.concat(' ',itemNameMap(data.priceList))}/>
                    <DetailPayment label="Price" value={titikPrice(priceFilter(data.priceList))}/>
                    {isCheckPoint? <DetailPayment label="Total Price" value={titikPrice(total)}/>:
                    <DetailPayment label="Total Price" value={titikPrice(priceFilter(data.priceList))}/>}
                    <h2 className="fw-bold text-xl text-danger color-palette-1 mb-20">Use Your Own Coin?</h2>
                    {/* <label className="checkbox-label text-lg color-palette-1">{titikPrice(sumCoin(localData))} cash coin
                        <input onChange={handleCheckPoint} type="checkbox" role="switch" name="type"/>
                        <span className="checkmark"></span>
                    </label> */}
                    <div className="form-check form-switch">
                        <input className="form-check-input" onChange={handleCheckPoint} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label" for="flexSwitchCheckDefault">Rp {titikPrice(allCoin(localData))}</label>
                    </div>
                    
                </div>
                <div className="payment pt-md-50 pb-md-50 pt-10 pb-10">
                    <h2 className="fw-bold text-xl color-palette-1 mb-20">Payment Informations</h2>
                    <p className="text-lg color-palette-1 mb-20">Your Account<span className="purchase-details">{userService?.userValue.email}</span></p>
                    <DetailPayment label="Payment Method" value={router.query.paymentMethod}/>
                    <p className="text-lg color-palette-1 mb-20">Type <span className="payment-details">{paymentType(data.payment)}</span></p>
                </div>
                
                <CheckoutConfirm onSubmit={onCheckout}/>
            </div>
        </section>
    )
}
export async function getServerSideProps({params}){
    const res = await fetch('http://localhost:3000/api/product/'+params.id)
    const product = await res.json()
    return {
      props:{
        product
      }
    }
}
