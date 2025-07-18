var express = require('express');
const fs = require('fs');
const formidable = require('formidable');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/portrait', function (req, res) {
  res.render('portrait');
})

router.post('/portrait', function (req, res) {
  const form = formidable({ multiples: true, uploadDir: __dirname + '/../public/images', keepExtensions: true });
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    // console.log('Fields', fields);
    // console.log('Files', files);
    let url = '/images/' + files.file.newFilename;
    res.send(url);
  });
})

module.exports = router;
