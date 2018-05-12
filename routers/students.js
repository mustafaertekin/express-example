module.exports = function(app, connection){

    app.route('/students')
        .get(function (req, res) {

            let sql = "select * from uni_student";
            connection.query(sql, function (err, result) {
                if (err)
                    throw err;

                res.json(result);
            });
        })
        .post(function (req, res) {
            res.send('Add a new student')
        })
        .put(function (req, res) {
            res.send('Update a student')
        })
        .delete(function (req, res) {
            res.send('Delete a student')
        });



    app.route('/students/:id')
        .get((req, res) =>  {

                let sql = `select * from uni_student where stuId=${req.params.id}`;
                connection.query(sql, function (err, result) {
                    if (err)
                        throw err;

                    res.json(result);
                });
            }
        );
};