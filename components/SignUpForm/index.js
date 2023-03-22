import React from 'react';
import Link from "next/link"

const SignUpForm = () => {
    return (
        <>
            <div className="pt-50">
                <label id="name" className="form-label text-lg fw-medium color-palette-1 mb-10">Full Name</label>
                <input type="text" className="form-control rounded-pill text-lg" id="name" name="name"
                    aria-describedby="name" placeholder="Enter your name"/>
            </div>
            <div className="pt-30">
                <label id="email" className="form-label text-lg fw-medium color-palette-1 mb-10">Email
                    Address</label>
                <input type="email" className="form-control rounded-pill text-lg" id="email" name="email"
                    aria-describedby="email" placeholder="Enter your email address"/>
            </div>
            <div className="pt-30">
                <label id="password" className="form-label text-lg fw-medium color-palette-1 mb-10">Password</label>
                <input type="password" className="form-control rounded-pill text-lg" id="password" name="password"
                    aria-describedby="password" placeholder="Your password"/>
            </div>
            <div className="button-group d-flex flex-column mx-auto pt-50">
                <Link className="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16"
                    href="sign-up-success" role="button">Continue
                </Link>
                
                <Link className="btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill" href="/sign-in"
                    role="button">Sign
                    In
                </Link>
            </div>
        </>
    );
}

export default SignUpForm;
