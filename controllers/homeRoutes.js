const router = require('express').Router();
const { User, Pets } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        //get all user data and exclude id/pw
      const userData = await User.findAll({
        attributes: { exclude: ['id, password'] },
        order: [['email', 'ASC']],
      });
      //get all pet data and exclude id/filename
      const petData = await Pets.findAll({
        attributes: { exclude: ['id, filename'] },
        order: [['name', 'breed', 'description', 'age', 'ASC']],
      })

      const users = userData.map((project) => project.get({ plain: true }));
      const pets = petData.map((project) => project.get({ plain: true }));

      res.render('homepage', {
        users,
        pets,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;