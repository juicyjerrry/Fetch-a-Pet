const router = require('express').Router();
const Pet = require('../../models/Pets');
const withAuth = require('../../utils/auth');

router.post('/addpet', withAuth, async (req, res) => {
  try {
    console.log("checkpoint 1")
    const newPet = await Pet.create({ 
      ...req.body,
      user_id: req.session.user_id,
     });
     console.log("checkpoint 2")

    res.status(200).json(newPet);
  } catch (err) {
    res.status(400).json(err);
  }
});

// get pets serialized data
// router.get('/pets', async (req, res) => {
//     try {
      
//       const petData = await Pet.findAll({raw : true});

//       res.json(petData);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

  //get all pet data , need only filename to get the pet image file


module.exports = router;