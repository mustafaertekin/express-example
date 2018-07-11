const student = require('./students');
const lecture = require('./classes');
const enrollment = require('./enrollment');

const shemas = [student, lecture, enrollment];

module.exports = {
    init: (connection) => shemas.map(shema => shema.init(connection))
}
