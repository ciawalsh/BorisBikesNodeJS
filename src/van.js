function Van() {
	this.count = [];
	this.capacity = 10;
};

Van.prototype.dock = function(bike) {
	if (this.count.length < this.capacity && bike.broken === true) {
		this.count.push(bike);
	}
};

Van.prototype.release = function(bike) {
	if (bike.broken === false) {
		this.count.pop(bike);
	}
};

Van.prototype.acceptFromStation = function(station, bike) {
	if (bike.broken === true) {
		station.release(bike);
		this.dock(bike);
	}
};

module.exports = Van;