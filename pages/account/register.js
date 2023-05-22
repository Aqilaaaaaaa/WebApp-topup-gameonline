import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { alertService, userService } from 'services';
import * as Yup from 'yup';

export default Register;

function Register() {
    const router = useRouter();

    // form validation rules 
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Name is required'),
        username: Yup.string()
            .required('Username is required'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit(user) {
        return userService.register(user)
            .then(() => {
                alertService.success('Registration successful', { keepAfterRouteChange: true });
                router.push('login');
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
                            <img src="/icon/logoo.png" width={100} height={100}/>
                        </Link>
                    </div>
                    <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign Up</h2>
                    <p className="text-lg color-palette-1 m-0">Daftar dan bergabung dengan CashLess</p>
                        <div className="pt-50">
                        <label id="name" className="form-label text-lg fw-medium color-palette-1 mb-10">Name</label>
                            <input name="name" type="text" {...register('name')} className={`form-control rounded-pill text-lg ${errors.name ? 'is-invalid' : ''}`} aria-describedby="name" placeholder="Enter your name"/>
                            <div className="invalid-feedback">{errors.name?.message}</div>
                        </div>
                        <div className="pt-20">
                        <label id="username" className="form-label text-lg fw-medium color-palette-1 mb-10">Username</label>
                            <input name="username" type="text" {...register('username')} className={`form-control rounded-pill text-lg ${errors.username ? 'is-invalid' : ''}`} aria-describedby="username" placeholder="Enter your Username"/>
                            <div className="invalid-feedback">{errors.username?.message}</div>
                        </div>
                        <div className="pt-20">
                            <label id="password" className="form-label text-lg fw-medium color-palette-1 mb-10">Password</label>
                            <input name="password" type="password" {...register('password')} className={`form-control rounded-pill text-lg ${errors.password ? 'is-invalid' : ''}`} aria-describedby="password" placeholder="Your password" />
                            <div className="invalid-feedback">{errors.password?.message}</div>
                        </div>
                        <div className="button-group d-flex flex-column mx-auto pt-50">
                            <button disabled={formState.isSubmitting} className="btn btn-register fw-medium text-lg text-white rounded-pill mb-16">
                                {/* {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>} */}
                                
                                    Continue
                               
                            </button>
                            
                            <Link className="btn btn-login fw-medium text-lg color-palette-1 rounded-pill" href="/account/login" role="button">
                                LogIn
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
