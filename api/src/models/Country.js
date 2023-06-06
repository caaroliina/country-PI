const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    flagImg: {
      type: DataTypes.STRING,
    },
    region: {
      type: DataTypes.STRING,
    },
    capital: {
      type: DataTypes.STRING,
    },
    subregion: {
      type: DataTypes.STRING,
    },
    population: {
      type: DataTypes.INTEGER
    }
  },
  {
      timestamp: false
  });
};
