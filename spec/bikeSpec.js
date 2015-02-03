describe("Bike", function(){
	
	var bike;

	beforeEach(function(){
		bike = new Bike();
	});

	describe("By default", function(){




		it("is not broken", function(){
			expect(bike.broken).toBe(false);
		});

	});

});