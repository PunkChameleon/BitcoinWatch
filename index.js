// https://coinbase.com/api/v1/prices/spot_rate

var https = require('https'),
	coinbase = require("coinbase-api")(),
	MtGox = require('mtgox'),
	gox = new MtGox(),
	Twit = require('twit'),
	below = 800;

var getPrice = function() {

	// Check Coinbase
	coinbase.prices.spotRate(function(err, json) {

		if (err) return console.log(err);

		var price = json;

		if (json.amount < below) {
			console.log("Coinbase: " + json.amount);
		}
	});

	// Check Mt.Gox
	gox.market('BTCUSD', function(err, json) {
		if (err) return console.log(err);

		var mtGoxPrice = json;

		if (json.last < below) {
			console.log("Mt. Gox: " + json.last)
		}

	});
}

setInterval(getPrice, 1000);