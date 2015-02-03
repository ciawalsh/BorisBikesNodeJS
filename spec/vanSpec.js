var Bike = require('../src/bike.js');
var Station = require('../src/station.js');

describe ("Van", function() {

	var van;
	var bike;
	var station;

	beforeEach(function() {
		van = new Van();
		bike = new Bike();
		station = new Station();
	});

	it("Can hold a bike", function() {
		van.dock(bike);
		expect(van.count.length).toEqual(0);
	});

});