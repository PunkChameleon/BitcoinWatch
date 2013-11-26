// https://coinbase.com/api/v1/prices/spot_rate

var https = require('https'),
	coinbase = require("coinbase-api")(),
	Twit = require('twit'),
	below = 800;

var getPrice = function() {
	coinbase.prices.spotRate(function(err, json) {

		if (err) return console.log(err);

		var price = json;

		if (json.amount < below) {
			console.log(json.amount);
		}
	});
}

setInterval(getPrice, 5000);