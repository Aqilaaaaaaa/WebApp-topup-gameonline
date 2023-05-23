import DetailPayment from "@/components/Checkout/DetailPayment";
import CheckoutConfirm from "@/components/Checkout/checkoutConfirm";
import CheckoutItem from "@/components/Checkout/checkoutItem";
import { userService } from "@/services";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

export default function index({product}) {
    const [data, setData] = useState(product)
    const router = useRouter()
    console.log(router)
    console.log(data)

    const priceFilter = (data)=>{
        const dataPrice = data.filter((item)=> item == router.query.item)
        return dataPrice
    }

    return (
        <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
            <div className="container-fluid">
                <div className="head-box d-flex justify-content-between text-md-center pb-20">
                    <Link href={`/details/${data.id}`}>
                        <button className="border-0 bg-transparent mt-20"><IoIosArrowBack size={30}/></button>
                    </Link>
                    <Link href="/#">
                        <img src="/icon/logoo.png" className="logo" width={130} height={100}/>
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
                <DetailPayment label="Item" value={router.query.item}/>
                <DetailPayment label="Price" value={priceFilter(data.priceList)}/>

            </div>
            <div className="payment pt-md-50 pb-md-50 pt-10 pb-10">
                <h2 className="fw-bold text-xl color-palette-1 mb-20">Payment Informations</h2>
                <DetailPayment label="Payment Method" value={router.query.paymentMethod}/>
                <p className="text-lg color-palette-1 mb-20">Your Account<span className="purchase-details">{userService?.userValue.email}</span></p>
                <p className="text-lg color-palette-1 mb-20">Type <span className="payment-details"></span>
                </p>
            </div>
                <CheckoutConfirm/>
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
