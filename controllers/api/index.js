const router = require('express').Router();
const userRoutes = require('./userRoutes');
const petRoutes = require('./petRoutes');
const petdetailRoutes = require('./petdetailRoutes');


router.use('/users', userRoutes);
router.use('/pets', petRoutes);
router.use('/petdetails', petdetailRoutes);


module.exports = router;
