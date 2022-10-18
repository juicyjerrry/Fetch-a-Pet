const router = require('express').Router();
const { User, Pets } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const petData = await Pets.findAll({
    });

    const Pets = petData.map((Pets) => Pets.get({ plain: true }));

    res.render('homepage', { 
      Pets, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/pets/:id', async (req, res) => {
  try {
    const petData = await Pets.findByPk(req.params.id, {
    });

    const Pets = petData.get({ plain: true });

    res.render('petdetails', {
      ...Pets,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/homepage');
    return;
  }

  res.render('login');
});

module.exports = router;
