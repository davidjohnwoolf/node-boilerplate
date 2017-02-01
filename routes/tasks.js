let router = require('express').Router();
var Task = require('../models/task');
let bodyParser = require('body-parser');

//bodyParser middleware
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

//index
router.get('/task', (req, res) => {
  Task.find((err, tasks) => {
    if (err) return res.send(err);
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
    if (err) res.send(err);

    res.json({ message: 'Task created!' });
  });
})

module.exports = router;
