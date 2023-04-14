import '../styles/utilities.css';
import '../styles/homepage.css';
import '../styles/details.css';
import '../styles/checkout.css';
import '../styles/complete-checkout.css';
import '../styles/sign-in.css';
import '../styles/sign-up.css';
import '../styles/sign-up-success.css';
import '../styles/404-not-found.css';
import '../styles/navbar-log-in.css';
import '../styles/history.css';
import '../styles/product.css';
import Head from 'next/head';
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head/>
      {/* Call Bootstrap JS */}
      
      <Script id="topup-script"
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
        crossOrigin="anonymous" />
      <Component {...pageProps} />
    </>
  )
}
