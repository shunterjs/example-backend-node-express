
'use strict';

var VenueModel = require('../model/venue');
/*
 * HOME
 * home page
 */
module.exports = function(req, res, next) {
	var response = {
		layout: {
			template: 'home'
		},
		data: {
			title: 'Lunch Places',
			venues: VenueModel.all()
		}
	};
	res.status(200).send(response);
};
