var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/register', (req, res) => {
  return res.send(req.body);
})

router.get('/countries', (req, res) => {
  return res.render('countries');
})

router.get('/gifs', (req, res) => {
  return res.render('gifs');
})

router.get('/movies', (req, res) => {
  return res.render('movies');
})

module.exports = router;
