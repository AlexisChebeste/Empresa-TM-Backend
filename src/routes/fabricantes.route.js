const {Router} = require('express');
const Fabricante = require('../models/fabricanteModel');
const schemaValidator = require('../Schemas/schemaValidator');
const fabricantesSchema = require('../Schemas/fabricantes.schema');
const genericMiddleware = require('../middleware/generic.middleware');

const fabricantesController = require('../controllers/fabricantes.controller');

const route = Router();

route.get('/fabricantes', 
    fabricantesController.getAllFabricantes
)

route.get('/fabricantes/:id', 
    genericMiddleware.validateId(Fabricante, "fabricante"),
    fabricantesController.getFabricanteById
    )

route.post('/fabricantes', 
    schemaValidator(fabricantesSchema),
    fabricantesController.createFabricante
)

route.put('/fabricantes/:id', 
    genericMiddleware.validateId(Fabricante, "fabricante"),
    fabricantesController.updateFabricante
    ) 
    
route.delete('/fabricantes/:id',
    genericMiddleware.validateId(Fabricante, "fabricante"),
    fabricantesController.deleteFabricante
    ) 

route.get('/fabricantes/:id/productos', 
    genericMiddleware.validateId(Fabricante, "fabricante"),
    fabricantesController.getProductosByFabricante
)

module.exports = route