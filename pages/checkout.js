import DetailPayment from "@/components/Checkout/DetailPayment";
import CheckoutInform from "@/components/Checkout/checkoutInform";
import CheckoutItem from "@/components/Checkout/checkoutItem";
import Link from "next/link";
import { useState } from "react"

export default function Checkout({product}) {
    const [data, setData] = useState(product)
    

    return (
        <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
            <div className="container-fluid">
                <div className="logo text-md-center text-start pb-50">
                    <Link href="/#">
                        <img src="icon/logoo.png" className="logo" width={130} height={130}/>
                    </Link>
                </div>
                <div className="title-text pt-md-50 pt-0">
                    <h2 className="text-4xl fw-bold color-palette-1 mb-10">Checkout</h2>
                    <p className="text-lg color-palette-1 mb-0">Waktunya meningkatkan semangat bermainmu</p>
                </div>
                <CheckoutItem img={data.img}/>
                <hr/>
                <div className="purchase pt-md-50 pt-30">
                <h2 className="fw-bold text-xl color-palette-1 mb-20">Purchase Details</h2>
                <DetailPayment label="Your Game ID" value="Gulaly Candy"/>
                <DetailPayment label="Order ID" value="#333"/>
                <DetailPayment label="Item" value="60 DM"/>
                <DetailPayment label="Price" value={`Rp ${4228000}`}/>
                
            </div>
            <div className="payment pt-md-50 pb-md-50 pt-10 pb-10">
                <h2 className="fw-bold text-xl color-palette-1 mb-20">Payment Informations</h2>
                <p className="text-lg color-palette-1 mb-20">Your Account Name <span className="purchase-details">Masayoshi
                        Angga Zero</span></p>
                <p className="text-lg color-palette-1 mb-20">Type <span className="payment-details"></span>
                </p>
                <p className="text-lg color-palette-1 mb-20">Bank Name <span className="payment-details">Mandiri</span></p>
                <p className="text-lg color-palette-1 mb-20">Bank Account Name <span className="payment-details">PT Store GG
                        Indonesia</span></p> 
                <p className="text-lg color-palette-1 mb-20">Bank Number <span className="payment-details">1800 - 9090 -
                        2021</span>
                </p>
            </div>
                <CheckoutInform/>
            </div>
        </section>
    )
}
export async function getServerSideProps({params}){
    const res = await fetch('http://localhost:3000/api/product/'+params)
    const product = await res.json()
    return {
      props:{
        product
      }
    }
}