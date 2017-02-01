let app = require('express')();
let mongoose = require('mongoose');
let tasks = require('./routes/tasks');
let port = process.env.PORT || 1349;

//connect to database
mongoose.connect('mongodb://localhost/node-boilerplate');

//express middleware
app.use('/', tasks);

//server
app.listen(port, () => console.log('listening on port ' + port));
