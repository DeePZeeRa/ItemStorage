import mongoose from "mongoose";


const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    info:{
        type:String,
        required:true
    }
},{
    timestamps:true // Automatically add createdAt and updatedAt timestamps (optional) (optimization)
});


//!exporting the model
const Product = mongoose.model('Product',productSchema); // Create a model named 'Product' using the productSchema 
export default Product; // Export the Product model for use in other parts of the application