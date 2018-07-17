const insert = (connection, teacher) => {
    return connection.teacher.create(teacher);
}

const removeById = (connection, id) => {
    return connection.teacher.destroy({ where: { teacherId: id}});
}

const findById = (connection, id) => { 
    return connection.teacher.findOne({ where: { teacherId: id}});
}

const findAll = (connection) => {
    return connection.teacher.findAll({});
}

const updateById = (connection, teacher) => {
    return connection.teacher.findOne({ where: { stuId: teacher.teacherId}})
            .then(dbObject => {
                 return dbObject.update(teacher);
            });
}

module.exports = {
    insert, removeById , findById, findAll, updateById
}