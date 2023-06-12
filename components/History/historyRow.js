import cx from "classnames";

const HistoryRow = ({title, type, item, price, coin, status, totalPrice}) => {
    const props = {
        status: ["Succes", "Pending", "Failed"]

    }
    const statusClass = cx ({
        "float-start icon-status": true,
        "pending": status === "Pending",
        "succes": status === "Success",
        "failed": status === "Failed"
    })
    return (
        <>
            <tr className="align-middle">
                <td scope="row">
                    <div className="game-title-header">
                        <p className="fw-medium text-start color-palette-1 m-0">{title}</p>
                        <p className="text-xs fw-normal text-start color-palette-2 m-0">{type}</p>
                    </div>
                </td>
                <td>
                    <p className="fw-medium color-palette-1 m-0">{item}</p>
                </td>
                <td>
                    {!totalPrice? <p className="fw-medium text-start color-palette-1 m-0">Rp {price}</p>:
                    <p className="fw-medium text-start color-palette-1 m-0">Rp {totalPrice}</p>}
                </td>
                <td>
                    <p className="fw-medium text-start color-palette-1 m-0"> +{coin} coin</p>
                </td>
                <td>
                    <div>
                        <span className={statusClass}></span>
                        <p className="fw-medium text-start color-palette-1 m-0 position-relative">
                            {status}</p>
                    </div>
                </td>
            </tr>
        </>
    );
}

export default HistoryRow;
