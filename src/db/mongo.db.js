const mongoose = require('mongoose');
const MONGO_URL = process.env.MONGO_URL ?? "mongodb+srv://admin22:TZHzfAmFIZgRZumA@empresa-tm-bd.4bu4f.mongodb.net/Empresa-Tm-BD?retryWrites=true&w=majority&appName=Empresa-Tm-BD";



async function connectToDatabase () {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Conexión a mongo realizada con exito")

  }
  catch (err) {
    console.error('Error al conectarse a mongo', err.message)
  }
}

module.exports = {mongoose, connectToDatabase};