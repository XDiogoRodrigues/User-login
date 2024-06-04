const { DataTypes } = require("sequelize");
const db = require("../db/conn");
const Login = require("../models/Login");

const User = db.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  surname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthday: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.belongsTo(Login);
Login.hasOne(User);

module.exports = User;
