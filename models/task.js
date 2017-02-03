let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let TaskSchema = new Schema({
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    dueDate: { type: 'string', required: true }
});

module.exports = mongoose.model('Task', TaskSchema);
