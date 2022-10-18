const { Pets } = require('../models');

const petData = require('./petData.json');

const seedPetData = () => Pets.bulkCreate(petData);

module.exports = seedPetData;
