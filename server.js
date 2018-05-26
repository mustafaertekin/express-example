const mysql = require('mysql');
const express = require('express');
const app = express();
const database = require('./database');

var bodyParser = require('body-parser')
const connection = database.init();



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


/* BURADAN CIKARDIK ARTIK, database.js icine aldik!
const mysqlConnection = mysql.createConnection({
    host: "db4free.net",
    user: "db_administrator",
    password: "1tclub_db_pass!",
    database: "db_itclub"
}); */




require("./routers/students.js")(app, connection);
require("./routers/classes.js")(app, connection);
require("./routers/enrollments.js")(app, connection);





app.listen(3000, () => console.log('Example app listening on port 3000!'));