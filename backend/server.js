const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const port= 5000;
const app = express();
const cors = require("cors");
const mainRoute = require("./routes/index.js");
const anketRoutes = require('./routes/anketRoutes');

dotenv.config();

const connect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("connected to mongodb")
    } catch (error) {
        
    }
}
//middlewares
app.use(express.json())

app.use(cors());



app.use("/api", mainRoute)



app.listen(port, ()=>{
    connect();
    
})

