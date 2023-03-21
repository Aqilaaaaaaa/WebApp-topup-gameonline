import React from 'react';
import Link from "next/link";

const CheckoutInform = () => {
    return (
        <>
            <label className="checkbox-label text-lg color-palette-1">I have transferred the money
                <input type="checkbox"/>
                <span className="checkmark"></span>
            </label>
            <div className="d-md-block d-flex flex-column w-100 pt-50">
                <Link className="btn btn-confirm-payment rounded-pill fw-medium border-0 text-lg"
                    href="./complete-checkout" role="button">Confirm
                    Payment
                </Link>
            </div>
        </>
    );
}

export default CheckoutInform;
