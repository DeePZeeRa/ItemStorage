import Product from "../models/product.model.js";
import mongoose from "mongoose";


export const getProducts = async (req,res)=>{
    try{
        const allProducts = await Product.find(); 
        res.status(200).json({success:true,data: allProducts});
    }catch(error){
        console.log("error in deleteing product",error.message);
        res.status(404).json({success:false,message:"product not found"});
    }
}

export const createProduct =async (req,res)=>{
    const product = req.body; // Get the product data from the request body
 
    if(!product.name || !product.price || !product.image ||!product.info){
        return res.status(400).json({success:false,message:"Please fill all the fields"}); // Return an error if any field is missing
    }
    const newProduct = new Product(product);
    try{
     await newProduct.save(); // Save the new product to the database
     res.status(201).json({success:true,message:"Product created successfully",data: newProduct}); // Return success message
    }catch(error){
     console.error("Error in create product",error,message); // Log the error to the console
     res.status(500).json({success:false,message:"Internal server error"}); // Return an error if saving fails 
     // 500 ---> server side error
    }
 };

 export const deleteProduct = async (req,res)=>{

    const {id} = req.params; // Extract the product ID from the request parameters

    // checking if product exists or not
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false,message:"Invalid Product or ID"});
    }
    
    try{
        await Product.findByIdAndDelete(id);
        res.status(200).json({success:true,message:"product deleted"});

    }catch(error){
        res.status(500).json({success:false,message:"server error"})
    }
}

export const updateProduct =async (req,res)=>{
    const {id} = req.params;
    const product = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false,message:"Invalid Product"});
    }
    try{
        const updatedProduct = await Product.findByIdAndUpdate(id,product,{new:true}); // adding new object true
        res.status(200).json({success:true,data: updatedProduct});
    }catch(error){
        res.status(500).json({success:false,message:"Server Error"})
    }
}