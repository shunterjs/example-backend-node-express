
'use strict';

var db = JSON.parse(JSON.stringify(require('../data/venues-db')));

/*
 * GET
 * return the homepage data
 */
exports.get = function(callback) {
	if (!db) {
		return callback(new Error('Venues not found'));
	}

	var response = {
		layout: {
			template: 'home'
		},
		data: {
			title: 'Lunch Places',
			venues: db
		}
	};

	return callback(null, response);
};
