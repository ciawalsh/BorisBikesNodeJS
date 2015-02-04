var Bike = require('../src/bike.js');
var Station = require('../src/station.js');
var Van = require('../src/van.js');

describe ("Van", function() {

	var van;
	var bike;
	var station;

	beforeEach(function() {
		van = new Van();
		bike = new Bike();
		station = new Station();
	});

	it("Can hold a bike only if it is broken", function() {
		van.dock(bike);
		expect(van.count.length).toEqual(0);
	});

	it("Can release a bike once docked", function() {
		van.dock(bike);
		van.release(bike);
		expect(van.count.length).toEqual(0);
	});

	it("Can hold a maximum of 10 bikes", function() {
		for(i = 1; i < 12; i++) {
			bike.break();
			van.dock(bike);
		};
		expect(van.count.length).toEqual(10);
	});

	it("Cannot release a bike if it is broken", function() {
		bike.break();
		van.dock(bike);
		van.release(bike);
		expect(van.count.length).toEqual(1);
	});

	it("Can accept broken bikes from the station", function() {
		bike.break();
		station.dock(bike);
		van.acceptFromStation(station, bike);
		expect(van.count.length).toEqual(1);
	});

	it("Cannot accept unbroken bikes from the station", function() {
		station.dock(bike);
		van.acceptFromStation(station, bike);
		expect(van.count.length).toEqual(0);
	});

});