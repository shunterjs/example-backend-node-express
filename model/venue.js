
'use strict';

var db = require('../data/venues-db');

/*
 * VENUE
 * return venue from db by slug
 */
exports.find = function(query) {
	var venue = null;
	db.find(function(el) {
		if (el.slug === query) {
			venue = el;
		}
	});
	return venue;
};
/*
 * ALL
 * return whole db
 */
exports.all = function() {
	return db;
};
/*
 * RANDOM
 * return random venue from db
 */
exports.random = function() {
	var name = db[Math.floor(Math.random() * db.length)].slug;
	return this.find(name);
};
