var express = require('express');
 
const app=express();
const router=express.Router();
const  movieindex  =require('./movies/index');
//const  theterindex  =require('../controllers/theter/index');



 router.get('/', function(req,res){

         res.render('index', {

            title:'App'
         })
     
    
 });

 

module.exports=router;