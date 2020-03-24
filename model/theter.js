 const mongoose=require('mongoose');

 const theterApi=new mongoose.Schema({

    theter_name:{
        type:String,
        require:true
    },
    theter_location:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },

    pincode:{
        type:String,
        require:true
    }


 },{
    timestamps:true
});



//const Product = mongoose.model('Product',productSchema);

//exporting the schema
 
 const Theter_Api=mongoose.model('Theter', theterApi);
 module.exports=Theter_Api;
