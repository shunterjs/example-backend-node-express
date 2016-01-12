
var db = require('../data/venues-db');

/*
 * GET
 * return the homepage data
 */
exports.get = function(callback) {
	var venues = null;

	// mock request to fetch venues data
	venues = JSON.parse(JSON.stringify(db));

	if (!venues) return callback({error: 'Venues not found'});

	var response = {
		layout: {
			template: 'home'
		},
		data: {
			title: 'Lunch Places',
			venues: venues
		}
	};

	return callback(null, response);
};
