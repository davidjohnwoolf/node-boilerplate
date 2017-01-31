let app = require('express')();
let tasks = require('./routes/tasks');
let port = process.env.PORT || 1349;

//express middleware
app.use('/', tasks);

//server
app.listen(port, () => console.log('listening on port ' + port));
