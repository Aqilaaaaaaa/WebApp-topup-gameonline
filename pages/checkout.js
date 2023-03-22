import CheckoutDetail from "@/components/Checkout/checkoutDetail";
import CheckoutInform from "@/components/Checkout/checkoutInform";
import CheckoutItem from "@/components/Checkout/checkoutItem";
import Link from "next/link";

export default function Checkout() {
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
                <CheckoutItem img="img/Thumbnail-3.png"/>
                <hr/>
                <CheckoutDetail/>
                <CheckoutInform/>
            </div>
        </section>
    )
}
