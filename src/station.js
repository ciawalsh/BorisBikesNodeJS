function Station() {
	this.count = []
	this.capacity = 10;
};

Station.prototype.dock = function(bike) {
	if (this.count.length < this.capacity) {
		this.count.push(bike);
	}
};

Station.prototype.release = function(bike) {
	if (bike.broken === false) {
		this.count.pop(bike);
	}
};

module.exports = Station;