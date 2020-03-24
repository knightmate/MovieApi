const mongoose = require('mongoose');


 //desgining the scahema for the movie
const movieApi= new mongoose.Schema(
    {
        movie_name:{
            type: String,
            required: true,
            unique:true,
            

        },
        movie_trailer:{
            type: String,
            
        },
        movie_overview:{
            type: String,
            
        },
        movie_poster:{
            type: String,
            required: true,
        },

        movie_length:{

            type:String,
            required:true
        }

    },{
        timestamps:true
    }
);


const Movie = mongoose.model('Movie',movieApi);

//exporting the schema
module.exports = Movie;