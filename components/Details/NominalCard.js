
const NominalCard = ({item, itemName, price, coin, onSelect, value}) => {
    return (
        <div className="row justify-content-between px-2" onChange={onSelect}>
            <label className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
                id="topup1">
                <input className="d-none" type="radio" id="topup1" name="topup" value={value}/>
                <div className="detail-card">
                    <div className="d-flex justify-content-between">
                        <p className="text-2xl color-palette-1 m-0">
                            <span>{item} </span>{itemName}
                        </p>
                        <svg id="icon-check" width="20" height="20" viewBox="0 0 20 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="10" fill="#ADFF2F" />
                            <path d="M5.83301 10L8.46459 12.5L14.1663 7.5" stroke="#1d394a"
                                strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <p className="text-lg color-palette-1 m-0 mt-2">Rp {price}</p>
                    <p className="text-lg color-palette-1 text-danger m-0">+{coin} coin</p>
                </div>
            </label>
        </div>
    );
}

export default NominalCard;
