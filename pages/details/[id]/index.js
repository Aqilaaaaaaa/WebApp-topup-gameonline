import NominalCard from "@/components/Details/NominalCard"
import PaymentCard from "@/components/Details/PaymentCard"
import TopUpItem from "@/components/Details/TopUpItem"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { IoIosArrowBack } from "react-icons/io"


export default function Details({product}) {
    const [data, setData] = useState(product)
    const [itemGame, setItemGame] = useState("");
    const [payment, setPayment] = useState("");
    const [idGame, setIdGame] = useState("");
    const router = useRouter()

    const onSubmit = (e)=>{
        const orderUser ={
            idOrder: "CHLSS"+Math.floor(Math.random() * 99999),
            userId: idGame,
            item: itemGame,
            paymentMethod: payment,
        }
        e.preventDefault();
        router.push({
            pathname: `/checkout/${data.id}`,
            query: {
                idOrder: orderUser.idOrder,
                idGame: orderUser.userId,
                item: orderUser.item,
                paymentMethod: orderUser.paymentMethod,
                // status: "process"
            }
        })
    }
    const handleSelect = (e) => {
        setItemGame(e.target.value)
    }

    const handlePayment = (e) => {
        setPayment(e.target.value)
    }

    const handleInputIdGame = (e) => {
        setIdGame(e.target.value)
    }
    
    return (
        <>
            <Head>
                <title>CashLess Shop | Detail</title>
                <meta name="description" content="CashLess membantu anda agar semangat bermain" />
                <link rel="icon" href="/icon/logo.svg" />
            </Head>
            <Navbar/>
            <section className="detail pt-lg-60 pb-50 .bg-secondary" style={{marginTop:"8rem"}}>
                <div className="container-xxl container-fluid">
                    <div className="detail-header flex d-flex">
                        <Link href="/#">
                            <button className="border-0 bg-transparent mt-20"><IoIosArrowBack size={30}/></button>
                        </Link>
                        <div className="pb-50 pt-10 mx-4">
                            <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10 ">CashLess</h2>
                            <p className="text-lg color-palette-1 mb-0">Grab Your Own Things Here</p>
                        </div>
                    </div>
                    <div className="form col">
                        <TopUpItem
                            img={data.img}
                            title={data.name}
                            type={data.type}
                            idProduct={data.id}
                        />
                        <form method="POST">
                            <div className="md-50">
                                <label id="ID" className="form-label text-lg fw-medium color-palette-1 mb-10" >User
                                    ID</label>
                                <input type="text" className="form-control rounded-pill text-lg" id="ID" name="ID"
                                    aria-describedby="UserID" placeholder="Enter Your User ID"
                                    onChange={handleInputIdGame}/>
                                {idGame? "" :
                                    <span className="text-danger text-xs">
                                    Fill the User ID box
                                    </span>
                                }
                            </div>
                            <div className="mt-30">
                                <p className="text-lg fw-medium color-palette-1 ">Nominal Top Up</p>
                            </div>
                            <div className="flex-row d-flex flex-wrap pb-md-30 pb-20">
                                {data?.priceList?.map((priceList, i) => (
                                    <NominalCard key={i} item={priceList.item} itemName={priceList.itemName} price={priceList.price} coin={priceList.coin} 
                                    onSelect={handleSelect} value={priceList.item}/>
                                )) }
                            </div>
                            <div className="pb-md-30 pb-20">
                                <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">Payment Methode</p>
                                <div className="flex-row d-flex flex-wrap ">
                                    {data?.payment?.map((payment, i) => (
                                        <PaymentCard key={i} payName={payment.payName} typePay={payment.typePay} onSelectPay={handlePayment} value={payment.payName}/>
                                    )) }
                                </div>
                            </div>
                            {/* <div className="pb-50">
                                <label for="bankAccount" className="form-label text-lg fw-medium color-palette-1 mb-10">Bank
                                    Account
                                    Name</label>
                                <input type="text" className="form-control rounded-pill text-lg" id="bankAccount"
                                    name="bankAccount" aria-describedby="bankAccount"
                                    placeholder="Enter your Bank Account Name"/>
                            </div> */}
                            <div className="detail d-sm-block d-flex flex-column w-100 mt-4">
                                {/* <Link href={`checkout/${data.id}`} type="submit"
                                    className="btn btn-submit rounded-pill fw-medium border-0 text-lg">Continue
                                </Link> */}
                                
                                <button role="button" onClick={onSubmit} disabled={!(idGame && itemGame && payment) ? true : false} className="button-sub rounded-pill fw-medium" >Continue</button>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </section>
            <Footer/>
        </>

    )
}
export async function getServerSideProps({params}){
    const res = await fetch("https://cashless-shop-three.vercel.app/api/product/"+params.id)
    const product = await res.json()
    return {
      props:{
        product
      }
    }
}
