const router = require('express').Router();
const User = require('../../models/User');

router.get('/', async (req, res) => {
    const userData = await User.findAll().catch((err) => {
      res.json(err);
    });
    res.json(userData);
  });

router.post('/', async (req, res) => {
    try {
      const userData = await User.create(req.body);
      res.status(200).json(userData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  
//Logout route
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

  module.exports = router;
