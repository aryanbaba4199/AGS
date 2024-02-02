import Product from "@/models/productSchema";
import connectDB from "@/utils/db";

export default async function handler(req, res) {
  connectDB();
  const { id } = req.query;
  console.log("query", req.query);
  try {
    const product = await Product.findOne({ _id: id });

    res.status(200).json(product);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Product not found" });
  }
}
