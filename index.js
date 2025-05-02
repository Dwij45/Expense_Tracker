// here courseRouter nd userRouter are not functions 

const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

require('dotenv').config();

const {userRouter} =require('./routes/user')

const app = express();
const mongoURI = process.env.MONGO_URI;

// $$instead of doing this we do routing with app.use
// userRoutes(app);
// coursesRoutes(app); 


app.use('/user',userRouter);

async function main(){

// $$ here address is stored in dotenv file
// await mongoose.connect("mongodb+srv://gosaidwij045:KXmLCZCJGMNGuAag@cluster0.pmdcs.mongodb.net/improved")

await mongoose.connect(process.env.MONGO_URI)
    app.listen(3000)
    console.log("listining on port 3000")
    // %% here backend will start after database will be connected. so request from user will be sent after DB is connected
}
main();