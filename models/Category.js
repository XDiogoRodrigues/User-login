const { DataTypes } = require("sequelize");
const db = require("../db/conn");
const Course = require("../models/Course");

const Category = db.define("Category", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Category.hasMany(Course);
Course.belongsTo(Category);

module.exports = Category;
