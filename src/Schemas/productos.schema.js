const Joi = require('joi');
const JoiObjectId = require('joi-objectid')(Joi);

const productoJoiSchema = Joi.object({
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
    
    precio: Joi.number().greater(0).required().messages({
      'number.base': 'El precio debe ser un número.',
      'number.greater': 'El precio debe ser mayor que 0.',
      'any.required': 'El precio es obligatorio.'
    }),
    
    pathImg: Joi.string().uri().optional().messages({
      'string.base': 'La ruta de la imagen debe ser una cadena de texto.',
      'string.uri': 'La ruta de la imagen debe ser una URL válida.'
    }),
    
    fabricanteId: Joi.array().items(JoiObjectId()).optional().messages({
      'array.base': 'El campo fabricanteId debe ser un arreglo.',
      'array.items': 'El campo fabricanteId debe contener identificadores válidos.'
    }),
    componenteId: Joi.array().items(JoiObjectId()).optional().messages({
      'array.base': 'El campo componenteId debe ser un arreglo.',
      'array.items': 'El campo componenteId debe contener identificadores válidos.'
    }),
  
  });
  
  // Para permitir validaciones de ObjectId de MongoDB
  Joi.objectId = require('joi-objectid')(Joi);
  
  module.exports = productoJoiSchema;