import Script from "next/script";
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
import RouteGuard from "@/components/RouteGuard";



export default function App({ Component, pageProps }) {

  return (
    <>
      <Script id="topup-script" src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
        crossOrigin="anonymous"></Script>
        <RouteGuard>
          <Component {...pageProps}/>
        </RouteGuard>
    </>
  )
}
