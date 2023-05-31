import CardFeatured from "./cardFeatured";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import React, { useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Featured = ({dataProduct}) => {
    const swiperRef = useRef();
    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
      }, []);
    
    const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
    }, []);

    return (
        <>
            <section id="featured-game" className="featured-game pt-50 pb-50">
                <div className="container-fluid ">
                    <h2 className="text-4xl text-center fw-bold color-palette-1 mb-30">Our Featured Games</h2>
                    <div className="container"
                        data-aos="fade-up">
                        <div className="container-btnR" >
                            <button className="pre-button border-0 bg-transparent" onClick={() => swiperRef.current?.slidePrev()}><IoIosArrowBack size={30}/></button>
                        </div>
                        <Swiper
                            className=""
                            breakpoints={
                                {
                                1280: {
                                    slidesPerView: 3,
                                    width: 800,
                                },
                                768: {
                                    slidesPerView: 2,
                                    width: 760,
                                    spaceBetween: 50
                                },
                                414: {
                                    slidesPerView: 1,
                                    width: 400,
                                },
                                360:{
                                    slidesPerView: 1,
                                    width: 360,
                                }
                                }
                            }
                            slidesPerView={4}
                            onBeforeInit={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                        >
                            {dataProduct?.map((data, idx) => {
                                return (
                                    <SwiperSlide key={idx} className="swiperSlide m-auto p-4" >
                                        <CardFeatured id={data.id} img={data.img} icon="icon/stick.svg" title={data.name} type={data.type}/>
                                    </SwiperSlide>
                                )
                            })}
                            
                        </Swiper>
                        <div className="container-btnL">
                            <button className="nxt-button border-0 bg-transparent" onClick={() => swiperRef.current?.slideNext()}><IoIosArrowForward size={30}/></button>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    )
}
export default Featured;