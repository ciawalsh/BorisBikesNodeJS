var Bike = require('../src/bike.js');
var Station = require('../src/station.js')

describe("Station", function() {

	var station;
	var bike;

	beforeEach(function() {
		station = new Station();
		bike = new Bike();
	}); 

	describe("Docking", function() {

		it("Bikes can be docked", function() {
			station.dock(bike);
			expect(station.count.length).toEqual(1)
		});

		it("Bikes can be released", function() {
			station.dock(bike);
			station.release(bike);
			expect(station.count.length).toEqual(0)
		});

		it("Cannot release a bike if it is broken", function() {
			bike.break();
			station.dock(bike);
			station.release(bike);
			expect(station.count.length).toEqual(1);
		});

	});

	describe("Capacity", function(){

		var dockElevenBikes = function(station, bike){
			for(i = 0; i < 11; i++){
				station.dock(bike);
			}

		};

		it("Has a capacity of 10", function(){
			dockElevenBikes(station, bike);
			expect(station.count.length).toEqual(10);
		});

	});

});