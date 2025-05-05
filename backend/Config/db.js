import mongoose from "mongoose";

// conecting with mongoDB
export const connectDB = async () => {  
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }catch(error){
        console.error(`Error: ${error.message}`);
        process.exit(1); // Exit the process with failure
    }
}































// !🔍 Breakdown:-------------------------------------------------------------
//? const conn = await mongoose.connect(process.env.MONGO_URI)
//!----------------------------------------------------------------

//! mongoose.connect(...)
//* Initiates a connection to your MongoDB database using the connection string stored in process.env.MONGO_URI.

//! await
//* Waits for the connection to complete before continuing. Ensures the app doesn't proceed until MongoDB is connected.

//!process.env.MONGO_URI
//* A secure way to store your MongoDB connection string (e.g., in .env file):