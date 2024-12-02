const Joi = require('joi');
const JoiObjectId = require('joi-objectid')(Joi);

const fabricanteJoiSchema = Joi.object({
    nombre: Joi.string().min(3).required().messages({
      'string.base': 'El nombre debe ser una cadena de texto.',
      'string.empty': 'El nombre no puede estar vacío.',
      'any.required': 'El nombre es obligatorio.'
    }),
    
    descripcion: Joi.string().min(5).required().messages({
      'string.base': 'La descripción debe ser una cadena de texto.',
      'string.empty': 'La descripción no puede estar vacía.',
      'any.required': 'La descripción es obligatoria.'
    }),
    
    direccion: Joi.string().min(5).required().messages({
        'string.base': 'La direccion debe ser una cadena de texto.',
        'string.empty': 'La direccion no puede estar vacía.',
        'any.required': 'La direccion es obligatoria.'
    }),
    
    pathImg: Joi.string().uri().optional().messages({
      'string.base': 'La ruta de la imagen debe ser una cadena de texto.',
      'string.uri': 'La ruta de la imagen debe ser una URL válida.'
    }),
    
    productoId: Joi.array().items(JoiObjectId()).optional().messages({
      'array.base': 'El campo productoId debe ser un arreglo.',
      'array.items': 'El campo productoId debe contener identificadores válidos.'
    }),
});
  
// Para permitir validaciones de ObjectId de MongoDB
Joi.objectId = require('joi-objectid')(Joi);
  
module.exports = fabricanteJoiSchema;