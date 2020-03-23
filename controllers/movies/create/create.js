//create the movie using create function 
const db=require('../../../model/index');


//create module, create the new file and return the data , film name should be unique
module.exports.create= (req,res)=>{


    console.log(req.body);
     db.create({
       
        movie_name:req.body.movie_name,
        movie_trailer:req.body.movie_trailer,
        movie_overview:req.body.movie_overview,
        movie_poster:req.body.movie_poster,
        movie_length:req.body.movie_length,

     }, function(error,user){
      
        if(error)
        {
            console.log("error while creating the data base"+error);
        
            return;
        }

        console.log(user)


     })

    console.log("movie is created");

    res.end("movies are created");


 }





 //export the module  create  ,for calling this functions

 
