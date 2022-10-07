const { User} = require('../models');

const userdata = [
    {
        email: 'johnnyappleseed@appletrees.com',
        password: 'appletree123',
    },
    {
        email: 'floatingjellyfish@water.com',
        password: 'pbandjelly',
    },
    {
        email: 'trouble3@civikli.com',
        password: 'J0AL8yImZ3&#',
    },
    {
        email: 'fancy4@civikli.com',
        password: '1&cAoF3a1pi%',
    },
    {
        email: 'fun5@civikli.com',
        password: 'l%y^VS453j4b',
    },
    {
        email: 'sexy6@civikli.com',
        password: 'H%4EO*4x6Bip',
    },
  ];

  
const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
