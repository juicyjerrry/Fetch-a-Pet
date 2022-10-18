const seedPets = require('./petData');
const seedUsers = require('./userData');

 
const sequelize = require('../config/connection');

const seedAll = async () => {
  
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedPets();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedUsers();
  console.log('\n----- PRODUCTS SEEDED -----\n');


  process.exit(0);
};

seedAll();