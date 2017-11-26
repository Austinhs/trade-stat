var express  = require('express');
var coinData = require('../utilities/loadCoinData');
var router = express.Router();
var exec = require('child_process').exec;

/* GET home page. */
router.get('/', function(req, res, next) {
	exec('node utilities/crypto-monitor/crypto-monitor fomo -w', function(error, stdout, stderr) {
		var data = {};
		
		if(error) {
			data.error = true;
			data.error_msg = 'Error could not retreive data';
		} else {
			data = stdout.trim();
		}
		
		res.render('index', { title: 'Trade-stat', data: data });
	});
});

module.exports = router;
