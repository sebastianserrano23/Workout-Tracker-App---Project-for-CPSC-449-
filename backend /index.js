import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log('App is listening on Port 3000');
});

app.get('/', (req, res)=>{
    try{
        console.log(req);
        res.status(200).send('Welcome to the Track My Fitness App!');
    } catch(error){
        res.status(404).send('Something went wrong! :(')
    }
});