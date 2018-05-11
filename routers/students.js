module.exports = function(app){
    app.route('/students')
        .get(function (req, res) {
            res.send('Get all students')
        })
        .post(function (req, res) {
            res.send('Add a new student')
        })
        .put(function (req, res) {
            res.send('Update a student')
        })
        .delete(function (req, res) {
            res.send('Delete a student')
        })

    app.route('/students/:id')
        .get((req, res) => res.json({
                "stuId":"10","FirstName": "Mustafa","LastName": "Ertekin","credits":98,"major":"Engineering" })
        );
};