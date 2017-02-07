let router = require('express').Router();
var Task = require('../models/task');
let bodyParser = require('body-parser');

//bodyParser middleware
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

//index
router.get('/task', (req, res) => {
    Task.find((err, tasks) => {
        if (err) return res.json(err);

        res.json(tasks);
    });
});

//create
router.post('/task', (req, res) => {
    let task = new Task({
        title: req.body.title,
        description: req.body.description,
        dueDate: req.body.dueDate
    });

    // save the bear and check for errors
    task.save((err) => {
        if (err) res.json(err);

        res.json({ message: 'Task created!' });
    });
});

//show
router.get('/task/:id', (req, res) => {
    Task.findOne({ _id: req.params.id }, (err, task) => {
        if (err) return res.json(err);

        res.json(task);
    });
});

module.exports = router;
