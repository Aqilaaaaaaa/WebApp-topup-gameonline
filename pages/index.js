import React, { useEffect} from 'react'
import AOS from 'aos'
import Head from 'next/head'
import Navbar from "components/Navbar/index"
import Footer from "components/Footer/index"
import Banner from '@/components/Banner';
import Guide from '@/components/Guide'
import Featured from '@/components/Featured'


export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  
  return (
    <>
        <Head>
            <title>CashLess Shop</title>
        </Head>
        <Navbar/>
        <Banner/>
        <Guide/>
        <Featured/>

    
        <section className="reached pt-50 pb-50">
            <div className="container-fluid">
                <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
                    <div className="me-lg-35">
                        <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">290M+</p>
                        <p className="text-lg text-lg-start text-center color-palette-2 m-0">Players Top Up</p>
                    </div>
                    <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
                    <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
                    <div className="me-lg-35 ms-lg-35">
                        <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">12.500</p>
                        <p className="text-lg text-lg-start text-center color-palette-2 m-0">Games Available</p>
                    </div>
                    <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
                    <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
                    <div className="me-lg-35 ms-lg-35">
                        <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">99,9%</p>
                        <p className="text-lg text-lg-start text-center color-palette-2 m-0">Happy Players</p>
                    </div>
                    <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
                    <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
                    <div className="me-lg-35 ms-lg-35">
                        <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">4.7</p>
                        <p className="text-lg text-lg-start text-center color-palette-2 m-0">Rating Worldwide</p>
                    </div>
                </div>
            </div>
        </section>

        
        <section className="story pt-50 pb-50">
            <div className="container-xxl container-fluid">
                <div className="row align-items-center px-lg-5 mx-auto gap-lg-0 gap-4">
                    <div className="col-lg-7 col-12 d-lg-flex d-none justify-content-lg-end pe-lg-60" data-aos="zoom-in">
                        <img src="/img/Header-9.png" width="612" height="452" className="img-fluid" alt=""/>
                    </div>
                    <div className="col-lg-5 col-12 ps-lg-60">
                        <div className="">
                            <h2 className="text-4xl fw-bold color-palette-1 mb-30">Win the battle. Be the Champion.
                            </h2>
                            <p className="text-lg color-palette-1 mb-30">Kami menyediakan jutaan cara untuk<br
                                    className="d-sm-block d-none"/>
                                membantu players menjadi<br className="d-sm-block d-none"/> pemenang sejati</p>
                            <div className="d-md-block d-flex flex-column w-100">
                                <a className="btn btn-read text-lg rounded-pill" href="#" role="button">Read Story</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>

    </>
  )
}
