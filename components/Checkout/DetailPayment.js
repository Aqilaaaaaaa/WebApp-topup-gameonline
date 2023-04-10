import React from 'react';

const DetailPayment = ({label, value}) => {
    return (
        <>
                <p className="text-lg color-palette-1 mb-20">{label}
                        <span className="purchase-details">{value}</span>
                </p>
                
            
        </>
    );
}

export default DetailPayment;
