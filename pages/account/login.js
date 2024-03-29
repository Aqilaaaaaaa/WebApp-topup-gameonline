import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Link from "next/link";
import { useEffect, useState } from "react";
import { alertService, userService } from "services";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";


export default Login;

function Login({id}) {
    const router = useRouter();
    const [alerts, setAlerts] = useState([]);

    useEffect(() => {
      const subscription = alertService.onAlert(id)
      .subscribe(alert => {
        if(!alert.message) {
            setAlerts(alerts =>{
                const filteredAlerts = alerts.filter(x => x.keepAfterRouteChange);
                filteredAlerts.forEach(x => delete x.keepAfterRouteChange);
                return filteredAlerts;
            })
        } else {
            setAlerts(alerts => ([...alerts, alert]));
            toast.error(alert.message, {
                position: toast.POSITION.TOP_RIGHT
            });
            
        }
      })
      const clearAlerts = () => {
        setTimeout(() => alertService.clear(id));
      };
      router.events.on("routeChangeStart", clearAlerts);

      return ()=>{
        subscription.unsubscribe()
        router.events.off("routeChangeStart", clearAlerts)
      }
    },[]);

    // form validation rules 
    const validationSchema = Yup.object().shape({
        email: Yup.string().required("email is required"),
        password: Yup.string().required("Password is required")
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit({ email, password }) {
        return userService.login(email, password)
            .then(() => {
                // get return url from query parameters or default to "/"
                const returnUrl = router.query.returnUrl || "/";
                router.push(returnUrl);
            })
            .catch(alertService.error);
    }

    return (
        <>
            <Head>
                <title>CashLess Shop | Masuk</title>
                <meta name="description" content="CashLess membantu anda agar semangat bermain" />
                <link rel="icon" href="/icon/logo.svg" />
            </Head>
            <div className="login mx-auto">
                <div className="row">
                    <div className="col-xxl-6 col-lg-6 my-auto py-lg-0 pt-lg-50 pb-lg-50 pt-30 pb-47 px-0">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="container mx-auto">
                                <div className="pb-50">
                                    <Link className="navbar-brand" href="/#">
                                        <img src="/icon/logo.svg" width={100} height={100}/>
                                    </Link>
                                </div>
                                <h2 className="text-4xl fw-bold color-palette-1 mb-10">Login</h2>
                                <p className="text-lg color-palette-1 m-0">Already Have an Account? Come Less</p>

                                <div className="pt-50">
                                    <label id="email" className="form-label text-lg fw-medium color-palette-1 mb-10">Email</label>
                                    <input name="email" type="email" {...register("email")} className={`form-control rounded-pill text-lg ${errors.email ? "is-invalid" : ""}`} aria-describedby="email" placeholder="Enter Your Email"/>
                                    <div className="invalid-feedback">{errors.email?.message}</div>
                                </div>
                                <div className="pt-20">
                                    <label id="password" className="form-label text-lg fw-medium color-palette-1 mb-10">Password</label>
                                    <input name="password" type="password" {...register("password")} className={`form-control rounded-pill text-lg ${errors.password ? "is-invalid" : ""}`} aria-describedby="password" placeholder="Enter Your Password"/>
                                    <div className="invalid-feedback">{errors.password?.message}</div>
                                </div>
                                <div className="button-group d-flex flex-column mx-auto pt-30 pb-30">
                                    <button disabled={formState.isSubmitting} className="btn btn-login fw-medium text-lg rounded-pill mb-10" role="button">
                                        Login
                                    </button>
                                    <div className="w-full">
                                        <p className="text-center text-dark">
                                        Don't have an account yet?{" "}
                                            <Link href="/account/register" role="button" style={{textDecoration:"none", color:"#ADFF2F"}}>
                                                <span className="font-semibold cursor-pointer hover:text-success">Register</span>
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                        </form>
                        
                        
                    </div>
                    <div className="poster col-xxl-6 col-lg-6 text-center pt-lg-145 pb-lg-150 d-lg-block d-none">
                        <img src="/img/Header-9.png" width="502" height="391.21" className="img-fluid pb-50" alt="img"/>
                        <h2 className="text-4xl fw-bold mb-30">Win the battle.<br/>
                            Be the Champion.</h2>
                        <p className=" m-0">We Provide Millions Of Ways<br/>To Help Players Become<br/>
                         True Champion</p>
                    </div>
                </div>
                <ToastContainer/>
            </div> 
            
        </>
    );
}
