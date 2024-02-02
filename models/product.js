import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  
  category: {
    type: String,
    required: true
    
  },
  mrp: {
    type: String,
    required: true
    
  },
  rate: {
    type: String,
    required: true
    
  },
  description: {
    type: String,
  },
  color: {
    type: String,
  },
  size: {
    type: String,
  },
  customSize: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
});

const Product = mongoose.models['stylerProduct'] || mongoose.model('stylerProduct', productSchema);

export default Product;
