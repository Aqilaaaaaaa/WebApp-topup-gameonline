export default function Details() {
    return (
        <section className="detail pt-lg-60 pb-50 .bg-secondary">
            <div className="container-xxl container-fluid">
                <div className="detail-header pb-50">
                    <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">Top Up</h2>
                    <p className="text-lg color-palette-1 mb-0">Perkuat akun dan jadilah pemenang</p>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
                        <div className="row align-items-center">
                            <div className="col-md-12 col-4">
                                <img src="img/Thumbnail-3.png" width="280" height="380" className="img-fluid" alt=""/>
                            </div>
                            
                            <div className="col-md-12 col-8 d-md-none d-block">
                                <h2 className="text-xl fw-bold color-palette-1 text-start mb-10">Mobile Legends:<br/>
                                    The New Battle 2021</h2>
                                <p className="text-sm color-palette-2 text-start mb-0">Category: Mobile</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
                        
                        <div className="pb-50 d-md-block d-none">
                            <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10 mt-10">Mobile Legends:<br/>
                                The New Battle 2021</h2>
                            <p className="text-lg color-palette-2 mb-0">Category: Mobile</p>
                        </div>
                        <hr/>
                        <form action="./checkout.html" method="POST">
                            <div className="pt-md-50 pt-30">
                                <div className="">
                                    <label for="ID" className="form-label text-lg fw-medium color-palette-1 mb-10">User
                                        ID</label>
                                    <input type="text" className="form-control rounded-pill text-lg" id="ID" name="ID"
                                        aria-describedby="verifyID" placeholder="Enter your ID"/>
                                </div>
                            </div>
                            <div className="pt-md-50 pb-md-50 pt-30 pb-20">
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
                                    <div className="col-lg-4 col-sm-6">
                                        
                                    </div>
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
                                <a href="./checkout" type="submit"
                                    className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg">Continue</a>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
