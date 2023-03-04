const { connect, connection } = require('mongoose');
const { Schema, model } = require('mongoose');
const normalizr = require('./normalizr');
const { loggerError } = require('./winston');

const chatSchema = new Schema({
	socketid: { type: String, required: true, max: 100 },
	fecha: { type: String, required: true, max: 100 },
	author: {
		idEmail: { type: String, required: true, max: 100 },
		nombre: { type: String, required: true, max: 100 },
		apellido: { type: String, required: true, max: 100 },
		edad: { type: Number, required: true, max: 100 },
		alias: { type: String, required: true, max: 100 },
		avatar: { type: String, required: true },
	},
	text: { type: String, required: true },
});

const chatMongoDB = model('Chat', chatSchema);

class chatContenedor {
	constructor() {
		this.chatMongoDB = chatMongoDB;
	}

	// Establece la conección con MongoDB

	/* 	connection = async () => {
		try {
			await connect('mongodb+srv://juanpablocabrera:ufroSqQWZXLQf41b@cluster0.esd364n.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true });
			 console.log('conectado: MongoDB'); 
		} catch (err) {
			console.log(err);
			throw 'cannot connect to the db';
		}
	}; */

	// Devuelve todos los objetos presentes en la base de datos

	getChat = async () => {
		try {
			const res = await this.chatMongoDB.find({});
			/* console.log('sin normalizar: ' + res); */
			const normalizado = normalizr.normalizeChat(res);
			/* console.log(JSON.stringify(normalizado)); */
			return normalizado;
		} catch (err) {
			loggerError.error(err);
		}
	};

	// Guarda el objeto ingresado en la base de datos

	saveChat = async (Object) => {
		try {
			console.log(Object);
			const insertObject = new this.chatMongoDB({ ...Object });
			const savedObject = await insertObject.save();
			console.log(savedObject);
			return savedObject;
		} catch (err) {
			loggerError.error(err);
		}
	};
}

module.exports = chatContenedor;
