const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

// const hash = bcrypt.hashSync(User.password, 10);
// User.password = hash;

// User.add(user)
//   .then((newuser) => {
//     const token = generateToken(newUser);
//     res
//       .status(201)
//       .json({ created_user: newUser, token: token, user_id });
//   })
//   .catch((err) => {
//     res.status(500).json({
//       message: "There was an error adding a user to the database",
//       err,
//     });
//   });

// router.post("/login", (req, res) => {
//   const { username, password } = req.body;

//   User.findBy({ username })
//     .first()
//     .then((user) => {
//       if (user && bcrypt.compareSync(password, user.password)) {
//         const token = generateToken(user);
//         res
//           .status(200)
//           .json({
//             username: user.username,
//             first_name: user.first_name,
//             last_name: user.last_name,
//             email: user.email,
//             token: token,
//             user_id: user.id,
//           });
//       };
//     });
//   });

User.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;
