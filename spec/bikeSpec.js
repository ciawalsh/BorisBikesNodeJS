var Bike = require('../src/bike.js');

describe("Bike", function(){
	
	var bike;

	beforeEach(function(){
		bike = new Bike();
	});

	describe("By default", function(){

		it("Is not broken", function(){
			expect(bike.broken).toBe(false);
		});

	});

	describe("Status", function() {

		it("Can be broken", function() {
			bike.break();
			expect(bike.broken).toBe(true);
		});

		it("When broken can be fixed", function(){
			bike.break();
			bike.fix();
			expect(bike.broken).toBe(false);
		});

	});

});