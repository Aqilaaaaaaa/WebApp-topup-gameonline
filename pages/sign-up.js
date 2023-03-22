import SignUpForm from "@/components/SignUpForm";
import Link from "next/link"

export default function SignUp() {
    return (
        <section className="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
            <div className="container mx-auto">
                <form action="">
                    <div className="pb-50">
                        <Link className="navbar-brand" href="/#">
                            <img src="icon/logoo.png" width={100} height={100}/>
                        </Link>
                    </div>
                    <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign Up</h2>
                    <p className="text-lg color-palette-1 m-0">Daftar dan bergabung dengan CashLess</p>
                    <SignUpForm/>
                </form>
            </div>
        </section>
    );
}
