const sequelize = require('sequelize');
 
exports.init = (connection) => {
    return connection.define('teacher', {
        teacherId: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: sequelize.STRING(50),
        lastName: sequelize.STRING(50),
        address: sequelize.STRING(20),
        prof: sequelize.STRING(20),
        age: sequelize.INTEGER
    });
}