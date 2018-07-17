const { insert, removeById , findById, findAll, updateById } =  require('../services/school');

const create = (req, res, connection) => {
  insert(connection, req.body)
  .then(result => {
    res.json(result);
  })
  .catch(err => res.status(404).json(err));
}

const remove = (req, res, connection) => {
  removeById(connection, req.params.id)
  .then(result => {
    res.json(result);
  })
  .catch(err => res.status(404).json(err));
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

const update = (req, res, connection) => {
  updateById(connection, req.body)
  .then(result => {
    res.json(result);
  })
  .catch(err => res.status(404).json(err));
}

module.exports = {
    create,
    remove,
    get,
    update,
    getOne
}