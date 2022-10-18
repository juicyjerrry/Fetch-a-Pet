const { User } = require('../models');

const userData = require('./userData.json');
  
const seedUserData = () => User.bulkCreate(userData);

module.exports = seedUserData;
