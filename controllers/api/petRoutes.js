const router = require('express').Router();
const Pet = require('../../models/Pets');
const withAuth = require('../../utils/auth');

router.post('/addpet', withAuth, async (req, res) => {
  try {
    const newPet = await Pet.create(req.body);
    res.status(200).json(newPet);
  } catch (err) {
    res.status(400).json(err);
  }
});

//deleting pet id: copied from unit 28
router.delete('/:id', withAuth, async (req, res) => {
try {
    const petData = await Pet.destroy({
      where: {
        id: req.params.id,
      },
    });
 
    console.log(`DB delete pet ${petData}`);
    if (!petData) {
      res.status(404).json({ message: 'No pet found with this id!' });
      return;
    }

    res.status(200).json(petData);
  } catch (err) {
    res.status(500).json(err);
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