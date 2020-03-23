//get all the movie request 
//route the movies request to the controller(create controller, delete , etc).

var express = require('express');
var router = express.Router();
const app=express();
const api=require('../../controllers/movies/create/create');

app.use('/create',api.create);

 


module.exports=router;


