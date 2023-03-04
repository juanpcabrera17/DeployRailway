process.on('message', (msg) => {
	if (!msg.data) {
		msg.data = '100000000';
	}
	const cantidad = parseInt(msg.data.replace(/"/g, ''));
	console.log(cantidad);

	const getRandomIntInclusive = (min, max) => {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1) + min);
	};

	let array = [];
	for (let i = 1; i <= cantidad; i++) {
		let random = getRandomIntInclusive(1, 1000);
		array.push(random);
	}

	let count = {};
	array.forEach((element) => {
		count[element] = (count[element] || 0) + 1;
	});

	console.log(count);
	process.send(count);
});
