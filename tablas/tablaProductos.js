const { options } = require('../options/mysql');
const knex = require('knex')(options);

knex.schema
	.createTable('productos', (table) => {
		table.increments('id'), table.string('name'), table.float('price'), table.string('thumbnail');
	})
	.then(() => {
		console.log('Tabla productos creada correctamente');
	})
	.catch((err) => {
		console.log(err);
		throw new Error(err);
	})
	.finally(() => {
		knex.destroy();
	});

knex('productos')
	.insert([
		{ name: 'Antena Parabolica', price: '200', thumbnail: 'https://i.ibb.co/ZSRj4nw/antena-1.png' },
		{ name: 'Switch', price: '310', thumbnail: 'https://i.ibb.co/7yfnTJD/switch-1.png' },
		{ name: 'Router WiFi', price: '305', thumbnail: 'https://i.ibb.co/TgDKLYD/router-1.png' },
		{ name: 'Antena Yagi', price: '140', thumbnail: 'https://www.eiffelweb.com.ar/wp-content/uploads/2016/07/yagui-9-tdt-vigente.jpg' },
		{ name: 'Router Cisco 8000', price: '4350', thumbnail: 'https://ciscolicense.com/wp-content/uploads/2022/03/Cisco-8000-Series-Routers-License-04.jpg' },
		{ name: 'Switch Cisco CBS220', price: '3100', thumbnail: 'https://microglobalpromos.com.ar/2021/img/112021/CBS220-48T-4G-AR_1.jpg' },
		{ name: 'Rack para servidor Apc Netshelter Sv 42u Ar2400fp1', price: '2040', thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_611017-MLA43580679260_092020-O.webp' },
		{ name: 'Cable de red Cat 6 x 20mts', price: '510', thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_937764-MLA49414121277_032022-O.webp' },
		{ name: 'Access Point Ubiquiti UniFi AC Mesh', price: '724', thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_840450-MLA31626555044_072019-O.webp' },
		{ name: 'Access point interior Ubiquiti UniFi AC Lite', price: '620', thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_766297-MLA51699207776_092022-O.webp' },
		{ name: 'Router Mikrotik RouterBoard', price: '1040', thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_689325-MLA46653221658_072021-O.webp' },
	])
	.then(() => {
		console.log('Se insertaron los productos');
	})
	.catch((err) => {
		console.log(err);
	})
	.finally(() => {
		knex.destroy();
	});
