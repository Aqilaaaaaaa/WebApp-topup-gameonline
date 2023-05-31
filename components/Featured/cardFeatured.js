import React from "react";

import Link from "next/link";

const CardFeatured = ({id, img, icon, title, type}) => {
    return (
        <>
          <div className="featured-game-card position-relative">
            <Link href={`details/${id}`}>
                <div className="blur-sharp">
                    <img className="thumbnail" src={img} width="205" height="270" alt="img"/>
                </div>
                <div className="cover position-absolute bottom-0 m-32">
                    <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
                        <div className="game-icon mx-auto">
                            {icon?<img src={icon} width={54} height={36}/> :""}
                        </div>
                        <div className="text">
                            <p className="fw-semibold text-white text-l m-0">{title}</p>
                            <p className="fw-light text-white m-0">{type}</p>
                        </div>
                    </div>
                </div>
            </Link>
          </div>
        </>
    );
}

export default CardFeatured;
