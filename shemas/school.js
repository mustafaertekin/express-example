const sequelize = require('sequelize');
 
exports.init = (connection) => {
    return connection.define('school', {
        schoolId: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        schoolName: sequelize.STRING(50)        
    });
}