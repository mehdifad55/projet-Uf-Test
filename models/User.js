const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
     nom: {
         type: String,
         required: true,
         min: 6,
         max: 255

     },
     prenom: {
        type: String,
        required: true,
        min: 6,
        max: 255
     },
      email: {
         type: String,
         required: true,
         max: 255,
         min:6

     },
     MDP: {
         type: String,
         required: true,
         max: 1024,
         min: 6
     },
    Role:{
        type:String 
     },
     Admin:{
         type: Boolean,
     }
});

module.exports = mongoose.model('User',userSchema);