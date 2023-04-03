import React from 'react';

const CheckoutDetail = ({id, name, type}) => {
    return (
        <>
            <div className="purchase pt-md-50 pt-30">
                <h2 className="fw-bold text-xl color-palette-1 mb-20">Purchase Details</h2>
                <p className="text-lg color-palette-1 mb-20">Your Game ID 
                        <span className="purchase-details">masayoshizero</span>
                </p>
                <p className="text-lg color-palette-1 mb-20">Order ID <span className="purchase-details">{id}</span></p>
                <p className="text-lg color-palette-1 mb-20">Item <span className="purchase-details">{item}</span></p>
                <p className="text-lg color-palette-1 mb-20">Price <span className="purchase-details">{price}</span></p>
                <p className="text-lg color-palette-1 mb-20">Tax (10%) <span className="purchase-details">Rp 4.228.000</span>
                </p>
                <p className="text-lg color-palette-1 mb-20">Total <span className="purchase-details color-palette-4">Rp
                        55.000.600</span></p>
            </div>
            <div className="payment pt-md-50 pb-md-50 pt-10 pb-10">
                    <h2 className="fw-bold text-xl color-palette-1 mb-20">Payment Informations</h2>
                    <p className="text-lg color-palette-1 mb-20">Your Account Name <span className="purchase-details">Masayoshi
                            Angga Zero</span></p>
                    <p className="text-lg color-palette-1 mb-20">Type <span className="payment-details">{name}</span>
                    </p>
                    <p className="text-lg color-palette-1 mb-20">Bank Name <span className="payment-details">Mandiri</span></p>
                    <p className="text-lg color-palette-1 mb-20">Bank Account Name <span className="payment-details">PT Store GG
                            Indonesia</span></p> 
                    <p className="text-lg color-palette-1 mb-20">Bank Number <span className="payment-details">1800 - 9090 -
                            2021</span>
                    </p>
                </div>
        </>
    );
}

export default CheckoutDetail;
