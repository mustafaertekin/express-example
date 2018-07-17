const insert = (connection, session) => {
    return connection.session.create(session);
}

const removeById = (connection, id) => {
    return connection.session.destroy({ where: { sessionId: id}});
}

const findById = (connection, id) => { 
    return connection.session.findOne({ where: { sessionId: id}});
}

const findAll = (connection) => {
    return connection.session.findAll({});
}

const updateById = (connection, session) => {
    return connection.session.findOne({ where: { stuId: session.sessionId}})
            .then(dbObject => {
                 return dbObject.update(session);
            });
}

module.exports = {
    insert, removeById , findById, findAll, updateById
}