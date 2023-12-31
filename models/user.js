const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('Users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey: true,
    
      },
      name:Sequelize.STRING,
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      phone: {
        type:Sequelize.INTEGER(10),
        allowNull: false
      }
});

module.exports = User;