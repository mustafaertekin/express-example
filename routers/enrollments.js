module.exports = function(app, connection){
    app.route('/enrollments')


        .put(function (req, res) {
            res.send('Update an enrollment')
        })
        .delete(function (req, res) {
            res.send('Delete an enrollment')
        })

    app.route('/enrollments/students/:stuId/classes/:classId')
        .get((req, res) =>  {

                let sql = `SELECT std.firstName Vorname, std.lastName Nachname, cls.name Fach, enr.grade Note
                           FROM
                                uni_enrollment enr INNER JOIN uni_student std on(enr.fk_stuId=std.stuId)
                                                   INNER JOIN uni_class cls on(enr.fk_classNumber=cls.classNumber)
                           WHERE std.stuId=${req.params.classId}
                                 AND
                                 cls.classNumber=${req.params.classId}`;

                connection.query(sql, function (err, result) {
                    if (err)
                        throw err;

                    res.json(result);
                });
            }
        )

        .put((req, res) =>  {

                let grade = req.body.grade;
                let studentId = req.params.stuId;
                let classId = req.params.classId;

                let sql = `UPDATE uni_enrollment enr SET grade=${grade}
                       WHERE enr.fk_stuId=${studentId} AND enr.fk_classNumber=${classId}`;

                connection.query(sql, function (err, result) {
                    if (err)
                        throw err;

                    res.json(result);
                });
            }
        )
}