const router = require('express').Router();
const userRoutes = require('./userRoutes');
<<<<<<< HEAD


router.use('/users', userRoutes);
// router.use('/projects', projectRoutes);
=======
const petRoutes = require('./petRoutes');
const petdetailRoutes = require('./petdetailRoutes');


router.use('/users', userRoutes);
router.use('/pets', petRoutes);
router.use('/petdetails', petdetailRoutes);

>>>>>>> 0bbd3add662d441ad8f22ff1607771088bb64434

module.exports = router;
