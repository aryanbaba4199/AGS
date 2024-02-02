
import Db from "@/utils/db";
import Product from "@/models/product";

export default async function handler(req, res){
    Db();
    if(req.method == "POST"){
        try{
        const productData = req.body;
       
        
        const product = new Product(productData);
        console.log("product",product);
        const saveResponse = await product.save();
        console.log("res",saveResponse);
      
        res.status(200).json({message : "Success"});
        }catch(e){
            res.status(500).json({message : "Error"});
            console.log(e);
        }
        
    }
    if(req.method=="GET"){
        try{
            const viewOrder = await Product.find();
            res.status(200).json(viewProduct);
        }catch(e){
            
            console.log(e);
            res.status(500).json({message : "Error"});
        }
        
    }
}