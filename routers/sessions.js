const { create, remove, update, get, getOne } = require('../controller/sessions');

module.exports = function(app, connection){
    app.route('/sessions')
       .get((req, res) => get(req,res, connection))
       .post((req, res) => create(req,res, connection))



    app.route('/sessions/:id')
        .get((req, res) => getOne(req, res, connection))

        .put((req, res) => update(req, res, connection))

        .delete((req, res) => remove(req, res, connection));

};