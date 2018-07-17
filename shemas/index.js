const student = require('./students');
const lecture = require('./classes');
const session = require('./sessions');
const teacher = require('./teachers');
const school = require('./school');
const address = require('./addresses');


const shemas = [student, session, teacher, school, lecture, address];

module.exports = {
    init: (connection) => shemas.map(shema => shema.init(connection))
}
