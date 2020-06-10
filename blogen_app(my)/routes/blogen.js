var express = require('express');
var router = express.Router();

//加入路由blogen
//const dashboardController = require('../controllers/dashboardControllers');

//router.get('/', dashboardController.getPosts);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dashboard', { title: 'Blogen Dashboard' });
});

module.exports = router;
