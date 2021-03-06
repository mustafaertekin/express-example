const sequelize = require('sequelize');


exports.init = (connection) => {
    return connection.define('class', {
        classId: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        className: sequelize.STRING(20)
    });
}