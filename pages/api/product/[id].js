import { products } from "../../../products";

export default function userHandler(req, res) {
    const id = req.query.id
    const method = req.method
    let { name, img, type, pricelist } = req.body
    const filtered = products.filter((products) => id == products.id)
    switch (method) {
        case "GET":
            if (filtered.length > 0) res.status(200).json(filtered[0])
            else res.status(404).json({ messege: "Game Unfailable" })
            break
        case "PUT":
            if (filtered.length > 0) {
                res.status(200).json({
                    id: filtered.id, name, img, type, pricelist
                })
            } else {
                res.status(404).json({
                    messege: "Game Unfailable"
                })
            }
            break
        case "DELETE":
            if (filtered.length > 0) {
                products.splice(products.indexOf(filtered[0], 1));
                res.status(200).json({
                    messege: "Game was Deleted",
                });
            } else {
                res.status(404).json({
                    messege: "Not Found",
                })
            }
            break
        default:
            res.setHeader("Allow", ["GET", "PUT", "POST", "DELET"])
            res.status(405).end(`Method ${method} Not Allowed`)
            break
    } 
}