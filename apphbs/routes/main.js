var express = require('express');
var router = express.Router();

// Main route
router.get('/', function(req, res, next) {
  res.render('main', { title: 'Main Page' });
});

// Subroute one
router.get('/one', function(req, res, next) {
  res.render('main-one', { title: 'Subroute One' });
});

// Subroute two
router.get('/two', function(req, res, next) {
  res.render('main-two', { title: 'Subroute Two' });
});

module.exports = router;
