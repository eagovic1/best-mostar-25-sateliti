const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Volunteer', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    streak_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },{
     freezeTableName: true
  });
};
