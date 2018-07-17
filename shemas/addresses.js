const sequelize = require('sequelize');


exports.init = (connection) => {
    return connection.define('address', {
        addressId: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        streetName: sequelize.STRING(20),
        streetNr: sequelize.STRING(5),
        plz: sequelize.INTEGER,
        ort: sequelize.STRING(20)
    });
}