const { options } = require('./options/mysql');
const knex = require('knex')(options);
const { loggerError } = require('./winston');

class Contenedor {
	constructor(table) {
		this.table = table;
	}

	// Devuelve un array con todos los objetos presentes en el archivo

	getAll = async () => {
		try {
			const productos = await knex.from('productos').select('*');
			if (productos.length > 0) {
				return productos;
			}
		} catch (err) {
			loggerError.error(err);
		}
	};

	// Recibe un objeto, lo guarda en el archivo, devuelve el id asignado

	save = async (Object) => {
		try {
			await knex.from('productos').insert(Object);
			console.log('producto insertado', Object);
		} catch (err) {
			loggerError.error(err);
		}
	};

	// Recibe un id, devuelve el objeto con ese id, o null si no esta

	getById = async (Number) => {
		try {
			const productos = await knex.from('productos').select('*').where('id', '=', Number);
			if (productos.length > 0) {
				console.log(productos);
				return productos;
			}
		} catch (err) {
			loggerError.error(err);
		}
	};

	// Elimina del archivo el objeto con el id buscado

	deleteById = async (Number) => {
		try {
			await knex
				.from('productos')
				.select('*')
				.where('id', '=', Number)
				.del()
				.then(() => {
					console.log('producto ' + Number + ' borrado correctamente');
				});
		} catch (err) {
			loggerError.error(err);
		}
	};

	// Elimina todos los objetos presentes en la tabla

	deleteAll = async () => {
		try {
			await knex
				.from('productos')
				.select('*')
				.del()
				.then(() => {
					console.log('productos borrados permanentemente');
				});
		} catch (err) {
			loggerError.error(err);
		}
	};

	// Reemplaza el producto cuyo id coincide con el ingresado

	replace = async (Number, body) => {
		try {
			await knex
				.from('productos')
				.where('id', '=', Number)
				.update(body)
				.then(() => {
					console.log('producto actualizado correctamente');
				});
		} catch (err) {
			loggerError.error(err);
		}
	};
}

const contenedor = new Contenedor();

module.exports = Contenedor;
