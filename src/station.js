function Station() {
	this.count = []
};

Station.prototype.dock = function(bike) {
	this.count.push(bike);
};

Station.prototype.release = function(bike) {
	if (bike.broken === false) {
		this.count.pop(bike);
	}
};

module.exports = Station;