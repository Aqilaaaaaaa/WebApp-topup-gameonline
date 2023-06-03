import { userService } from "@/services";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect, useState } from "react";
import "../styles/404-not-found.css";
import "../styles/checkout.css";
import "../styles/complete-checkout.css";
import "../styles/details.css";
import "../styles/history.css";
import "../styles/homepage.css";
import "../styles/login.css";
import "../styles/navbar-log-in.css";
import "../styles/product.css";
import "../styles/register-success.css";
import "../styles/register.css";
import "../styles/utilities.css";



export default function App({ Component, pageProps }) {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [authorized, setAuthorized] = useState(false)

  useEffect(() => {
    authCheck(router.asPath)

    const hideContent =()=>setAuthorized(false)
    router.events.on("routerChangeStart", hideContent)
    router.events.on("routerChangeComplete", authCheck)

    return ()=>{
      router.events.off("routerChangeStart", hideContent)
      router.events.off("routerChangeComplete", authCheck)
    }
  }, [])

  function authCheck(url){
    setUser(userService.userValue)
    const publicPaths = ["/account/login", "/account/register"]
    const path = url.split("?")[0]
    if(!userService.userValue && !publicPaths.includes(path)){
      setAuthorized(false)
      router.push({
        pathname:"/account/register",
        query:{returnUrl: router.asPath}
      })
    } else{
      setAuthorized(true)
    }
  }

  return (
    <>
      <Script id="topup-script"S
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
        crossOrigin="anonymous" />
        {authorized && 
          <Component {...pageProps}/>
        }
     
    </>
  )
}
