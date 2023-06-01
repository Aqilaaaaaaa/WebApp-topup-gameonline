
import React from "react";

export default function TopUpItem ({img, title, type}) {

    return (

        <div className="card-img px-4 align-items-center">
            <div className="justify-center">
                <img src={img} className="img-fluid" width={"200px"} height={"300px"} alt="img"/>
            </div>
            <div className="my-4 col-md-12 col-8 d-block ">
                <h2 className="text-xl fw-bold color-palette-1 text-start mb-10">{title}<br/>
                    The New Battle </h2>
                <p className="text-sm color-palette-2 text-start mb-0">Category : {type}</p>
            </div>
        </div>
   )
}

