import React from "react";

const PaymentCard = ({payName, typePay, onSelectPay, value}) => {
    return (
        <>
            <label className="row justify-content-between px-2 m-1 mt-4"
                id="payment">
                <input className="d-none" type="radio" id="payment" name="paymentMethod" onChange={onSelectPay} value={value}/>
                <div className="detail-card">
                    <div className="d-flex justify-content-between">
                        <p className="text-3xl color-palette-1 fw-medium m-0">{payName}</p>
                        <svg id="icon-check" width="20" height="20" viewBox="0 0 20 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="10" fill="#ADFF2F" />
                            <path d="M5.83301 10L8.46459 12.5L14.1663 7.5" stroke="#1d394a"
                                strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <p className="text-lg color-palette-1 m-0">{typePay}</p>
                </div>
            </label>
        </>
    );
}

export default PaymentCard;
