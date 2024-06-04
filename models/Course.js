const { DataTypes } = require("sequelize");
const db = require("../db/conn");
const User = require("../models/User");

const Course = db.define("Course", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  duration: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  price: {
    type: DataTypes.DECIMAL(10, 5),
    allowNull: false,
  },
});
Course.belongsTo(User);
User.hasMany(Course);

module.exports = Course;
