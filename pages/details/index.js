import Navbar from "@/components/Navbar"
import TopUpForm from "@/components/TopUpForm"
import TopUpItem from "@/components/TopUpForm/TopUpItem"

export default function Details() {
    return (
        <>
            <Navbar/>
            <section className="detail pt-lg-60 pb-50 .bg-secondary">
                <div className="container-xxl container-fluid">
                    <div className="detail-header pb-50 pt-50">
                        <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10 ">CashLess</h2>
                        <p className="text-lg color-palette-1 mb-0">Grab Your Own Things Here</p>
                    </div>
                    <div className="form col">
                        <TopUpItem
                            img="Thumbnail-1"
                        />
                        <TopUpForm/>
                    </div>
                    {/* <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
                            <TopUpItem />
                        </div>
                        
                        <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
                            
                            
                        </div>
                    </div> */}
                </div>
            </section>
        </>

    )
}
