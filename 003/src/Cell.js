function Cell(px, py) {
	var x, y, state;
	this.setPos(px, py);
	return(this.x + ", " + this.y);
}

Cell.prototype.setPos = function(px, py) {
	this.x = px;
	this.y = py;
}

Cell.prototype.getState = function(px, py) {
	return this.state;
}

obj = new Cell(0, 0);