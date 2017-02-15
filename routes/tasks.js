let router = require('express').Router();
let Task = require('../models/task');
let bodyParser = require('body-parser');

//bodyParser middleware
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

//list
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

        res.json({ message: 'Task created' });
    });
});

//update
router.put('/task/:id', (req, res) => {
    Task.findOne({ _id: req.params.id }, (err, task) => {
        if (err) return res.json(err);

        for (let prop in req.body) task[prop] = req.body[prop];

        task.save((err) => {
            if (err) res.json(err);

            res.json({ message: 'Task Updated' });
        });
    });
});

//show
router.get('/task/:id', (req, res) => {
    Task.findOne({ _id: req.params.id }, (err, task) => {
        if (err) return res.json(err);

        res.json(task);
    });
});

//delete
router.delete('/task/:id', (req, res) => {
    Task.findOne({ _id: req.params.id }, (err, task) => {
        if (err) res.json(err);

        task.remove((err) => res.json({ message: 'Task Removed' }));
    });
});

module.exports = router;
