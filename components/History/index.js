import { userService } from '@/services';
import { useEffect, useState } from 'react';
import HistoryTotal from './historyTotal';
import HistoryRow from './historyRow';

const History = () => {
    const [data, setData] = useState()

    const titikPrice =(numb)=>{
        return numb.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    }
    const sumPrice =(data)=>{
        if(data){
          let sum=0
          data?.forEach(element => {
            sum+=element.price
          });
          return sum
        }else{
          return 0
        }
    }
    const sumCoin =(data)=>{
        if(data){
          let sum=0
          data?.forEach(element => {
            sum+=element.coin
          });
          return sum
        }else{
          return 0
        }
    }

    const getItemLocal =()=>{
        const item = localStorage.getItem('history_payment')
        const parseData = JSON.parse(item)
        const temp = parseData?.filter((data)=>data.email == userService?.userValue.email)
        setData(temp)
    }
    useEffect(()=>{
        getItemLocal()
    },[])

    return (
        <>
            <section className="overview overflow-auto">
                <main className="main-wrapper">
                    <div className="ps-lg-0">
                        <div className="top-up-categories mb-30">
                            <h2 className="text-4xl fw-bold color-palette-1 mb-30">History Purchase</h2>
                            <div className="wrapper">
                                <HistoryTotal title="Total Spent" total={titikPrice(sumPrice(data))}/>
                                <HistoryTotal title="Total Cash Coin" total={titikPrice(sumCoin(data))}/>
                            </div>
                        </div>
                        <div className="latest-transaction">
                            <div className="main-content main-content-table overflow-auto">
                                <table className="table table-borderless">
                                    <thead>
                                        <tr className="color-palette-1">
                                            <th className="text-start fw-bold" scope="col">Game</th>
                                            <th className="text-start fw-bold" scope="col ">Item</th>
                                            <th className="text-start fw-bold" scope="col">Price</th>
                                            <th className="text-start fw-bold" scope="col">Cash Coin</th>
                                            <th className="text-start fw-bold" scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data?.map((data, i)=>(
                                            <HistoryRow title={data.name} type={data.type} item={`${data.item}`.concat(' ',data.itemName)} price={titikPrice(data.price)} coin={data.coin} status={"Success"}/>
                                            // <tr className="align-middle text-center">
                                            //     <th scope="row">
                                            //         <div className="game-title-header">
                                            //             <p className="game-title fw-medium text-start color-palette-1 m-0">{data.name}</p>
                                            //             <p className="text-xs fw-normal text-start color-palette-2 m-0">{data.type}</p>
                                            //         </div>
                                            //     </th>
                                            //     <td>
                                            //         <p className="fw-medium text-start color-palette-1 m-0">{`${data.item}`.concat(' ',data.itemName)}</p>
                                            //     </td>
                                            //     <td>
                                            //         <p className="fw-medium text-start color-palette-1 m-0">Rp {titikPrice(data.price)}</p>
                                            //     </td>
                                            //     <td>
                                            //         <p className="fw-medium text-start color-palette-1 m-0">+{data.coin}</p>
                                            //     </td>
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
                    </div>
                </main>
            </section>
        </>
    );
}

export default History;
