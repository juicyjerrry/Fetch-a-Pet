const { User } = require('../models');

const userData = require('./userData.json');
  
const seedUserData = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUserData;
