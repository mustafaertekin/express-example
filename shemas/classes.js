const sequelize = require('sequelize');


exports.init = (connection) => {
    return connection.define('uni_class', {
        classNumber: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: sequelize.STRING(50),
        schedule: sequelize.DATE,
        room: sequelize.INTEGER
    });
}