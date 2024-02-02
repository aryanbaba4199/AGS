import React, { useState } from "react";
import Title from "@/Components/createProduct/title";
import Category from "../createProduct/category";
import Rate from "../createProduct/rate";
import Description from "../createProduct/description";
import Size from "../createProduct/size";
import Image from "../createProduct/image";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const createProduct = () => {
  const [title, setTitle] = useState("");
  
  const [category, setCategory] = useState("");
  const [rate, setRate] = useState("");
  const [mrp, setMRP] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [customSize, setCustomSize] = useState("");
  const [qty, setQty] = useState("");
  const [image, setImage] = useState(null);
  const [tempImageURL, setTempImageURL] = useState("");

    
    const handleSubmit = async () => {
    console.log("Submit")

    try {

      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "aryanbaba4199upload");

      const cloudinaryResponse = await axios.post(
        `https://api.cloudinary.com/v1_1/dmoygdwk1/image/upload`,
        formData
      );
      const imageUrl = cloudinaryResponse.data.secure_url;
    
      const productData = {
        title, category,
        mrp, rate, description, color, size, customSize, imageUrl,
      };
      console.log(productData);

      const saveProductResponse = await axios.post(
        "/api/product/createProduct",
        productData
      );

      console.log("Product saved successfully:", saveProductResponse.data);
      toast('Product Added successfully')

      
      setTitle("");
      setCategory("");
      setMRP("");
      setRate("");
      setDescription("");
      setColor("");
      setSize("");
      setCustomSize("");
      setImage("");
      setQty("");
      setTempImageURL("");
    } catch (error) {
      console.error("Error creating product:", error);

    }
  }


  return (
    <>
      <div>
        <h2 className="text-center my-4 text-xl font-semibold text-red-600">Create Product</h2>
        <div className="flex flex-col justify-between gap-4">
          <Title
            setTitle={setTitle}
            title={title}
            
          />
          <Category setCategory={setCategory} category={category} />
          <Rate rate={rate} setRate={setRate} mrp={mrp} setMRP={setMRP} />
          <Description
            setDescription={setDescription}
            description={description}
            color={color}
            setColor={setColor}
          />
          <Size setSize={setSize} size={size} qty={qty} setQty={setQty} customSize={customSize} setCustomSize={setCustomSize} />

          <Image
            image={image}
            setImage={setImage}
            tempImageURL={tempImageURL}
            setTempImageURL={setTempImageURL}
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <button
            onClick={handleSubmit}
            className="bg-black w-24 mb-8 mt-4 text-white rounded-md p-1 text-xl px-4"
          >
            Submit
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default createProduct;

// import { useState } from "react";
// import axios from "axios";

// const ProductCreate = () => {
//   const [shortTitle, setshortTitle] = useState("");
//   const [fullTitle, setfullTitle] = useState("");
//   const [category, setCategory] = useState("");
//   const [mrp, setmrp] = useState("");
//   const [rate, setRate] = useState("");
//   const [description, setDescription] = useState("");
//   const [image, setImage] = useState(null);
//   const [tempImageURL, setTempImageURL] = useState("");
//   const [color, setColor] = useState("");
//   const [size, setSize] = useState("");
//   const [qty, setQty] = useState("");
//   const [customSize, setCustomSize] = useState('');

// const categoryData = [
//   { id: 1, name: "Raw Material" },
//   { id: 2, name: "Electronics" },
//   { id: 3, name: "Plumbing" },
//   { id: 4, name: "Flooring" },
//   { id: 5, name: "Services" },
// ];

//   const sizeData = [
//     { id: 1, name: "mm"},
//     { id: 2, name: "cft"},
//     { id: 3, name: "cm"},
//     { id: 4, name: "sqft"},
//     {id: 5, name: "ft"},
//     { id: 6, name: "meter"},
//     { id: 7, name: "1x1"},
//     { id: 8, name: "2x2"},
//     { id: 9, name: "4x2"},
//     { id: 10, name: "4x4"},
//     { id: 11, name: "8x4"},
//     { id: 12, name: "8x8"},
//   ]

//   const uploadPreset = process.env.CLOUDINARY_PRESET
//   const cloudinaryName = process.env.CLOUDINARY_NAME

//   const handleImageChange = (e) => {
//     const selectedImage = e.target.files[0];
//     if (selectedImage) {
//       const temporaryImageURL = URL.createObjectURL(selectedImage);
//       setTempImageURL(temporaryImageURL);
//       setImage(selectedImage);
//     }
//   };

//   const handleCategoryChange = (e) => {
//     setCategory(e.target.value);
//   };

//   const sizeChange = (event) => {
//     const selectedSize = event.target.value;
//     setSize(selectedSize);

//     // Reset customSize when selecting a standard size
//     if (selectedSize !== 'custom') {
//       setCustomSize('');
//     }
//   };

//   const handleCustomSizeChange = (event) => {
//     setCustomSize(event.target.value);
//   };
//   const handleSubmit = async () => {
//     console.log("Submit")

//     try {

//       const formData = new FormData();
//       formData.append("file", image);
//       formData.append("upload_preset", "aryanbaba4199upload");

//       const cloudinaryResponse = await axios.post(
//         `https://api.cloudinary.com/v1_1/dmoygdwk1/image/upload`,
//         formData
//       );

//       console.log(cloudinaryResponse);

//       const imageUrl = cloudinaryResponse.data.secure_url;

//       const productData = {
//         shortTitle, fullTitle, category,
//         mrp, rate, description, tempImageURL,
//         color, size
//       };
//       console.log(productData);

//       const saveProductResponse = await axios.post(
//         "/api/products",
//         productData
//       );

//       console.log("Product saved successfully:", saveProductResponse.data);

//       setTitle("");
//       setPrice("");
//       setDescription("");
//       setTempImageURL("");
//     } catch (error) {
//       console.error("Error creating product:", error);

//     }
//   };

//   return (
//     <div className="flex flex-col justify-center items-center shadow-lg shadow-black px-24 py-4  mt-8 mb-8">
//       <h1 className="font-semibold text-2xl bg-gradient-to-r from-black to-red-600 bg-clip-text text-transparent mb-8">
//         Create Product
//       </h1>
//       <div className="flex flex-col  gap-4 justify-center">
//         <div className="text-lg flex justify-between gap-4 font-serif ">
//           <p>Short Title</p>

//           <input
//             type="text"
//             value={shortTitle}
//             className="bg-gray-200 border-2 px-2  border-black w-64 "
//             onChange={(e) => setshortTitle(e.target.value)}
//           />
//         </div>
//         <div className="text-lg flex justify-between gap-4 font-serif ">
//           <p>Long Title</p>

//           <input
//             type="text"
//             value={fullTitle}
//             className="bg-gray-200 border-2 px-2  border-black w-64"
//             onChange={(e) => setfullTitle(e.target.value)}
//           />
//         </div>
//         <div className="text-lg flex justify-between gap-4 font-serif">
//           Category:
//           <select value={category} onChange={handleCategoryChange}>
//             <option value="">Select Category</option>
//             {categoryData.map((cat) => (
//               <option key={cat.id} value={cat.name}>
//                 {cat.name}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="text-lg flex justify-between gap-4 font-serif ">
//           MRP:
//           <input
//             type="number"
//             value={mrp}
//             className="bg-gray-200 border-2 w-48 px-2  border-black w-64"
//             onChange={(e) => setmrp(e.target.value)}
//           />
//         </div>

//         <div className="text-lg flex justify-between gap-4 font-serif ">
//           Selling Rate :
//           <input
//             type="number"
//             value={rate}
//             className="bg-gray-200 border-2 px-2  border-black w-64"
//             onChange={(e) => setRate(e.target.value)}
//           />
//         </div>

//         <div className="text-lg flex justify-between gap-4 font-serif ">
//           Description:
//           <input
//             value={description}
//             className="bg-gray-200 border-2 w-48 px-2  border-black w-64"
//             onChange={(e) => setDescription(e.target.value)}
//           />
//         </div>
//         <div className="text-lg flex justify-between gap-4 font-serif ">
//           Color :
//           <input
//             value={color}
//             className="bg-gray-200 border-2 px-2  border-black w-64"
//             onChange={(e) => setColor(e.target.value)}
//           />
//         </div>
//         <div className="text-lg flex justify-between font-sans gap-4">
//       <p>Size</p>
//       <select value={size} onChange={sizeChange}>
//         <option value="">Select Size</option>
//         {sizeData.map((s) => (
//           <option key={s.id} value={s.name}>
//             {s.name}
//           </option>
//         ))}
//         <option value="custom">Custom Size</option>
//       </select>
//       {size === 'custom' && (
//         <input
//           type="text"
//           placeholder="Enter Custom Size"
//           value={customSize}
//           onChange={handleCustomSizeChange}
//         />
//       )}
//     </div>

//         <div className="text-lg flex justify-between gap-4 font-serif ">
//           Quantity :
//           <input
//             value={qty}
//             className="bg-gray-200 border-2  px-2  border-black w-64"
//             onChange={(e) => setQty(e.target.value)}
//           />
//         </div>

//         <div className="text-lg flex justify-between gap-4 font-serif ">
//           Image:
//           <input type="file" accept="image/*" onChange={handleImageChange} />
//         </div>
//         {tempImageURL && (
//           <img
//             src={tempImageURL}
//             alt="Temporary Preview"
//             style={{ maxWidth: "200px" }}
//           />
//         )}

//         <div className="flex flex-col justify-center items-center">
//         <button onClick={handleSubmit}
//         className="bg-black w-24 mb-8 mt-4 text-white rounded-md p-1 text-xl px-4"
//         >Submit</button>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default ProductCreate;
