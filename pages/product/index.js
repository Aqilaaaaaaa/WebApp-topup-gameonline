import Head from "next/head";
import CardFeatured from "@/components/Featured/cardFeatured";
import SearchBar from "@/components/SearchBar";
import { useState, useEffect } from "react";
import { Grid, Pagination} from "@mui/material"
import usePagination from "./usePagination"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";

const DynamicCard = dynamic(() => import("@/components/Featured/cardFeatured"), {
    loading: () => <p>loading....</p>,
    ssr: false,
  });
  

export default function index({product}){
    const [data,setData] = useState(product)
    const [search,setSearch] = useState("")
    const [type, setType] = useState("")
    const [page, setPage] = useState(1)

  // pagination
    const PER_PAGE = 10
    const count = Math.ceil(data.length/PER_PAGE)
    const _DATA = usePagination(data, PER_PAGE)
    const handleChange =(e, p)=>{
        setPage(p)
        _DATA.jump(p)
    }

    const handleSearchData = (e) =>{
        setSearch(e.target.value);
    }

    const handleType = (e) => {
        setType(e.target.value);
        
    }

    const handleCancelBtn = () => {
        setData(product)
        setType(false)
        setSearch("")
    }
    

    const searchData = (temp) => {
        if(!search){
            return temp
        } 
        const searchLowerCase = search.toLowerCase()
        const foundData = data.filter((data) => data.name.toLowerCase().includes(searchLowerCase))
        return foundData
    }

    const filterType = (temp) =>{
        if(!type){
            return temp
        }
        const filterRadio = temp.filter((data)=>(data.type == type))
        return filterRadio
    }

    useEffect(()=> {
        let dataTemp = filterType(product)
        dataTemp = searchData(dataTemp)
        setData(dataTemp)
    }, [search, type])

    return (
        <>
            <Head>
                <title>CashLess Shop | All Game</title>
                <meta name="description" content="CashLess membantu anda agar semangat bermain" />
                <link rel="icon" href="/icon/logo.svg" />
            </Head>
            <Navbar/>
            <div className="product container my-5 ">
                <SearchBar
                    value={search}
                    onChangeInput={handleSearchData}
                    onFilterType={handleType}
                    onCancel={handleCancelBtn}
                />
                <div className="product-item flex d-flex flex-wrap gap-5 justify-content-center">
                    {data
                        ?.length !=0 && _DATA.currentData()
                        .map((data) => (
                            <div key={data.id}>
                                <DynamicCard id={data.id} img={data.img} title={data.name} type={data.type}/>
                            </div>
                        )) }
                    <Grid 
                        container
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        spacing={2}>
                        <Grid item xs={3}>
                            <Pagination
                            count={count}
                            page={page}
                            variant="outlined"
                            shape="rounded"
                            onChange={handleChange}
                            color="primary"
                            boundaryCount={2}
                            />
                        </Grid>
                    </Grid>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export async function getServerSideProps(){
    try{
        const res = await fetch("https://cashless-shop.vercel.app/api/product")
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
        props: {
            product
        }
    }
}
