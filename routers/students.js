module.exports = function(app, connection){
    app.route('/students')
    .get(function (req, res) {  
        connection.student.find({
            include: [{
                model: connection.lecture,
                as:'class', 
            }],
            where: { stuId: 5 }
            }).then(result => {
               res.json(result);
            });
        })

        .post(function (req, res) {
            let student = req.body;

            let sql = `insert into uni_student (firstName, lastName, major, credits) values ('${student.firstName}','${student.lastName}','${student.major}','${student.credits}')`;
            connection.query(sql, function (err, result) {
                if (err)
                    throw err;

                res.json(result);
            });

        })



    app.route('/students/:id')
        .get((req, res) =>  {

                let sql = `select * from uni_student where stuId=${req.params.id}`;
                connection.query(sql, function (err, result) {
                    if (err)
                        throw err;

                    res.json(result);
                });
            }
        )

        .put(function (req, res) {
                let student = req.body;

                let sql = `UPDATE uni_student
                        SET firstName='${student.firstName}', 
                            lastName='${student.lastName}', 
                            major='${student.major}', 
                            credits=${student.credits} 
                        WHERE stuId=${req.params.id}`;

                connection.query(sql, function (err, result) {
                    if (err)
                        throw err;

                    res.json(result);
            });
        })

        .delete(function (req, res) {

            let sql = `delete from uni_student where stuId=${req.params.id}`;
            connection.query(sql, function (err, result) {
                if (err)
                    throw err;

                res.json(result);
            });
        });

};