const insert = (connection, clazz) => {
    return connection.clazz.create(clazz);
}

const removeById = (connection, id) => {
    return connection.clazz.destroy({ where: { classId: id}});
}

const findById = (connection, id) => { 
    return connection.clazz.findOne({ where: { classId: id}});
}

const findAll = (connection) => {
    return connection.clazz.findAll({});
}

const updateById = (connection, clazz) => {
    return connection.clazz.findOne({ where: { classId: clazz.classId}})
            .then(dbObject => {
                 return dbObject.update(clazz);
            });
}

module.exports = {
    insert, removeById , findById, findAll, updateById
}
