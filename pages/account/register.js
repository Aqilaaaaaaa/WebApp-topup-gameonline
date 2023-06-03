import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { alertService, userService } from "services";
import * as Yup from "yup";

export default Register;

function Register({id}) {
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
        name: Yup.string()
            .required("Name is required"),
        email: Yup.string()
            .required("email is required"),
        password: Yup.string()
            .required("Password is required")
            .min(6, "Password must be at least 6 characters")
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit(user) {
        return userService.register(user)
            .then(() => {
                alertService.success("Registration successful", { keepAfterRouteChange: true });
                router.push("login");
            })
            .catch(alertService.error);
    }


    return (
        <>
            <div className="register mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
                <div className="container mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="pb-50">
                        <Link className="navbar-brand" href="/#">
                            <img src="/icon/logo.svg" width={100} height={100}/>
                        </Link>
                    </div>
                    <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign Up</h2>
                    <p className="text-lg color-palette-1 m-0">Daftar dan bergabung dengan CashLess</p>
                        <div className="pt-50">
                        <label id="name" className="form-label text-lg fw-medium color-palette-1 mb-10">Name</label>
                            <input name="name" type="text" {...register("name")} className={`form-control rounded-pill text-lg ${errors.name ? "is-invalid" : ""}`} aria-describedby="name" placeholder="Enter Your Name"/>
                            <div className="invalid-feedback">{errors.name?.message}</div>
                        </div>
                        <div className="pt-20">
                        <label id="email" className="form-label text-lg fw-medium color-palette-1 mb-10">Email</label>
                            <input name="email" type="text" {...register("email")} className={`form-control rounded-pill text-lg ${errors.email ? "is-invalid" : ""}`} aria-describedby="email" placeholder="Enter Your Email"/>
                            <div className="invalid-feedback">{errors.email?.message}</div>
                        </div>
                        <div className="pt-20">
                            <label id="password" className="form-label text-lg fw-medium color-palette-1 mb-10">Password</label>
                            <input name="password" type="password" {...register("password")} className={`form-control rounded-pill text-lg ${errors.password ? "is-invalid" : ""}`} aria-describedby="password" placeholder="Enter Your Password" />
                            <div className="invalid-feedback">{errors.password?.message}</div>
                        </div>
                        <div className="button-group d-flex flex-column mx-auto pt-50">
                            <button disabled={formState.isSubmitting} className="btn btn-register fw-medium text-lg text-white rounded-pill mb-16">
                                {/* {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>} */}
                                    Continue
                            </button>
                            <div className="w-full">
                                <p className="text-center text-dark">
                                    Sudah punya akun Di CashLess Shop?{" "}
                                    <Link href="/account/login" role="button" style={{textDecoration:"none", color:"#ADFF2F"}}>
                                        <span className="font-semibold cursor-pointer hover:text-danger">Login</span>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer/>
        </>
    );
}
