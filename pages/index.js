import React, { useEffect} from 'react'
import AOS from 'aos'
import Head from 'next/head'
import Navbar from "components/Navbar/index"
import Footer from "components/Footer/index"
import Banner from '@/components/Banner';
import Guide from '@/components/Guide'


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


        <section className="featured-game pt-50 pb-50">
            <div className="container-fluid">
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">Our Featured Games This Year
                </h2>
                <div className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
                    data-aos="fade-up">
                    <div className="featured-game-card position-relative">
                        <a href="details">
                            <div className="blur-sharp">
                                <img src="/img/Thumbnail-1.png" width="205" height="270" alt=""/>
                            </div>
                            <div className="cover position-absolute bottom-0 m-32">
                                <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
                                    <div className="game-icon mx-auto">
                                        <svg width="54" height="36" viewBox="0 0 54 36" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M48.8309 6.33404C41.7479 -5.30296 31.0779 2.79304 31.0779 2.79304C30.3859 3.31604 29.1099 3.74604 28.2429 3.74804L25.3849 3.75004C24.5179 3.75104 23.2419 3.32104 22.5509 2.79804C22.5509 2.79804 11.8799 -5.29996 4.79595 6.33704C-2.28605 17.97 0.567947 30.639 0.567947 30.639C1.06795 33.741 2.71595 35.811 5.82595 35.551C8.92695 35.292 15.6579 27.197 15.6579 27.197C16.2139 26.53 17.3789 25.985 18.2439 25.985L35.3779 25.982C36.2439 25.982 37.4079 26.527 37.9629 27.194C37.9629 27.194 44.6949 35.289 47.8009 35.548C50.9069 35.808 52.5589 33.736 53.0559 30.636C53.0549 30.636 55.9139 17.969 48.8309 6.33404ZM20.3739 15.806H16.6999V19.347C16.6999 19.347 15.9219 19.941 14.7179 19.926C13.5159 19.908 12.9719 19.278 12.9719 19.278V15.807H9.50195C9.50195 15.807 9.06895 15.363 8.95295 14.194C8.83895 13.025 9.43195 12.08 9.43195 12.08H13.1069V8.40604C13.1069 8.40604 13.8629 8.00104 14.9499 8.03204C16.0379 8.06604 16.8349 8.47504 16.8349 8.47504L16.8199 12.079H20.2899C20.2899 12.079 20.8959 12.857 20.9459 13.797C20.9959 14.738 20.3739 15.806 20.3739 15.806ZM37.2259 19.842C35.6169 19.842 34.3199 18.541 34.3199 16.934C34.3199 15.324 35.6169 14.026 37.2259 14.026C38.8279 14.026 40.1349 15.324 40.1349 16.934C40.1349 18.542 38.8279 19.842 37.2259 19.842ZM37.2259 11.841C35.6169 11.841 34.3199 10.541 34.3199 8.93404C34.3199 7.32404 35.6169 6.02604 37.2259 6.02604C38.8279 6.02604 40.1349 7.32404 40.1349 8.93404C40.1349 10.542 38.8279 11.841 37.2259 11.841ZM44.4679 16.136C42.8589 16.136 41.5619 14.836 41.5619 13.228C41.5619 11.619 42.8589 10.32 44.4679 10.32C46.0699 10.32 47.3769 11.619 47.3769 13.228C47.3769 14.836 46.0699 16.136 44.4679 16.136Z"
                                                fill="white" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="fw-semibold text-white text-xl m-0">Super Mechs</p>
                                        <p className="fw-light text-white m-0">Mobile</p>
                                    </div>
                                </div>
                            </div>
                        </a>

                    </div>
                    <div className="featured-game-card position-relative">
                        <a href="details">
                            <div className="blur-sharp">
                                <img src="/img/Thumbnail-2.png" width="205" height="270" alt=""/>
                            </div>
                            <div className="cover position-absolute bottom-0 m-32">
                                <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
                                    <div className="game-icon mx-auto">
                                        <svg width="54" height="36" viewBox="0 0 54 36" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M48.8309 6.33404C41.7479 -5.30296 31.0779 2.79304 31.0779 2.79304C30.3859 3.31604 29.1099 3.74604 28.2429 3.74804L25.3849 3.75004C24.5179 3.75104 23.2419 3.32104 22.5509 2.79804C22.5509 2.79804 11.8799 -5.29996 4.79595 6.33704C-2.28605 17.97 0.567947 30.639 0.567947 30.639C1.06795 33.741 2.71595 35.811 5.82595 35.551C8.92695 35.292 15.6579 27.197 15.6579 27.197C16.2139 26.53 17.3789 25.985 18.2439 25.985L35.3779 25.982C36.2439 25.982 37.4079 26.527 37.9629 27.194C37.9629 27.194 44.6949 35.289 47.8009 35.548C50.9069 35.808 52.5589 33.736 53.0559 30.636C53.0549 30.636 55.9139 17.969 48.8309 6.33404ZM20.3739 15.806H16.6999V19.347C16.6999 19.347 15.9219 19.941 14.7179 19.926C13.5159 19.908 12.9719 19.278 12.9719 19.278V15.807H9.50195C9.50195 15.807 9.06895 15.363 8.95295 14.194C8.83895 13.025 9.43195 12.08 9.43195 12.08H13.1069V8.40604C13.1069 8.40604 13.8629 8.00104 14.9499 8.03204C16.0379 8.06604 16.8349 8.47504 16.8349 8.47504L16.8199 12.079H20.2899C20.2899 12.079 20.8959 12.857 20.9459 13.797C20.9959 14.738 20.3739 15.806 20.3739 15.806ZM37.2259 19.842C35.6169 19.842 34.3199 18.541 34.3199 16.934C34.3199 15.324 35.6169 14.026 37.2259 14.026C38.8279 14.026 40.1349 15.324 40.1349 16.934C40.1349 18.542 38.8279 19.842 37.2259 19.842ZM37.2259 11.841C35.6169 11.841 34.3199 10.541 34.3199 8.93404C34.3199 7.32404 35.6169 6.02604 37.2259 6.02604C38.8279 6.02604 40.1349 7.32404 40.1349 8.93404C40.1349 10.542 38.8279 11.841 37.2259 11.841ZM44.4679 16.136C42.8589 16.136 41.5619 14.836 41.5619 13.228C41.5619 11.619 42.8589 10.32 44.4679 10.32C46.0699 10.32 47.3769 11.619 47.3769 13.228C47.3769 14.836 46.0699 16.136 44.4679 16.136Z"
                                                fill="white" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="fw-semibold text-white text-xl m-0">Call of Duty: Modern</p>
                                        <p className="fw-light text-white m-0">Mobile</p>
                                    </div>
                                </div>
                            </div>
                        </a>

                    </div>
                    <div className="featured-game-card position-relative">
                        <a href="details">
                            <div className="blur-sharp">
                                <img src="/img/Thumbnail-3.png" width="205" height="270" alt=""/>
                            </div>
                            <div className="cover position-absolute bottom-0 m-32">
                                <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
                                    <div className="game-icon mx-auto">
                                        <svg width="54" height="36" viewBox="0 0 54 36" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M48.8309 6.33404C41.7479 -5.30296 31.0779 2.79304 31.0779 2.79304C30.3859 3.31604 29.1099 3.74604 28.2429 3.74804L25.3849 3.75004C24.5179 3.75104 23.2419 3.32104 22.5509 2.79804C22.5509 2.79804 11.8799 -5.29996 4.79595 6.33704C-2.28605 17.97 0.567947 30.639 0.567947 30.639C1.06795 33.741 2.71595 35.811 5.82595 35.551C8.92695 35.292 15.6579 27.197 15.6579 27.197C16.2139 26.53 17.3789 25.985 18.2439 25.985L35.3779 25.982C36.2439 25.982 37.4079 26.527 37.9629 27.194C37.9629 27.194 44.6949 35.289 47.8009 35.548C50.9069 35.808 52.5589 33.736 53.0559 30.636C53.0549 30.636 55.9139 17.969 48.8309 6.33404ZM20.3739 15.806H16.6999V19.347C16.6999 19.347 15.9219 19.941 14.7179 19.926C13.5159 19.908 12.9719 19.278 12.9719 19.278V15.807H9.50195C9.50195 15.807 9.06895 15.363 8.95295 14.194C8.83895 13.025 9.43195 12.08 9.43195 12.08H13.1069V8.40604C13.1069 8.40604 13.8629 8.00104 14.9499 8.03204C16.0379 8.06604 16.8349 8.47504 16.8349 8.47504L16.8199 12.079H20.2899C20.2899 12.079 20.8959 12.857 20.9459 13.797C20.9959 14.738 20.3739 15.806 20.3739 15.806ZM37.2259 19.842C35.6169 19.842 34.3199 18.541 34.3199 16.934C34.3199 15.324 35.6169 14.026 37.2259 14.026C38.8279 14.026 40.1349 15.324 40.1349 16.934C40.1349 18.542 38.8279 19.842 37.2259 19.842ZM37.2259 11.841C35.6169 11.841 34.3199 10.541 34.3199 8.93404C34.3199 7.32404 35.6169 6.02604 37.2259 6.02604C38.8279 6.02604 40.1349 7.32404 40.1349 8.93404C40.1349 10.542 38.8279 11.841 37.2259 11.841ZM44.4679 16.136C42.8589 16.136 41.5619 14.836 41.5619 13.228C41.5619 11.619 42.8589 10.32 44.4679 10.32C46.0699 10.32 47.3769 11.619 47.3769 13.228C47.3769 14.836 46.0699 16.136 44.4679 16.136Z"
                                                fill="white" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="fw-semibold text-white text-xl m-0">Mobile Legends</p>
                                        <p className="fw-light text-white m-0">Mobile</p>
                                    </div>
                                </div>
                            </div>
                        </a>

                    </div>
                    <div className="featured-game-card position-relative">
                        <a href="details">
                            <div className="blur-sharp">
                                <img src="/img/Thumbnail-4.png" width="205" height="270" alt=""/>
                            </div>
                            <div className="cover position-absolute bottom-0 m-32">
                                <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
                                    <div className="game-icon mx-auto">
                                        <svg width="54" height="36" viewBox="0 0 54 36" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M48.8309 6.33404C41.7479 -5.30296 31.0779 2.79304 31.0779 2.79304C30.3859 3.31604 29.1099 3.74604 28.2429 3.74804L25.3849 3.75004C24.5179 3.75104 23.2419 3.32104 22.5509 2.79804C22.5509 2.79804 11.8799 -5.29996 4.79595 6.33704C-2.28605 17.97 0.567947 30.639 0.567947 30.639C1.06795 33.741 2.71595 35.811 5.82595 35.551C8.92695 35.292 15.6579 27.197 15.6579 27.197C16.2139 26.53 17.3789 25.985 18.2439 25.985L35.3779 25.982C36.2439 25.982 37.4079 26.527 37.9629 27.194C37.9629 27.194 44.6949 35.289 47.8009 35.548C50.9069 35.808 52.5589 33.736 53.0559 30.636C53.0549 30.636 55.9139 17.969 48.8309 6.33404ZM20.3739 15.806H16.6999V19.347C16.6999 19.347 15.9219 19.941 14.7179 19.926C13.5159 19.908 12.9719 19.278 12.9719 19.278V15.807H9.50195C9.50195 15.807 9.06895 15.363 8.95295 14.194C8.83895 13.025 9.43195 12.08 9.43195 12.08H13.1069V8.40604C13.1069 8.40604 13.8629 8.00104 14.9499 8.03204C16.0379 8.06604 16.8349 8.47504 16.8349 8.47504L16.8199 12.079H20.2899C20.2899 12.079 20.8959 12.857 20.9459 13.797C20.9959 14.738 20.3739 15.806 20.3739 15.806ZM37.2259 19.842C35.6169 19.842 34.3199 18.541 34.3199 16.934C34.3199 15.324 35.6169 14.026 37.2259 14.026C38.8279 14.026 40.1349 15.324 40.1349 16.934C40.1349 18.542 38.8279 19.842 37.2259 19.842ZM37.2259 11.841C35.6169 11.841 34.3199 10.541 34.3199 8.93404C34.3199 7.32404 35.6169 6.02604 37.2259 6.02604C38.8279 6.02604 40.1349 7.32404 40.1349 8.93404C40.1349 10.542 38.8279 11.841 37.2259 11.841ZM44.4679 16.136C42.8589 16.136 41.5619 14.836 41.5619 13.228C41.5619 11.619 42.8589 10.32 44.4679 10.32C46.0699 10.32 47.3769 11.619 47.3769 13.228C47.3769 14.836 46.0699 16.136 44.4679 16.136Z"
                                                fill="white" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="fw-semibold text-white text-xl m-0">Clash of Clans</p>
                                        <p className="fw-light text-white m-0">Mobile</p>
                                    </div>
                                </div>
                            </div>
                        </a>

                    </div>
                    <div className="featured-game-card position-relative">
                        <a href="details">
                            <div className="blur-sharp">
                                <img src="/img/Thumbnail-5.png" width="205" height="270" alt=""/>
                            </div>
                            <div className="cover position-absolute bottom-0 m-32">
                                <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
                                    <div className="game-icon mx-auto">
                                        <svg width="54" height="36" viewBox="0 0 54 36" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M48.8309 6.33404C41.7479 -5.30296 31.0779 2.79304 31.0779 2.79304C30.3859 3.31604 29.1099 3.74604 28.2429 3.74804L25.3849 3.75004C24.5179 3.75104 23.2419 3.32104 22.5509 2.79804C22.5509 2.79804 11.8799 -5.29996 4.79595 6.33704C-2.28605 17.97 0.567947 30.639 0.567947 30.639C1.06795 33.741 2.71595 35.811 5.82595 35.551C8.92695 35.292 15.6579 27.197 15.6579 27.197C16.2139 26.53 17.3789 25.985 18.2439 25.985L35.3779 25.982C36.2439 25.982 37.4079 26.527 37.9629 27.194C37.9629 27.194 44.6949 35.289 47.8009 35.548C50.9069 35.808 52.5589 33.736 53.0559 30.636C53.0549 30.636 55.9139 17.969 48.8309 6.33404ZM20.3739 15.806H16.6999V19.347C16.6999 19.347 15.9219 19.941 14.7179 19.926C13.5159 19.908 12.9719 19.278 12.9719 19.278V15.807H9.50195C9.50195 15.807 9.06895 15.363 8.95295 14.194C8.83895 13.025 9.43195 12.08 9.43195 12.08H13.1069V8.40604C13.1069 8.40604 13.8629 8.00104 14.9499 8.03204C16.0379 8.06604 16.8349 8.47504 16.8349 8.47504L16.8199 12.079H20.2899C20.2899 12.079 20.8959 12.857 20.9459 13.797C20.9959 14.738 20.3739 15.806 20.3739 15.806ZM37.2259 19.842C35.6169 19.842 34.3199 18.541 34.3199 16.934C34.3199 15.324 35.6169 14.026 37.2259 14.026C38.8279 14.026 40.1349 15.324 40.1349 16.934C40.1349 18.542 38.8279 19.842 37.2259 19.842ZM37.2259 11.841C35.6169 11.841 34.3199 10.541 34.3199 8.93404C34.3199 7.32404 35.6169 6.02604 37.2259 6.02604C38.8279 6.02604 40.1349 7.32404 40.1349 8.93404C40.1349 10.542 38.8279 11.841 37.2259 11.841ZM44.4679 16.136C42.8589 16.136 41.5619 14.836 41.5619 13.228C41.5619 11.619 42.8589 10.32 44.4679 10.32C46.0699 10.32 47.3769 11.619 47.3769 13.228C47.3769 14.836 46.0699 16.136 44.4679 16.136Z"
                                                fill="white" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="fw-semibold text-white text-xl m-0">Valorant</p>
                                        <p className="fw-light text-white m-0">Desktop</p>
                                    </div>
                                </div>
                            </div>
                        </a>

                    </div>
                </div>
            </div>
        </section>

    
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
