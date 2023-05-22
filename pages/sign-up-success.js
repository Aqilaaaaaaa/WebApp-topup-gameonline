import Link from "next/link"

export default function SignUpSuccess() {
    return (
        <section className="register-success mx-auto pt-md-179 pb-md-179 pt-150 pb-100">
            <div className="container-fluid">
                <div className="text-center">
                    <img src="icon/wallet.png" width={300} height={300}/>
                </div>
                <div className="pt-70 pb-md-50 pb-150">
                    <h2 className="text-4xl fw-bold text-center color-palette-1 mb-10">Pendaftaran Berhasil!</h2>
                    <p className="text-lg text-center color-palette-1 m-0">Selamat bergabung di Cashless Shop<br
                            className="d-sm-block d-none"/>
                        Tingkatkan semangat bermainmu, topup di Cashless Shop!</p>
                </div>
                <div className="button-group d-flex flex-column mx-auto">
                    <Link className="btn btn-top-up fw-medium text-lg rounded-pill" href="/#"
                        role="button">Top Up
                    </Link>
                </div>
            </div>
        </section>
    )
}
