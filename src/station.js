function Station(){
	this.count = []
};

Station.prototype.dock = function(bike){
	this.count.push(bike)
};

module.exports = Station;