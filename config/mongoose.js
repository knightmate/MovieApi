//Building the databasee using mongodb

const mongoose=require('mongoose');
  

mongoose.connect('mongodb://localhost/Movie_Api');

const db = mongoose.connection;

db.on('error', console.error.bind(console,"error"));

 
db.once('open', function(){
    console.log('  Connected to DB');
});


 
module.exports = db;

 
 

