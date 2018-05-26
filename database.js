const Sequelize = require('sequelize');
var shemas = require('./shemas');
exports.init = () => {
    const connection = new Sequelize(
        'db_itclub', 'db_administrator', '1tclub_db_pass!', {
        host: 'db4free.net',
        dialect: 'mysql',
        define: {
            freezeTableName: true,
            timestamps: false
        }
    });
    [student, clazz, enrollment] = shemas.init(connection),
    
    connection.authenticate().then(() => {
        console.log('Connection has been established successfully!!!');
    })
    .catch(err => console.log('Connection ERROR!', err));
    
    return {connection, student, clazz, enrollment};
}