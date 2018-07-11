module.exports = function(app, connection){
    app.route('/classes')
        .get(function (req, res) {

            let sql = "select * from uni_class";
            connection.query(sql, function (err, result) {
                if (err)
                    throw err;

                res.json(result);
            });
        })

        .post(function (req, res) {
            let className = req.body;

            let sql = `insert into uni_class (schedule, room, name) values ('${className.schedule}','${className.room}','${className.name}')`;
            connection.query(sql, function (err, result) {
                if (err)
                    throw err;

                res.json(result);
            });

        })


    app.route('/classes/:id')
        .get((req, res) =>  {
            connection.lecture.find({
                include: [{
                    model: connection.student,
                    as:'student', 
                }],
                 where: { classNumber: req.params.id }
                }).then(result => {
                   res.json(result);
                }); 
            }
        )

        .put(function (req, res) {
            let clazz = req.body;

            let sql = `UPDATE uni_class SET schedule='${clazz.schedule}', room='${clazz.room}', name='${clazz.name}' WHERE classNumber=${req.params.id}`;
            connection.query(sql, function (err, result) {
                if (err)
                    throw err;

                res.json(result);
            });
        })

        .delete(function (req, res) {

            let sql = `delete from uni_class where classNumber=${req.params.id}`;
            connection.query(sql, function (err, result) {
                if (err)
                    throw err;

                res.json(result);
            });
        });
}