const { DataTypes } = require("sequelize");
const db = require("../db/conn");
const Course = require("../models/Course");
const User = require("../models/User");

const Order = db.define("Order", {
  number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  totalprice: {
    type: DataTypes.DECIMAL(10, 5),
    allowNull: false,
  },
});

User.hasMany(Order);
Order.hasMany(Course);

module.exports = Order;
