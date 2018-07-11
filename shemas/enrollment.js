const sequelize = require('sequelize');

exports.init = (connection) => {
    return connection.define('uni_enrollment', { 
        fk_stuId: {
            type: sequelize.INTEGER, 
        },
        fk_classNumber: {
            type: sequelize.STRING, 
        }, 
        grade: {
            type: sequelize.INTEGER, 
        }
    })
}