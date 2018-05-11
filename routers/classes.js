module.exports = function(app){
    app.route('/classes')
        .get(function (req, res) {
            res.send('Get all classes')
        })
        .post(function (req, res) {
            res.send('Add a new class')
        })
        .put(function (req, res) {
            res.send('Update a class')
        })
        .delete(function (req, res) {
            res.send('Delete a class')
        })

    app.route('/classes/:id')
        .get(function (req, res) {
            res.send('Get the class with id: ' + req.params.id)
        })
}