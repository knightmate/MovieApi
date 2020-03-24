var  db=require('../../model/theater');
 


module.exports.create=(req,res)=>{

    console.log("in theter create");
     
    db.create({
   
        theter_name:req.body.therter_name,
        theter_location:req.body.therter_location,
        city:req.body.city,
        pinode:req.body.pincode,

    },function(error,data){
      
        if(error)
        {
            console.log("error while creating the data base"+error);
        
          return res.send("ERROR"+error);
         

        }  

        //console.log(theter)
        console.log("movie is created");
        res.json(200, {
            data:{
                theter:data
            }
        })
       

     })

}


