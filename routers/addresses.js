const { create, remove, update, get, getOne } = require('../controller/addresses');

module.exports = function(app, connection){
    app.route('/addresses')
       .get((req, res) => get(req,res, connection))
       .post((req, res) => create(req,res, connection))



    app.route('/addresses/:id')
        .get((req, res) => getOne(req, res, connection))

        .put((req, res) => update(req, res, connection))

        .delete((req, res) => remove(req, res, connection));

};