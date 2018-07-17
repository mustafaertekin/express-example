const insert = (connection, school) => {
    return connection.school.create(school);
}

const removeById = (connection, id) => {
    return connection.school.destroy({ where: { schoolId: id}});
}

const findById = (connection, id) => { 
    return connection.school.findOne({ where: { schoolId: id}});
}

const findAll = (connection) => {
    return connection.school.findAll({});
}

const updateById = (connection, school) => {
    return connection.school.findOne({ where: { schoolId: school.schoolId}})
            .then(dbObject => {
                 return dbObject.update(school);
            });
}

module.exports = {
    insert, removeById , findById, findAll, updateById
}