import React from "react";

const HistoryTotal = ({title, total}) => {
    return (
        <>
            <div className="main-content">
                <div className="row">
                    <div className="categories-card border border-secondary">
                        <div className="d-flex align-items-center mb-24">
                            <img src="icon/guidestep3.svg" width={50} height={50} />
                            <p className="color-palette-1 mb-0 ms-12">{title}</p>
                        </div>
                        <div>
                            <p className="text-2xl color-palette-1 fw-medium m-0">Rp {total}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HistoryTotal;
