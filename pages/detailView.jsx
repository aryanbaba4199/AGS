import React  from "react";
import { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getProductDetails } from "@/redux/action/productAction";
import ActionItem from "@/Components/Details/actionItem";
import Nav from "@/Components/Header/header";
import {auth} from "@/utils/firebaseAuth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Menu from "@/Components/menu/menu";
import axios from "axios";


import ProductDetail from "@/Components/Details/productDetail";

const detailView = () => {
  const router = useRouter();
  const { id } = router.query;
  const { loading, product } = useSelector((state) => state.getProductDetails);

  const [related, setRelated] = useState(null, product);

  const dispatch = useDispatch();

  useEffect(() => {
    if (product && id !== product.id) {
      dispatch(getProductDetails(id));
    }
  }, [id]);

  const buyNow = async() =>{
    if(auth.currentUser){
        try{
           const productId =product._id;
           const userID = auth.currentUser.uid;
        }catch(e){
            console.log(e);
        }
    }else{
        toast("Log in first...")
    }
  }

  useEffect(()=>{
    const relatedProduct = async() =>{
      try{
        const res = await axios.get(`/api/product/filter?category=${product.category}`)
      if(res.status===200){
        setRelated(res.data)
      }
      }catch(e){
        console.log(e);
      }
      
    }
    relatedProduct();
  }, [product])
  console.log("Product", related)
  return (
    <>
      <Nav />
      <div className="mt-20">
        {product && Object.keys(product).length && (
          <>
            <div className="flex md:flex-row flex-col gap-2 px-2 md:px-16">
              <div className="w-[98%] md:w-[40%]">
                <ActionItem product={product} buyNow={buyNow} />
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <ProductDetail product={product} />
                
              </div>
              
            </div>
            <div className="py-4 px-24 text-lg">
              <p>{product.description}</p>
              </div>
          </>
        )}
        <div>
          <div>
            <h2>You might be intrested</h2>
          </div>
          
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default detailView;
