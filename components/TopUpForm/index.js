import Link from "next/link"

export default function TopUpForm(){
    return(
        <>
            <form action="./checkout.html" method="POST">
                <div className="md-50">
                    
                        <label for="ID" className="form-label text-lg fw-medium color-palette-1 mb-10" >User
                            ID</label>
                        <input type="text" className="form-control rounded-pill text-lg" id="ID" name="ID"
                            aria-describedby="UserID" placeholder="Enter your ID"/>
                    
                </div>
                <div className=" pb-md-30 pt-30 pb-20">
                    <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">Nominal Top Up</p>
                    <div className="row justify-content-between">
                        <label className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
                            for="topup1">
                            <input className="d-none" type="radio" id="topup1" name="topup" value="topup1"/>
                            <div className="detail-card">
                                <div className="d-flex justify-content-between">
                                    <p className="text-3xl color-palette-1 m-0"><span className="fw-medium">5</span>
                                        DM
                                    </p>
                                    <svg id="icon-check" width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="10" cy="10" r="10" fill="#CDF1FF" />
                                        <path d="M5.83301 10L8.46459 12.5L14.1663 7.5" stroke="#00BAFF"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <p className="text-lg color-palette-1 m-0">Rp 2000</p>
                            </div>
                        </label>
                    </div>
                </div>
                <div className="pb-md-50 pb-20">
                    <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">Payment Method</p>
                    <fieldset id="paymentMethod">
                        <div className="row justify-content-between">
                            <label className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
                                for="transfer">
                                <input className="d-none" type="radio" id="transfer" name="paymentMethod"
                                    value="transfer"/>
                                <div className="detail-card">
                                    <div className="d-flex justify-content-between">
                                        <p className="text-3xl color-palette-1 fw-medium m-0">Bank Transfer</p>
                                        <svg id="icon-check" width="20" height="20" viewBox="0 0 20 20"
                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="10" cy="10" r="10" fill="#CDF1FF" />
                                            <path d="M5.83301 10L8.46459 12.5L14.1663 7.5" stroke="#00BAFF"
                                                stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <p className="text-lg color-palette-1 m-0">Worldwide Available</p>
                                </div>
                            </label>
                            <label className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
                                for="indomaret">
                                <input className="d-none" type="radio" id="indomaret" name="paymentMethod" value="indomaret"/>
                                <div className="detail-card">
                                    <div className="d-flex justify-content-between">
                                        <p className="text-3xl color-palette-1 fw-medium m-0">Indomaret</p>
                                        <svg id="icon-check" width="20" height="20" viewBox="0 0 20 20"
                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="10" cy="10" r="10" fill="#CDF1FF" />
                                            <path d="M5.83301 10L8.46459 12.5L14.1663 7.5" stroke="#00BAFF"
                                                stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <p className="text-lg color-palette-1 m-0">Offline Store</p>
                                </div>
                            </label>
                            <label className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
                                for="ovo">
                                <input className="d-none" type="radio" id="ovo" name="paymentMethod" value="ovo"/>
                                <div className="detail-card">
                                    <div className="d-flex justify-content-between">
                                        <p className="text-3xl color-palette-1 fw-medium m-0">OVO</p>
                                        <svg id="icon-check" width="20" height="20" viewBox="0 0 20 20"
                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="10" cy="10" r="10" fill="#CDF1FF" />
                                            <path d="M5.83301 10L8.46459 12.5L14.1663 7.5" stroke="#00BAFF"
                                                stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <p className="text-lg color-palette-1 m-0">Digital Wallet</p>
                                </div>
                            </label>
                            <label className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
                                for="dana">
                                <input className="d-none" type="radio" id="dana" name="paymentMethod" value="dana"/>
                                <div className="detail-card">
                                    <div className="d-flex justify-content-between">
                                        <p className="text-3xl color-palette-1 fw-medium m-0">DANA</p>
                                        <svg id="icon-check" width="20" height="20" viewBox="0 0 20 20"
                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="10" cy="10" r="10" fill="#CDF1FF" />
                                            <path d="M5.83301 10L8.46459 12.5L14.1663 7.5" stroke="#00BAFF"
                                                stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <p className="text-lg color-palette-1 m-0">Digital Wallet</p>
                                </div>
                            </label>
                            <label className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
                                for="spay">
                                <input className="d-none" type="radio" id="spay" name="paymentMethod" value="spay"/>
                                <div className="detail-card">
                                    <div className="d-flex justify-content-between">
                                        <p className="text-3xl color-palette-1 fw-medium m-0">ShopeePay</p>
                                        <svg id="icon-check" width="20" height="20" viewBox="0 0 20 20"
                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="10" cy="10" r="10" fill="#CDF1FF" />
                                            <path d="M5.83301 10L8.46459 12.5L14.1663 7.5" stroke="#00BAFF"
                                                stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <p className="text-lg color-palette-1 m-0">Digital Wallet</p>
                                </div>
                            </label>
                            <label className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
                                for="GoPay">
                                <input className="d-none" type="radio" id="GoPay" name="paymentMethod" value="oGoPayvo"/>
                                <div className="detail-card">
                                    <div className="d-flex justify-content-between">
                                        <p className="text-3xl color-palette-1 fw-medium m-0">GoPay</p>
                                        <svg id="icon-check" width="20" height="20" viewBox="0 0 20 20"
                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="10" cy="10" r="10" fill="#CDF1FF" />
                                            <path d="M5.83301 10L8.46459 12.5L14.1663 7.5" stroke="#00BAFF"
                                                stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <p className="text-lg color-palette-1 m-0">Digital Wallet</p>
                                </div>
                            </label>
                            <div className="col-lg-4 col-sm-6">
                                
                            </div>
                        </div>
                    </fieldset>
                </div>
                {/* <div className="pb-50">
                    <label for="bankAccount" className="form-label text-lg fw-medium color-palette-1 mb-10">Bank
                        Account
                        Name</label>
                    <input type="text" className="form-control rounded-pill text-lg" id="bankAccount"
                        name="bankAccount" aria-describedby="bankAccount"
                        placeholder="Enter your Bank Account Name"/>
                </div> */}
                <div className="d-sm-block d-flex flex-column w-100">
                    <Link href="./checkout" type="submit"
                        className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg">Continue
                    </Link>
                </div>
            </form>
        </>
    )
}
