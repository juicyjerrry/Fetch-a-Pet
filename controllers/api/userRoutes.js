const router = require('express').Router();
const User = require('../../models/User');

//find all users
router.get('/', async (req, res) => {
    const userData = await User.findAll({
      attributes: { exclude: ['password']}
    })
    .catch((err) => {
      res.json(err);
    });
    res.json(userData);
  });

//TO DO: find specific user
router.get('/:id', (req, res) => {
  User.findOne({
    attributes: { exclude: ['password'] },
    where: {
      user_id: req.params.id
    }
    .then(UserData => {
      if (!UserData) {
        res.status(404).json({ message: 'No user with this id' });
        return;
      }
      res.json(UserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    }),
  })
});

//add a user
//expecting username, first_name, last_name, valid email, password
router.post('/', async (req, res) => {
    try {
      const userData = await User.create({
        username: req.body.username,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password
      })
      res.status(200).json(userData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

// login
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.user_id;
      req.session.username = userData.username;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });

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
