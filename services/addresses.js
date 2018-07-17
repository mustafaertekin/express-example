const insert = (connection, address) => {
    return connection.address.create(address);
}

const removeById = (connection, id) => {
    return connection.address.destroy({ where: { addressId: id}});
}

const findById = (connection, id) => { 
    return connection.address.findOne({ where: { addressId: id}});
}

const findAll = (connection) => {
    return connection.address.findAll({});
}

const updateById = (connection, address) => {
    return connection.address.findOne({ where: { addressId: address.addressId}})
            .then(dbObject => {
                 return dbObject.update(address);
            });
}

module.exports = {
    insert, removeById , findById, findAll, updateById
}
