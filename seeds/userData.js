const { User} = require('../models');

const userdata = [
    {
        name: '',
        breed: '',
        filename: '',
        description:
            '',
        age: ''
    },

  ];

  
const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
