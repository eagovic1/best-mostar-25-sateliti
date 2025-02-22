const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Group',{
      id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      founder_id:{
        type: DataTypes.INTEGER,
        allowNull: false
      },
      name:{
        type: DataTypes.STRING,
        allowNull: false
      },
      num_of_members:{
        type: DataTypes.INTEGER,
        defaultValue: 1,
        allowNull: false
      },
      max_num_of_members:{
        type: DataTypes.INTEGER,
        allowNull: true
      }
  },{
    freezeTableName: true
  })
}