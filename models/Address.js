const { DataTypes } = require("sequelize");
const db = require("../db/conn");
const User = require("../models/User");

const Address = db.define("Address", {
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  street: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  neighborhood: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cep: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Address.belongsTo(User);
User.hasMany(Address);
module.exports = Address;
