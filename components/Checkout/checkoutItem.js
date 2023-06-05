import React from "react";

const CheckoutItem = ({img, title, type}) => {
    return (
        <div>
            <div className="game-checkout d-flex flex-row align-items-center pt-md-50 pb-md-50 pt-30 pb-30">
                    <div className="pe-4">
                        <div className="cropped">
                            <img src={img} className="img-fluid" alt="img"/>
                        </div>
                    </div>
                    <div>
                        <p className="fw-bold text-xl color-palette-1 mb-10">{title}</p>
                        <p className="color-palette-2 m-0">Categori : {type}</p>
                    </div>
                </div>
        </div>
    );
}

export default CheckoutItem;
