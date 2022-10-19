const router = require('express').Router();
const Pet   = require('../../models/Pets');

// get pets serialized data
router.get('/', async (req, res) => {
    try {
      //get all pet data , need only filename to get the pet image file
      const petData = await Pet.findAll().get({plain: true});

      res.render('petdata', petData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;