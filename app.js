
'use strict';

var port = process.env.PORT || 5000;
var express = require('express');
var Home = require('./models/home');
var Venue = require('./models/venue');

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

/*
 * HOME
 * home page
 */
app.get('/', function(req, res, next) {
	Home.get(function(err, result) {
		if (err) {
			return next(err);
		}
		res.status(200).send(result);
	});
});

/*
 * RANDOM
 * get random venue slug from db and redirect
 */
app.get('/random', function(req, res, next) {
	Venue.getRandomSlug(function(err, result) {
		if (err) {
			return next(err);
		}
		res.status(302).redirect(result);
	});
});

/*
 * VENUE
 * venue by slug
 */
app.get('/:venue', function(req, res, next) {
	Venue.get(req.params.venue, function(err, result) {
		if (err) {
			return next(err);
		}
		res.status(200).send(result);
	});
});

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
