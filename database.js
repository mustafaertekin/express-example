const Sequelize = require('sequelize');
var shemas = require('./shemas');
exports.init = () => {
    const connection = new Sequelize(
        'test_db', 'mertekin', 'jOdj892', {
        host: 'webhuus.ch',
        dialect: 'mysql',
        define: {
            freezeTableName: true,
            timestamps: false
        }
    });
    
    connection.authenticate()
    .then(() => console.log('Connection has been established successfully!!!'))
    .catch(err => console.log('Connection ERROR!', err)); 
    
    const [
        student,
        session,
        teacher,
        school,
        clazz,
        address
    ] = shemas.init(connection);
    

    // connection.sync({ force: true });


    // TODO :  this can be put on the req object and get it from there.
    const sequalize = {
        connection: connection,
        student,
        clazz,
        address,
        session,
        school,
        teacher
    };

/*     // UNDER HERE, DEFINE SCHEMA RELATIONSHIPS
    sequalize.student.belongsToMany(sequalize.lecture, {
        through: sequalize.enrollment,
        as: 'class',
        foreignKey: 'fk_stuId', 
    });

    sequalize.lecture.belongsToMany(sequalize.student, {
        through: sequalize.enrollment,
        as: 'student',
        foreignKey: 'fk_classNumber', 
    });
      */

    return sequalize;
}
