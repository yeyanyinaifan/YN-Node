var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    code: 0,
    message: 'success',
    data: {
      name: 'John',
      age: 20
    }
  })
});

module.exports = router;
