const express = require("express");
const dotenv = require("dotenv");
dotenv.config({path:"config.env"});
const morgan = require("morgan");
const categoryRoutes = require('./Routes/categoryRoutes')
// connecct with database 
const dbConnection = require("./config/database"); 
dbConnection();


// express app 
const app = express(); // create app form express 

// Middelewares 
app.use(express.json());

if(process.env.NODE_ENV === "development"){
    app.use(morgan("dev"));
}


// Routes
app.use('/api/v1/categories',categoryRoutes);

const port = process.env.PORT || 8000;
app.listen(port,()=>{
    console.log(`App running  ${port}`);
})







