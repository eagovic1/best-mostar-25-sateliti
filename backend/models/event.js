const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Event', {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        company_id:{
           type: DataTypes.INTEGER,
           allowNull: false,
        },
        location:{
          type: DataTypes.STRING,
          allowNull: false,
        },
        name:{
          type: DataTypes.STRING,
          allowNull: false,
        },
        description:{
          type: DataTypes.STRING,
          allowNull: true //ne mora se komentarisati event?
        },
    },{
      freezeTableName: true
    })
}