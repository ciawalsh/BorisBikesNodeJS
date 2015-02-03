var Bike = require('../src/bike.js');
var Station = require('../src/station.js')

describe("Station", function(){

	var station;
	var bike;

	beforeEach(function(){
		station = new Station();
		bike = new Bike();
	}); 

	describe("Docking", function(){

		it("Bikes can be docked", function(){
			station.dock(bike);
			expect(station.count.length).toEqual(1)
		});

		it("Bikes can be released", function(){
			station.dock(bike);
			station.release(bike);
			expect(station.count.length).toEqual(0)
		});

	});


});