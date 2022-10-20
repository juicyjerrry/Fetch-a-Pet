const router = require('express').Router();
const { User, Pets } = require('../models');
const withAuth = require('../utils/auth');

//adding from unit 23
router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['email', 'ASC']],
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

router.get('/pets', async (req, res) => {
  try {
    const petData = await Pets.findAll({
    });

    const pets = petData.map((pet) => pet.get({ plain: true }));

    res.render('petdata', { 
      petData: pets, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/pets/:id', async (req, res) => {
  try {
    const petData = await Pets.findByPk(req.params.id);

    const pets = petData.get({ plain: true });

    res.render('petdetails', {
      ...pets,
      logged_in: req.session.logged_in
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
