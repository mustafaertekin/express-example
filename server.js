const express = require('express')
const app = express()

require("./routers/students.js")(app);
require("./routers/classes.js")(app);
require("./routers/enrollments.js")(app);



app.listen(3000, () => console.log('Example app listening on port 3000!'))