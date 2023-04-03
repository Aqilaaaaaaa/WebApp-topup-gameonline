import CardGuide from "./cardGuide";

export default function Guide(){
    return (
        <>
            <section id="feature" className="feature pt-50 pb-50">
                <div className="container-fluid">
                    <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">It’s Really That Easy to Win the Game
                    </h2>
                    <div className="row gap-lg-0 gap-4" data-aos="fade-up">
                        <CardGuide icon="icon/guidestep1.svg" title="1. Start" desc="Pilih salah satu game
                                    yang ingin kamu top up dari Featured game atau Cari diatas" />
                        <CardGuide icon="icon/guidestep2.svg" title="2. Fill Up" desc="Top up sesuai dengan
                                    nominal yang  kamu butuhkan"/>
                        <CardGuide icon="icon/guidestep3.svg" title="3. Proccesing" desc="Checkout, Tunggu dan pantau prosesnya di History Purchase"/>
                        
                        
                    </div>
                </div>
            </section>
        </>
    )
}
