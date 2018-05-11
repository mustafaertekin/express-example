module.exports = function(app){
    app.route('/enrollments')
        .get(function (req, res) {
            res.send('Get all enrollments')
        })
        .post(function (req, res) {
            res.send('Add a new enrollment')
        })
        .put(function (req, res) {
            res.send('Update an enrollment')
        })
        .delete(function (req, res) {
            res.send('Delete an enrollment')
        })

    app.route('/enrollments/students/:stuId/classes/:classId')
        .get(function (req, res) {
            res.send('Get the student with id: ' + req.params.stuId + ", " + req.params.classId)
        })
}