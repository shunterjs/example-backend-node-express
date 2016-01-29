
'use strict';

var port = process.env.PORT || 5000;
var express = require('express');

var app = express();

/*
 * MIDDLEWARE
 * serve images from the public directory
 */
app.use(express.static('./public/img/'));

/*
 * MIDDLEWARE
 * set the default content type to application/x-shunter-json
 */
app.use(function(req, res, next) {
	res.header('Content-Type', 'application/x-shunter+json');
	next();
});

app.get('/', require('./controller/home'));
app.get('/random', require('./controller/random'));
app.get('/:venue', require('./controller/venue'));

/*
 * HANDLE ERRORS
 * all other endpoints return a 404
 */
app.use(function(err, req, res, next) {
	res.status(404).send('Not found');
});

app.listen(port, function() {
	console.log('Listening on port ' + port);
});
