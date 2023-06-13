import React from "react";
import Link from "next/link"
import { userService } from "@/services"

export default function Banner(){
    return (
        <>
            <section className="header pb-50 " style={{marginTop:"10rem"}}>
                <div className="container-xxl container-fluid">
                    <div className="flex-row d-flex gap-lg-0 gap-5">
                        <div className="col-lg-6 col-12 my-auto mt-200" >
                            <p className="header-title color-palette-2 fs-2">
                                {!userService? "Halo gamers,": `Welcome ${userService?.userValue.name},`}
                                
                            </p>
                            <h1 className="header-title color-palette-1 fw-bold">
                                Topup & Get <span className="d-sm-inline d-none">a</span><span className="d-sm-none d-inline">a
                                </span><span className="underline-blue"> New</span> <br className="d-sm-block d-none"/> <span
                                    className="underline-blue">Experience</span> in Gaming
                            </h1>
                            <p className="mt-30 mb-40 text-lg color-palette-1">We provide millions of ways <br
                                    className="d-md-block d-none"/> to help players become true winners
                            </p>
                            <div className="d-flex flex-lg-row flex-column gap-4">
                                
                                <Link className="btn btn-get text-lg text-black shadow-sm rounded-pill" 
                                    href="#featured-game" 
                                    role="button">
                                    Lets Go
                                </Link>
                            </div>
                        </div>
                        <div className="header poster">
                            <div className="d-flex justify-content-lg-end justify-content-center me-lg-5">
                                <div className="position-relative" data-aos="zoom-in">
                                    <img src="/img/Header-1.png" className="img-fluid" alt="img"/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
