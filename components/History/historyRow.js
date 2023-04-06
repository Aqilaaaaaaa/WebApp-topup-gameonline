import cx from "classnames";

const HistoryRow = ({img, title, type, item, price, coin, status }) => {
    const props = {
        status: ["Succes", 'Pending', "Failed"]

    }
    const statusClass = cx ({
        'float-start icon-status': true,
        'pending': status === 'Pending',
        'succes': status === 'Success',
        'failed': status === 'Failed'
    })
    return (
        <>
            <tr className="align-middle">
                <th scope="row">
                    <img className="float-start me-3 mb-lg-0 mb-3" 
                        src={img}
                        width="80" height="60" alt=""/>
                    <div className="game-title-header">
                        <p className="game-title fw-medium text-start color-palette-1 m-0">{title}</p>
                        <p className="text-xs fw-normal text-start color-palette-2 m-0">{type}</p>
                    </div>
                </th>
                <td>
                    <p className="fw-medium color-palette-1 m-0">{item} DM</p>
                </td>
                <td>
                    <p className="fw-medium text-start color-palette-1 m-0">Rp {price}</p>
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
