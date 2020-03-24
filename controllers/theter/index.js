var express = require('express');
 
 
const router=express.Router();
 
//const  theterindex  =require('../controllers/theter/index');
const api=require('./create');

//create the theter
router.post('/theatre/create',api.create );

module.exports=router;
