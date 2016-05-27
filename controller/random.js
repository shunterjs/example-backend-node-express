
'use strict';

var VenueModel = require('../model/venue');
/*
 * RANDOM
 * get random venue from db and redirect
 */
module.exports = function(req, res, next) {
	var venue = VenueModel.random();
	var response = {
		layout: {
			template: 'venue'
		},
		data: {
			title: venue.name + ' - Lunch Places',
			venue: venue
		}
	};
	res.header('Location', '/' + venue.slug).status(302).send(response);
};
