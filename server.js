const mysql = require('mysql');
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const database = require('./database');

const connection = database.init();
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
  
require("./routers/students.js")(app, connection);
require("./routers/classes.js")(app, connection);
require("./routers/enrollments.js")(app, connection);
 
app.listen(3000, () => console.log('Example app listening on port 3000!'));


/**
 * TODOs : 
 * student 
 * class
 * school
 * session
 * address
 * teacher
 * 
 * 
 * 
 */