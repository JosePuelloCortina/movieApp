const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('movie', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        year: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        genre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        director: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        actors: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        poster: {
            type: DataTypes.STRING,
            allowNull: false,
        }
        
    })
}