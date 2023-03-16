import CardFeatured from "./cardFeatured";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Featured(){
    return (
        <>
            <section className="featured-game pt-50 pb-50">
                <div className="container-fluid">
                    <h2 className="text-4xl fw-bold color-palette-1 mb-30">Our Featured Games</h2>
                    <div className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
                        data-aos="fade-up">
                        <button className="pre-button border-0 bg-transparent"><IoIosArrowBack size={30}/></button>
                        <CardFeatured img="Thumbnail-1" title="Super Mechs" type="Desktop"/>
                        <CardFeatured img="Thumbnail-2" title="Mobile Legends" type="Mobile"/>
                        <CardFeatured img="Thumbnail-3" title="Clash of Clans" type="Mobile"/>
                        <CardFeatured img="Thumbnail-4" title="Mobile Legends" type="Mobile"/>
                        <CardFeatured img="Thumbnail-1" title="Mobile Legends" type="Mobile"/>
                        <CardFeatured img="Thumbnail-5" title="Mobile Legends" type="Mobile"/>
                        <button className="nxt-button border-0 bg-transparent"><IoIosArrowForward size={30}/></button>
                    </div>
                </div>
            </section>
        </>
    )
}
