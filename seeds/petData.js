const { Pet } = require('../models');

const petdata = [
    {
        name: 'Blossoming Apricot',
        breed: 'Dalmation',
        type: 'dog',
        filename: 'dalmation.jpg',
        description:
            'Loves bones and spots and firetrucks.',
        age: '3',
        // Coordinates: 
    },
    {
        name: 'Sugar Rush',
        breed: 'Corgi',
        type: 'dog',
        filename: 'corgi.jpg',
        description:
            'Loves to eat candy',
        age: '1'
    },
    {
        name: 'Ziti',
        breed: 'Orange Tabby',
        type: 'cat',
        filename: 'orangetabby.jpg',
        description:
            'Loves to bite toes',
        age: '1'
    },
    {
        name: 'Bernard',
        breed: 'St. Bernard',
        type: 'dog',
        filename: 'stbernard.jpg',
        description:
            'Gets along well with children',
        age: '4'
    },
    {
        name: 'Monster Truck',
        breed: 'Grey Striped Tabby',
        type: 'cat',
        filename: 'monstertruck.jpg',
        description:
            'Does not mess around',
        age: '6'
    },
    {
        name: 'Geck',
        breed: 'Bearded Dragon',
        type: 'other',
        filename: 'geck.jpg',
        description:
            'Sleeps most of the day away',
        age: '2'
    },
  ];

  
const seedPets = () => Pet.bulkCreate(petdata);

module.exports = seedPets;
