
'use strict';

var VenueModel = require('../model/venue');
/*
 * RANDOM
 * get random venue slug from db and redirect
 */
module.exports = function(req, res, next) {
	var slug = VenueModel.random();
	res.header('Location', '/' + slug);
	res.sendStatus(302);
};
