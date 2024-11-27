import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000
const MONGO_URL = process.env.MONGO_URL;

app.get('/', (req, res)=>{
    try{
        console.log(req);
        res.status(200).send('Welcome to the Track My Fitness App!');
    } catch(error){
        res.status(404).send('Something went wrong! :(')
    }
});

mongoose
    .connect(MONGO_URL)
    .then(() => {
        console.log("Connected to MongoDB!")
        app.listen(PORT, () => {
            console.log('App is listening on Port 3000.');
        });
    })
    .catch((error) => {
        console.log(error);
    });