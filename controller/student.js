const { insert, removeById , findById, findAll, updateById } =  require('../services/students');

const create = () => {

}

const remove = () => {
    
}

const get = (req, res, connection) => {
    findAll(connection)
    .then(result => {
        res.json(result);
    })
    .catch(err => res.status(404).json(err)); 
}

const getOne = (req, res, connection) => {
    findById(connection, req.params.id)
    .then(result => {
        res.json(result);
    })
    .catch(err => res.status(404).json(err)); 
}

const update = () => {
    
}

module.exports = {
    create,
    remove,
    get,
    update,
    getOne
}