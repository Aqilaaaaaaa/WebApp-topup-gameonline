
const CardGuide = ({icon, title, desc}) => {
    
    return (
       <>
       <div className="col-lg-4">
            <div className="card feature-card border-0">
                <img src={icon} width={80} height={80} />
                <p className="fw-semibold text-2xl mb-2 mt-4 color-palette-1 ">{title}</p>
                <p className="text-lg color-palette-1 mb-0">{desc}</p>
            </div>
        </div>
       </>
    )
}
export default CardGuide;