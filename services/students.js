const insert = (connection, student) => {
    return connection.student.create(student);
}

const removeById = (connection, id) => {
    return connection.student.destroy({ where: { stuId: id}});
}

const findById = (connection, id) => { 
    return connection.student.findOne({ where: { stuId: id}});
}

const findAll = (connection) => {
    return connection.student.findAll({});
}

const updateById = (connection, student) => {
    return connection.student.findOne({ where: { stuId: student.stuId}})
            .then(dbObject => {
                 return dbObject.update(student);
            });
    // return connection.student.update({ where: { stuId: id}});
}

module.exports = {
    insert, removeById , findById, findAll, updateById
}

/*

connection.student.find({
        include: [{
            model: connection.lecture,
            as:'class', 
        }],
        where: { stuId: 5 }
        }).then(result => {
            res.json(result);
        }); 

*/