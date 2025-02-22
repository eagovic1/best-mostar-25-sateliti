const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Event_Volunteer',{
    confirmed:{
      type: DataTypes.BOOLEAN,
      allowNUll: false,
    }
  },{
    freezeTableName: true,
  })
}