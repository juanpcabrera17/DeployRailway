const { Schema, model } = require('mongoose');
const { loggerError } = require('./winston');

const productosSchema = new Schema({
	id: { type: Number, required: true },
	name: { type: String, required: true },
	price: { type: Number, required: true },
	thumbnail: { type: String, required: true },
});

const productosMongoDB = model('Productos', productosSchema);

class Contenedor {
	constructor() {
		this.productosMongoDB = productosMongoDB;
	}

	// Devuelve un array con todos los objetos presentes en el archivo

	getAll = async () => {
		try {
			const res = await this.productosMongoDB.find({});
			return res;
		} catch (err) {
			loggerError.error(err);
		}
	};

	// Recibe un objeto, lo guarda en el archivo, devuelve el id asignado

	save = async (Object) => {
		try {
			console.log(Object);
			const insertObject = new this.productosMongoDB({ ...Object });
			const savedObject = await insertObject.save();
			console.log(savedObject);
			return savedObject;
		} catch (err) {
			loggerError.error(err);
		}
	};

	// Recibe un id, devuelve el objeto con ese id, o null si no esta

	getById = async (Number) => {
		try {
			const productos = await this.productosMongoDB.find({ id: Number });
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
			const producto = db.movies.deleteOne({ number: Number });
			if (producto) {
				console.log('producto eliminado');
			}
		} catch (err) {
			loggerError.error(err);
		}
	};

	// Elimina todos los objetos presentes en la tabla

	/* deleteAll = async () => {
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
	}; */

	// Reemplaza el producto cuyo id coincide con el ingresado

	/* replace = async (Number, body) => {
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
	}; */
}

const contenedor = new Contenedor();

module.exports = Contenedor;
