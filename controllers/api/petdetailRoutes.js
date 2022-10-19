const router = require('express').Router();
const Pet   = require('../../models/Pets');

// get pets serialized data
router.get('/:petid', async (req, res) => {
    try {
      //get all pet data , need only filename to get the pet image file
      const petData = (await Pet.findByPk(req.params.petid)).get({plain: true});

      res.render('petdetails', petData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;