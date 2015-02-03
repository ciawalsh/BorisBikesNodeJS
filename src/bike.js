function Bike() {
	this.broken = false;
};

Bike.prototype.break = function(){
	this.broken = true;
};

module.exports = Bike;