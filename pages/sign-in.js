import SignInForm from "@/components/SignInForm"
import Link from "next/link"

export default function SignIn(){
    return (
        <section className="sign-in mx-auto">
            <div className="row">
                <div className="col-xxl-6 col-lg-6 my-auto py-lg-0 pt-lg-50 pb-lg-50 pt-30 pb-47 px-0">
                    <form action="">
                        <div className="container mx-auto">
                            <SignInForm/>
                        </div>
                    </form>
                </div>
                <div className="poster col-xxl-6 col-lg-6 text-center pt-lg-145 pb-lg-150 d-lg-block d-none">
                    <img src="img/Header-9.png" width="502" height="391.21" className="img-fluid pb-50" alt=""/>
                    <h2 className="text-4xl fw-bold mb-30">Win the battle.<br/>
                        Be the Champion.</h2>
                    <p className=" m-0">Kami menyediakan jutaan cara untuk<br/> membantu players menjadi<br/>
                        pemenang sejati</p>
                </div>
            </div>
        </section>
    )
}
