const student = require('./students');
const clazz = require('./classes');

const shemas = [student, clazz];

module.exports = {
    init: (connection) => shemas.map(shema => shema.init(connection))
}
