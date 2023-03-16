import React, { useEffect} from 'react'
import AOS from 'aos'
import Head from 'next/head'
import Navbar from "components/Navbar/index"
import Footer from "components/Footer/index"
import Banner from '@/components/Banner';
import Guide from '@/components/Guide'
import Featured from '@/components/Featured'


export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  
  return (
    <>
        <Head>
            <title>CashLess Shop</title>
        </Head>
        <Navbar/>
        <Banner/>
        <Guide/>
        <Featured/>
        <Footer/>

    </>
  )
}
