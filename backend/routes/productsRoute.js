import express from "express"
import Product from '../models/product.model.js'; // Import the Product model
import mongoose from "mongoose";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();


//! get all data
router.get("/",getProducts);
//! push data
router.post('/', createProduct);


//! delete of entry
router.delete("/:id",deleteProduct);
    

//! update
//? patch ---> used when you want to update some parameters in the product

//? put ----> used when you want to update whole thing or all parameters
router.put("/:id",updateProduct)
export default router;