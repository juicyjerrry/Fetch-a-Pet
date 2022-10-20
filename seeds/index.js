const seedPetData = require('./petData');
const seedUserData = require('./userData');

 
const sequelize = require('../config/connection');
const { User } = require('../models');

const seedAll = async () => {
  
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedPetData();
  console.log('\n----- PETS SEEDED -----\n');

  await seedUserData();
  console.log('\n----- USERS SEEDED -----\n');
  await User.create(    {
    "username": "test",
    "first_name": "test",
    "last_name": "test",
    "email": "test@test.com",
    "password": "test123456"
}
)

  process.exit(0);
};

seedAll();