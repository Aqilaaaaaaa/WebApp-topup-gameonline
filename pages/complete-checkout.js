import Link from "next/link"

export default function CompleteCheckout(){
    return (
        <section className="complete-checkout mx-auto pt-lg-145 pb-lg-145 pt-100 pb-80">
            <div className="container-fluid">
                <div className="text-center">
                    <img src="icon/keranjang.svg" width={300} height={300}/>
                </div>
                <div className="pt-70 pb-50">
                    <h2 className="text-4xl fw-bold text-center color-palette-1 mb-10">Checkout Completed</h2>
                    <p className="text-lg text-center color-palette-1 m-0">We will check your payment</p>
                </div>
                <div className="button-group d-flex flex-column mx-auto">
                    <Link className="btn btn-dashboard fw-medium text-lg rounded-pill mb-16"
                        href="/#" role="button">Home</Link>
                    <Link className="btn btn-whatsapp fw-medium text-lg color-palette-1 rounded-pill" href="/historyPurchase"
                        role="button">History Purchase</Link>
                </div>
            </div>
        </section>
    )
}
