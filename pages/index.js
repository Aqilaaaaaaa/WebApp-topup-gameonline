import React, { } from "react"
import AOS from "aos"
import Head from "next/head"
import Banner from "@/components/Banner";
import Guide from "@/components/Guide"
import Featured from "@/components/Featured"
import { useState, useEffect } from "react"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function Home({product}) {
  const [popular, setPopular] = useState()
  useEffect(() => {
    AOS.init();
  });

  
  
  useEffect(() => {
    const temp = product.filter((popular) => popular.rate >= 4)
    setPopular(temp)
  },[])

  
  return (
    <>
        <Head>
            <title>CashLess Shop</title>
            <meta name="description" content="CashLess membantu anda agar semangat bermain" />
            <link rel="icon" href="/icon/logo.svg" />
        </Head>
        <Navbar/>
        <Banner/>
        <Guide/>
        <Featured dataProduct={popular}/>
        <Footer/>
    </>
  )
}
export async function getServerSideProps(){
  try{
    const res = await fetch("https://cashless-shop-three.vercel.app/api/product")
    const product = await res.json()
    return {
      props:{
        product
      }
    }
  }
  catch(err){
    console.error(err)
  }
  return {
    props:{
      product
    }
  }
}
