var express = require('express');
var router = express.Router();
const app=express();
const controller =require('../controllers/index');

/* GET home page. */
 

console.log("I'm  in router , index.js file");

router.get('/',controller);
    
 
 


// app.use('/movies', controller);
// app.use('/theter', controller);
// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

 module.exports = router;
 

 
 
 
// module.exports = router;
