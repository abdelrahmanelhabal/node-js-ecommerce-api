const mongoose = require('mongoose');

const dbconnection =() =>{
mongoose.connect(process.env.DB_URL).then((con)=>{
    console.log(`DB ${con.connection.host}`);
})
} 

module.exports = dbconnection;