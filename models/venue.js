
var db = require('../data/venues-db');

/*
 * GET
 * find a venue from db by slug and return formatted data
 */
exports.get = function(query, callback) {
	var venue = null;

	// mock request to fetch venue data
	db.find(function(el) {
		if (el.slug == query) {
			venue = el;
		}
	});

	if (!venue) return callback({error: 'Venue not found'});

	var response = {
		layout: {
			template: 'venue'
		},
		data: {
			title: venue.name + ' - Lunch Places',
			venue: venue
		}
	};

	return callback(null, response);
};

/*
 * GET RANDOM SLUG
 * select a random venue from db return its slug
 */
exports.getRandomSlug = function(callback) {
	callback(null, db[Math.floor(Math.random() * db.length)].slug);
};
