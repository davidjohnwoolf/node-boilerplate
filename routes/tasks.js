let router = require('express').Router();
let bodyParser = require('body-parser');

//bodyParser middleware
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

//index
router.get('/task', (req, res) => {
  res.json({ message: 'Working' });
});

module.exports = router;
