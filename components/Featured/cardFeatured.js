import React from 'react';

import Link from 'next/link';

const CardFeatured = ({id, img, title, type}) => {
    return (
        <>
          <div className="featured-game-card position-relative">
            <Link href="/details">
                <div className="blur-sharp">
                    <img className="thumbnail" src={img} width="205" height="270" alt=""/>
                </div>
                <div className="cover position-absolute bottom-0 m-32">
                    <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
                        <div className="game-icon mx-auto">
                            <img src="icon/stick.svg" width={54} height={36}/>
                        </div>
                        <div>
                            <p className="fw-semibold text-white text-xl m-0">{title}</p>
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
