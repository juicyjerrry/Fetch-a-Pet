const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}


const hash = bcrypt.hashSync(user.password, 10);
user.password = hash;

Users.add(user)
  .then((newuser) => {
    const token = generateToken(newUser);
    res
      .status(201)
      .json({ created_user: newUser, token: token, user_id });
  })
  .catch((err) => {
    res.status(500).json({
      message: "There was an error adding a user to the database",
      err,
    });
  });
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then((user) => {
      if (user && bcrypt.compareSync(password, user.password)) {

        res
          .status(200)
          .json({
            username: user.username,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            user_id: user.id,
          });
      };
    });
});

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
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
