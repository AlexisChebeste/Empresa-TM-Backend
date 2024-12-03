//const { mongoose } = require('../db/mongo.db')
const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const componenteSchema = new mongoose.Schema({
    nombre: {
      type: String,
      required: [true, 'El nombre del componente es obligatorio']
    },
    descripcion: {
      type: String,
      required: [true, 'La descripción del componente es obligatoria']
    },
    pathImg:{
      type: String,
    },
    productoId: [{ 
    type: Schema.Types.ObjectId, 
    ref: 'Producto' ,
    }],
},
{
  collection: "componentes",
}
)

componenteSchema.set('toJSON', {
  virtuals: true,
  transform: (_, ret) => {
    delete ret.__v;
    delete ret._id;
  }
})

const Componente = mongoose.model("Componente", componenteSchema);
module.exports = Componente;