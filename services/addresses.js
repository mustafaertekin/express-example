const insert = (connection) => {
    return connection.address.insert({});
}

const removeById = (connection) => {
    return connection.address.removeById({ where: { addressId: id}});
}

const findById = (connection, id) => { 
    return connection.address.findById({ where: { addressId: id}});
}

const findAll = (connection) => {
    return connection.address.findAll({});
}

const updateById = (connection) => {
    return connection.address.updateById({ where: { addressId: id}});
}

module.exports = {
    insert, removeById , findById, findAll, updateById
}