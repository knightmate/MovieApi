const mongoose = require('mongoose');


 //desgining the scahema for the movie
const movieApi= new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
        },
        quantity:{
            type:String,
            required:true,
        }

    },{
        timestamps:true
    }
);


const Movie = mongoose.model('Movie',movieApi);

//exporting the schema
module.exports = Movie;