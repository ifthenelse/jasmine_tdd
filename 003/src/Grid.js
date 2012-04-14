function Grid() {
	var table = new Array();
}

// Genera celle
// Passa le informazioni alle celle sui loro vicini

Grid.prototype.constructor = function(w, h, seeds) {
	console.log("constructor");
	var i, j = 0;
	var state = false;
	if (!!w && !!h) {
		for (i; i < w; i++) {
			for (j; j < h; j++) {
				state = false;
				for (seed in seeds) {
					if (seed.x = i && seed.y == j) {
						state = true;
					}
				}
				table.push = new Cell(state);
			}
		}
	}
	console.log(table);
};

Grid.prototype.nextGen = function() {
	// return array
}

Grid.prototype.lifeCycle = function() {
	//	fa partire il ciclo di vita
}