import { userService } from "@/services";
import { useRouter } from "next/router";
import { useState, useEffect } from 'react';

function RouteGuard ({children}) {
    const router = useRouter()
    const [authorized, setAuthorized] = useState(false)

    function authCheck(url){
        const publicPaths = ["/account/login", "/account/register"]
        const path = url.split("?")[0]
        if(!userService.userValue && !publicPaths.includes(path)){
          setAuthorized(false)
          router.re;
          router.push({
            pathname:"/account/login",
            query:{returnUrl: router.asPath}
          })
        } else{
          setAuthorized(true)
        }
      }

      useEffect(() => {
        authCheck(router.asPath)
    
        const hideContent =()=>setAuthorized(false)
        router.events.on("routerChangeStart", hideContent)
        router.events.on("routerChangeComplete", authCheck)
    
        return ()=>{
          router.events.off("routerChangeStart", hideContent)
          router.events.off("routerChangeComplete", authCheck)
        }
      }, [router])
    
    return (authorized && children)
}

export default RouteGuard;
