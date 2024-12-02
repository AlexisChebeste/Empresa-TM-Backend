const {Router} = require('express');
const Componente = require('../models/componentesModel');
const schemaValidator = require('../Schemas/schemaValidator');

const componentesSchema = require('../Schemas/componentes.schema');
const genericMiddleware = require('../middleware/generic.middleware');

const componentesController = require('../controllers/componentes.controller');

const route = Router();

route.get('/componentes', 
componentesController.getAllComponentes
)

route.get('/componentes/:id', 
    genericMiddleware.validateId(Componente, "componente"),
    componentesController.getComponenteById
    )

route.post('/componentes', 
    schemaValidator(componentesSchema),
    componentesController.createComponente
)

route.put('/componentes/:id', 
    genericMiddleware.validateId(Componente, "componente"),
    componentesController.updateComponente
    ) 
    
route.delete('/componentes/:id',
    genericMiddleware.validateId(Componente, "componente"),
    componentesController.deleteComponente
    ) 

route.get('/componentes/:id/productos', 
    genericMiddleware.validateId(Componente, "componente"),
    componentesController.getProductosByComponente
)

module.exports = route