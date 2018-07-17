const insert = (connection) => {
    return connection.classes.insert({});
}

const removeById = (connection) => {
    return connection.classes.removeById({ where: { classId: id}});
}

const findById = (connection, id) => { 
    return connection.classes.findById({ where: { classId: id}});
}

const findAll = (connection) => {
    return connection.classes.findAll({});
}

const updateById = (connection) => {
    return connection.classes.updateById({ where: { classId: id}});
}

module.exports = {
    insert, removeById , findById, findAll, updateById
}