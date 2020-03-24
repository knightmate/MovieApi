//create the movie using create function 
const db=require('../../../model/movies');


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
        
          return res.send("ERROR"+error);
        

        }  

        console.log(user)
        console.log("movie is created");
        
        return res.json(200,{

          data:{
            user:user
          }
        })

     })

     

     


 }





 //export the module  create  ,for calling this functions

 
