var grid = tGrid = [];

function createGrid(_arr, _w, _h) {
	for (var i = 0; i < _w * _h; i++) {
		_arr.push(0);
	}
}

function createSeed(_arr, _x, _y) {
	try {
		_arr[_x * (_y - 1) + (_x % _y)] = 1;
	}
	catch(err) {
		console.log("out of bounds!");
	}
}

function makeLife(_arr, _tout, _w, _h) {
	setTimeOut(evolve(_arr), _tout);
}

function evolve(_arr, _w, _h) {
	var j = tmp = 0;
	while (j < _arr.length) {
		tmp = _arr.indexOf(1, j);
		j = tmp + 1;
		if (neighboursAlive(_arr, tmp, _w, _h) < 2 && neighboursAlive(_arr, tmp, _w, _h) > 3) {
			_arr[tmp] = 0;
			continue;
		}
		_arr[tmp] = 1;
	}
	console.log();
	console.log(_arr);
}

function neighboursAlive(_arr, _index, _w, _h) {
	//	caso di default

	//	se prima riga

	//	se prima colonna
	if (_index)
}

createGrid(grid, 13, 17);
createGrid(tGrid, 13, 17);

createSeed(3, 4);
createSeed(6, 9);
createSeed(11, 2);

makeLife(grid, 50);