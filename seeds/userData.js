const { User } = require('../models');

const userdata = [
    {
        username: 'Johnnyappleseed',
        email: 'johnnyappleseed@appletrees.com',
        password: 'appletree123',
    },
    {
        username: 'Floatingjelly',
        email: 'floatingjellyfish@water.com',
        password: 'pbandjelly',
    },
    {
        username: 'TroublesomeTrio',
        email: 'trouble3@civikli.com',
        password: 'J0AL8yImZ3&#',
    },
    {
        username: 'FantasticFour',
        email: 'fancy4@civikli.com',
        password: '1&cAoF3a1pi%',
    },
    {
        username: 'FunniestFive',
        email: 'fun5@civikli.com',
        password: 'l%y^VS453j4b',
    },
    {
        username: 'CivilizedSextuplets',
        email: 'sexy6@civikli.com',
        password: 'H%4EO*4x6Bip',
    },
  ];

  
const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
