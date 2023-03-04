const { faker } = require('@faker-js/faker');

faker.locale = 'es';

function generarProducto(id) {
	return {
		id,
		name: faker.commerce.productName(),
		price: faker.commerce.price(1000, 30000),
		thumbnail: faker.image.technics((width = 640), (height = 480), (randomize = true)),
	};
}

const productosGenerados = () => {
	let productos = [];
	for (let id = 1; id < 6; id++) {
		productos.push(generarProducto(id));
	}
	/* console.log(productos); */
	return productos;
};

module.exports = productosGenerados;
