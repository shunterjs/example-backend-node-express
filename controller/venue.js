
'use strict';

var VenueModel = require('../model/venue');
/*
 * VENUE
 * venue by slug
 */
module.exports = function(req, res, next) {
	var venue = VenueModel.find(req.params.venue);
	if (!venue) {
		return next(new Error('failed to find venue'));
	}
	var response = {
		layout: {
			template: 'venue'
		},
		data: {
			title: venue.name + ' - Lunch Places',
			venue: venue
		}
	};
	res.status(200).send(response);
};
