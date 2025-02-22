const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Company', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      email:{
        type: DataTypes.STRING,
        // da li ovdje ide unique: true,
        allowNull: false,
      },
      password:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      name:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      description:{
        type: DataTypes.STRING,
        allowNull: true,
      },
  },{
    freezeTableName: true
  })
}