const sequelize = require('sequelize');
 
exports.init = (connection) => {
    return connection.define('session', {
        sessionId: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        sessionName: sequelize.STRING(20)
    });
}