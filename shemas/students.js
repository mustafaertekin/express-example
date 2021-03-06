const sequelize = require('sequelize');
 
exports.init = (connection) => {
    return connection.define('student', {
        stuId: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: sequelize.STRING(50),
        lastName: sequelize.STRING(50),
        address: sequelize.INTEGER
    });
}