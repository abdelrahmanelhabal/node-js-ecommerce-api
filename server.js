const express = require("express");
const dotenv = require("dotenv");
dotenv.config({path:"config.env"});
const morgan = require("morgan");
const categoryRoutes = require('./Routes/categoryRoutes')
const ApiError = require("./utills/apiError");
const golbalError = require("./middelwares/errorMeddelware");
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

app.all('*',(req,res,next)=>{
    next(new ApiError(`can't find this route: ${req.originalUrl} ` , 400));
})

// golbal error handling middelware 
app.use(golbalError);

const port = process.env.PORT || 8000;

const server = app.listen(port,()=>{
    console.log(`App running  ${port}`);
})

//Handle rejection aoutside express
process.on("unhandledRejection",(err)=>{
    console.log(`unhandledRejection Errors: ${err}`);
    server.close(()=>{
        console.log(`shutting down.....`);
        process.exit(1); // to stop node app 
    })
})




