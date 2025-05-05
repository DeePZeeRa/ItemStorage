import express from 'express';
import dotenv from 'dotenv'; // Import dotenv to load environment variables
import {connectDB} from './Config/db.js'; // Import the database connection function
//
import Product from './models/product.model.js'; // Import the Product model

import router from './routes/productsRoute.js'

import path from 'path';



dotenv.config(); // Load environment variables from .env file


const app = express(); // Create an Express application instance 

const PORT=process.env.PORT||5000 // taking port from env file or default 5000

const __dirname = path.resolve();

app.use(express.json()); // allow us to parse JSON data in incoming requests i.e req.body

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/dist")));
  }
  
  // API routes
  app.use("/api/products", router);
  
  // Serve frontend for all other routes
  if (process.env.NODE_ENV === "production") {
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    });
  }





app.use("/api/products",router);

app.listen(PORT,()=>{
    connectDB();
    console.log("SERVER AT http://localhost:"+PORT); // Log a message when the server starts
});

//mongodb+srv://dasdeepayan08:<db_password>@cluster0.pchvgol.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0