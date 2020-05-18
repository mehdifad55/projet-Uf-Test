const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
     latitude: {
         type: String,
         required: true,
         min: 90,
         max: -90

     },
     longitude: {
        type: String,
        required: true,
        min: 90,
        max: -90
     }
});

module.exports = mongoose.model('Course',courseSchema);