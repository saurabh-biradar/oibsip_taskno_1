import dbConnect from "../../../util/mongo";
import Product from "../../../models/Product";


export default async function handler(req, res) {
    const { method } = req;
    dbConnect();

    if (method === "GET") {
        try {
            const products = await Product.find(); // will give all products 
            // const products = await Product.find({ "title": "pizza3" }); => only give product with title pizza3
            res.status(200).json(products);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    if (method === "POST") {
        try {
            const product = await Product.create(req.body);
            res.status(201).json(product);
        } catch (err) {
            res.status(500).json(err);
        }
    }

}