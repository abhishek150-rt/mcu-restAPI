const validator =require("validator");
const mongoose= require("mongoose");

//Creating Schema for Superheroes
const superheroesSchema= new mongoose.Schema({
    ranking:{
        type:Number,
        unique:true,
        required:true
    },
    name:{
        type:String,
        unique:true,
        required:true,
        uppercase:true,
    },
    first_appearance:{
        type:String,
        required:true,
        uppercase:true,
    },
    last_appearance:{
        type:String,
        required:true,
        uppercase:true,
    },
    weapon:{
        type:String,
        required:true,
        uppercase:true,
        unique:true
    },
    score:{
        type:Number,
        required:true,
    },

});

//Creating model/collection
const Superhero = new mongoose.model("Superhero",superheroesSchema);

module.exports= Superhero