

const insert = (connection) => {

}

const removeById = (connection) => {
    
}

const findById = (connection, id) => { 
    return connection.student.findOne({ where: { stuId: id}});
}

const findAll = (connection) => {
    return connection.student.findAll({});
}

const updateById = (connection) => {
    
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