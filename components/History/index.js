import { userService } from "@/services";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Head from "next/head";
import { useEffect, useState } from "react";
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

    const style ={
        color: 'green'
    }

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
                    <div className='container my-3 '>
                        <TableContainer component={Paper} sx={{borderRadius: `1rem`}}>
                            <Table sx={{minWidth: 650}}>
                                <TableHead sx={{ backgroundColor: '#1D394A', height: '50px' }}>
                                    <TableRow>
                                        <TableCell sx={{ fontWeight: 750, color: 'white' }}>Game</TableCell>
                                        <TableCell sx={{ fontWeight: 750, color: 'white' }}>Item</TableCell>
                                        <TableCell sx={{ fontWeight: 750, color: 'white' }}>Price</TableCell>
                                        <TableCell sx={{ fontWeight: 750, color: 'white' }}>Cash Coin</TableCell>
                                        <TableCell sx={{ fontWeight: 750, color: 'white' }}>Status</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data?.map((dataTable, i)=>(
                                    <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 }}}>
                                        <TableCell>{dataTable.name}<br/>{dataTable.type}</TableCell>
                                        <TableCell>{`${dataTable.item}`.concat(' ', dataTable.itemName)}</TableCell>
                                        <TableCell>Rp. {dataTable.totalPrice? titikPrice(dataTable.totalPrice): titikPrice(dataTable.price)}</TableCell>
                                        <TableCell>+ {dataTable.coin}</TableCell>
                                        <TableCell sx={style}>{dataTable.status}</TableCell>
                                    </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>  
                    </div>
                </main>
            </section>
        </>
    );
}

export default History;
