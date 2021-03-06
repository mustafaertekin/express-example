const { create, remove, update, get, getOne } = require('../controller/students');

module.exports = function(app, connection){
    app.route('/students')
       .get((req, res) => get(req,res, connection))
       .post((req, res) => create(req,res, connection))



    app.route('/students/:id')
        .get((req, res) => getOne(req, res, connection))

        .put((req, res) => update(req, res, connection))

        .delete((req, res) => remove(req, res, connection));

};