import Link from "next/link";
import { useState } from 'react';


const CheckoutConfirm = ({onSubmit}) => {
    const [checkBox, setCheckBox] = useState();
    // if (!checkBox) {
    //     toast.error("Pastikan anda telah melakukan pembayaran!");
    //     return;
    //   }
  
    return (
        <>
            <label className="checkbox-label text-lg color-palette-1">I have transfered the money
                <input type="checkbox"/>
                <span className="checkmark"></span>
            </label>
            <div className="button-check d-md-block d-flex flex-column w-100 pt-50">
                <Link className="btn btn-confirm-payment rounded-pill fw-medium border-0 text-lg"
                    href="/complete-checkout" role="button" onClick={onSubmit}>Confirm
                    Payment
                </Link>
                
            </div>
        </>
    );
}

export default CheckoutConfirm;
