const router = require('express').Router(); 
const verify = require('./verifytoken');
const Course = require('../models/Course');
//Renvoi toutes les courses
router.get('/', verify,async (req,res) =>{
   try{
       const Courses = await Course.find();
       res.json(Courses);

   }catch(err){
       res.json({message:err});
   }
});

//Une course Specific
router.get('/:CourseId',verify,async (req,res) => {
    try{
   const course= await Course.findById(req.params.CourseId);
   res.json(course);
    }catch(err){
        res.json({message: err});
    }

});
//Creation course pour test 
router.post('/', verify , async (req,res) => {
   const course = new Course({
       longitude: req.body.longitude,
       latitude: req.body.latitude
   });
   try{
       const newcourse =await course.save()
   }catch(err) {
       res.status(400).send(err);
   }
});




 
 
 








module.exports = router;