const router = require('express').Router();
const { User, Pets } = require('../models');
const withAuth = require('../utils/auth');

//adding from unit 23
router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//end of add

// router.get('/', async (req, res) => {
//   try {
//     const petData = await Pets.findAll({
//     });

//     const Pets = petData.map((Pets) => Pets.get({ plain: true }));

//     res.render('homepage', { 
//       Pets, 
//       logged_in: req.session.logged_in 
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/pets/:id', async (req, res) => {
//   try {
//     const petData = await Pets.findByPk(req.params.id, {
//     });

//     const Pets = petData.get({ plain: true });

//     res.render('petdetails', {
//       ...Pets,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/homepage');
    return;
  }

  res.render('login');
});

module.exports = router;
