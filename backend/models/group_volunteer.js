const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Group_Volunteer',{
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
  },{
    freezeTableName: true
  })
}