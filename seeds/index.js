const seedPetData = require('./petData');
const seedUserData = require('./userData');

 
const sequelize = require('../config/connection');

const seedAll = async () => {
  
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedPetData();
  console.log('\n----- PETS SEEDED -----\n');

  await seedUserData();
  console.log('\n----- USERS SEEDED -----\n');


  process.exit(0);
};

seedAll();