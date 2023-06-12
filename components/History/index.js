import { userService } from "@/services";
import { useEffect, useState } from "react";
import Head from "next/head";
import HistoryRow from "./historyRow";
import HistoryTotal from "./historyTotal";

const History = () => {
    const [data, setData] = useState()

    const titikPrice =(numb)=>{
        return numb?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }
    const sumPrice =(data)=>{
        let sum=0
        if(data){
          data?.forEach(element => {
            if(!element.totalPrice){
                sum+=element.price
            }
          });
           return sum
        }else{
          return sum = 0
        }
    }
    const sumTotalPrice =(data)=>{
        let sum=0
        if(data){
            data?.forEach(element => {
                if(element.totalPrice){
                    sum+=element.totalPrice
                }
            })
            return sum
        }else{
            return sum
        }
    }
    const sumAllPrice =(data)=>{
        let temp = sumPrice(data) + sumTotalPrice(data)
        return temp
    }
    const sumCoin =(data)=>{
        if(data){
          let sum=0
          data?.forEach(element => {
            sum+=element.coin
          })
          return sum
        }else{
          return 0
        }
    }
    const totalCoin=(coin)=>{
        if(coin?.resetCoin != 0){
            let temp = 0
            coin?.forEach(i=>{
                temp += (i.resetCoin)
            })
            return (temp)
        }
    }

    const allCoin =(data)=>{
        return (sumCoin(data)-(totalCoin(data)))
    }
    
    const getItemLocal =()=>{
        const item = localStorage.getItem("history_payment")
        const parseData = JSON.parse(item)
        const temp = parseData?.filter((data)=>data.email == userService?.userValue.email)
        setData(temp)
    }
    useEffect(()=>{
        getItemLocal()
    },[])
    return (
        <>
            <Head>
                <title>CashLess Shop | History </title>
                <meta name="description" content="CashLess membantu anda agar semangat bermain" />
                <link rel="icon" href="/icon/logo.svg" />
            </Head>
            <section className="overview overflow-auto">
                <main className="main-wrapper ps-lg-0">
                    <div className="top-up-categories mb-30">
                        <h2 className="text-4xl fw-bold color-palette-1 mb-30">History Purchase</h2>
                        <div className="wrapper">
                            <HistoryTotal title="Total Spent" total={titikPrice(sumAllPrice(data))}/>
                            <HistoryTotal title="Total Cash Coin" total={titikPrice(allCoin(data))}/>
                        </div>
                    </div>
                    <div className="latest-transaction">
                        <div className="main-content-table overflow-auto">
                            <table className="table table-borderless">
                                <thead>
                                    <tr className="color-palette-1 text-lg fw-bold">
                                        <th className="text-start fw-bold" scope="col">Game</th>
                                        <th className="text-start fw-bold" scope="col ">Item</th>
                                        <th className="text-start fw-bold" scope="col">Price</th>
                                        <th className="text-start fw-bold" scope="col">Cash Coin</th>
                                        <th className="text-start fw-bold" scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data?.map((data, i)=>(
                                        <HistoryRow key={i} title={data.name} type={data.type} item={`${data.item}`.concat(" ",data.itemName)} totalPrice={titikPrice(data.totalPrice)} price={titikPrice(data.price)} coin={data.coin} status={"Success"}/>
                                        // <tr className="align-middle text-center">
                                        //     <td>
                                        //         <div>
                                        //             <span className="float-start icon-status success"></span>
                                        //             <p className="fw-medium text-start color-palette-1 m-0 position-relative">
                                        //                 Success</p>
                                        //         </div>
                                        //     </td>
                                        // </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </section>
        </>
    );
}

export default History;
