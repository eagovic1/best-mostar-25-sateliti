const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Prizes',{
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    event_id:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    random:{
      type: DataTypes.BOOLEAN,
      allowNUll: false,
    },
    default:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },{
    freezeTableName: true,
  })
}