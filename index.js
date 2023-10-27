import dotenv from "dotenv";
import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
const port = 3000;
const API_URL = process.env.API_URL;

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", async(req,res) => {

    try{
        const response = await axios.get(API_URL+"Any");
       
        res.render("index.ejs",{
            setup: response.data.setup,
            delivery: response.data.delivery,
            type: response.data.type,
            category: response.data.category
        })
    }catch(error){
        console.log(error.message)
    }
})



app.listen(port,() => {
    console.log(`Server is listening on port ${port}`);
})