const { Pet } = require('../models');

const petdata = [
    {
        name: 'Blossoming Apricot',
        breed: 'Dalmation',
        filename: 'Dalmation.jpg',
        description:
            'Loves bones and spots and firetrucks.',
        age: '3'
    },
    {
        name: '',
        breed: '',
        filename: '',
        description:
            '',
        age: ''
    },
    {
        name: '',
        breed: '',
        filename: '',
        description:
            '',
        age: ''
    },
    {
        name: '',
        breed: '',
        filename: '',
        description:
            '',
        age: ''
    },
    {
        name: '',
        breed: '',
        filename: '',
        description:
            '',
        age: ''
    },
    {
        name: '',
        breed: '',
        filename: '',
        description:
            '',
        age: ''
    },
  ];

  
const seedPets = () => Pet.bulkCreate(petdata);

module.exports = seedPets;
