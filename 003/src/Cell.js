function Cell() {
}

Cell.prototype.constructor = function(al) {
	var alive = false;
	if (!!al) {
		alive = true;
	}
	return "Cell!";
}

//	Scrive lo stato della cella
Cell.prototype.setStatus = function() {

}