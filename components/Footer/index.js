import Link from "next/link";
import Image from "next/image";

export default function Footer(){
    return (
        <>
            <section className="footer pt-50">
                <footer>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-4 text-lg-start text-center">
                                <Link href="" className="mb-30">
                                    <Image src="/icon/logo.svg" width={130} height={130}/>
                                </Link>
                                
                                <p className="mt-30 text-light mb-30">Copyright 2023. All Rights Reserved.</p>
                            </div>
                            <div className="col-lg-8 mt-lg-0 mt-20 ">
                                <div className="row gap-sm-0 ">
                                    <div className="col-md-4 col-6 mb-lg-0 mb-25">
                                        <p className="text-light fw-semibold mb-12">Company</p>
                                        <ul className="list-unstyled ">
                                            <li className="mb-6">
                                                <Link href="" className=" text-light text-decoration-none">About Us</Link >
                                            </li>
                                            <li className="mb-6">
                                                <Link href="" className=" text-light text-decoration-none">Press
                                                    Release</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-4 col-6 mb-lg-0 mb-25 ">
                                        <p className=" text-light fw-semibold mb-12">Support</p>
                                        <ul className="list-unstyled text-light">
                                            <li className="mb-6">
                                                <Link href="" className=" text-light text-decoration-none">Refund
                                                    Policy</Link>
                                            </li>
                                            <li className="mb-6">
                                                <Link href="" className=" text-light text-decoration-none">Unlock
                                                    Rewards</Link>
                                            </li>
                                            <li className="mb-6">
                                                <Link href="" className=" text-light text-decoration-none">Live
                                                    Chatting</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
                                        <p className=" text-light fw-semibold mb-12">Connect</p>
                                        <ul className="list-unstyled">
                                            <li className="mb-6">
                                                <Link href="mailto: cashless.shop@gmail.com<"
                                                    className=" text-light text-decoration-none">cashless.shop@gmail.com</Link>
                                            </li>
                                            <li className="mb-6">
                                                <Link href="http://maps.google.com/?q=Pasific 12,
                                                Jakarta Selatan" className=" text-light text-decoration-none">Pasific
                                                    12,
                                                    Jakarta Selatan</Link>
                                            </li>
                                            <li className="mb-6">
                                                <Link href="tel: 02111229090"
                                                    className=" text-light text-decoration-none">021 - 1122 -
                                                    9090</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </section>

        </>
    );
};
