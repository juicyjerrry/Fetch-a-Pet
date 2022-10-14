const { User } = require('../models');

const userdata = [
    {
        username: 'Johnnyappleseed',
        first_name: 'Johnny',
        last_name: 'Apple',
        email: 'johnnyappleseed@appletrees.com',
        password: 'appletree123',
    },
    {
        username: 'Floatingjelly',
        first_name: 'Jerry',
        last_name: 'Jelly',
        email: 'floatingjellyfish@water.com',
        password: 'pbandjelly',
    },
    {
        username: 'TroublesomeTrio',
        first_name: 'Michael',
        last_name: 'Johnson',
        email: 'trouble3@civikli.com',
        password: 'J0AL8yImZ3&#',
    },
    {
        username: 'FantasticFour',
        first_name: 'Doctor',
        last_name: 'Newground',
        email: 'fancy4@civikli.com',
        password: '1&cAoF3a1pi%',
    },
    {
        username: 'FunniestFive',
        first_name: 'Timmy',
        last_name: 'Turner',
        email: 'fun5@civikli.com',
        password: 'l%y^VS453j4b',
    },
    {
        username: 'CivilizedSextuplets',
        first_name: 'Spongebob',
        last_name: 'Squarepants',
        email: 'sexy6@civikli.com',
        password: 'H%4EO*4x6Bip',
    },
  ];

  
const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
