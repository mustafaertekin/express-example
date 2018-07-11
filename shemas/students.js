const sequelize = require('sequelize');
 
exports.init = (connection) => {
    return connection.define('uni_student', {
        stuId: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: sequelize.STRING(50),
        lastName: sequelize.STRING(50),
        major: sequelize.STRING(20),
        credits: sequelize.INTEGER
    });
}