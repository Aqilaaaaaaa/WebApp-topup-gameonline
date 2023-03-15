import CardFeatured from "./cardFeatured";

export default function Featured(){
    return (
        <>
            <section className="featured-game pt-50 pb-50">
                <div className="container-fluid">
                    <h2 className="text-4xl fw-bold color-palette-1 mb-30">Our Featured Games 
                    </h2>
                    <div className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
                        data-aos="fade-up">
                        <CardFeatured img="Thumbnail-1" title="Super Mechs" type="Desktop"/>
                        <CardFeatured img="Thumbnail-2" title="Mobile Legends" type="Mobile"/>
                        <CardFeatured img="Thumbnail-3" title="Clash of Clans" type="Mobile"/>
                        <CardFeatured img="Thumbnail-4" title="Mobile Legends" type="Mobile"/>
                        <CardFeatured img="Thumbnail-5" title="Mobile Legends" type="Mobile"/>
                    </div>
                </div>
            </section>
        </>
    )
}
