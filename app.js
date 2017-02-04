let express = require('express');
let app = express();
let mongoose = require('mongoose');
let index = require('./routes/index');
let tasks = require('./routes/tasks');
let port = process.env.PORT || 1349;

//database
mongoose.connect('mongodb://localhost/node-boilerplate');

//middleware
app.use(express.static(__dirname + '/public'));

//routes
app.use('/', index);
app.use('/', tasks);

//server
app.listen(port, () => console.log('listening on port ' + port));
