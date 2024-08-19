const mongoose = require('mongoose');

const dbconnection =() =>{
mongoose.connect(process.env.DB_URL).then((con)=>{
    console.log(`DB ${con.connection.host}`);
}).catch((err)=>{
    console.log(err);
    process.exit(1); // to stop node app 
});
} 

module.exports = dbconnection;