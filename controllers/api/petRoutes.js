const router = require('express').Router();
const Pet   = require('../../models/Pets');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newPet = await Pet.create(req.body);

    res.status(200).json(newPet);
  } catch (err) {
    res.status(400).json(err);
  }
});

// get pets serialized data
router.get('/', async (req, res) => {
    try {
      //get all pet data , need only filename to get the pet image file
      const petData = await Pet.findAll({raw : true});

      res.json(petData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;