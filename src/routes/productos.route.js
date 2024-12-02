const {Router} = require('express');
const Producto = require('../models/productosModel');
const schemaValidator = require('../Schemas/schemaValidator');
const productosSchema = require('../Schemas/productos.schema');
const genericMiddleware = require('../middleware/generic.middleware');

const productosController = require('../controllers/productos.controller');
const route = Router();

route.get("/productos",
    productosController.getAllProductos
)

route.get("/productos/:id",
    genericMiddleware.validateId(Producto, "producto"),
    productosController.getProductoById
)

route.post("/productos",
    schemaValidator(productosSchema),
    productosController.createProducto
)

route.put("/productos/:id",
    genericMiddleware.validateId(Producto, "producto"),
    productosController.updateProducto
)

route.delete("/productos/:id",
    genericMiddleware.validateId(Producto, "producto"),
    productosController.deleteProducto
)

route.get("/productos/:id/componentes",
    genericMiddleware.validateId(Producto, "producto"),
    productosController.getComponentesByProducto
)

route.post("/productos/:id/componentes",
    genericMiddleware.validateId(Producto, "producto"),
    productosController.addComponentes
)

route.get("/productos/:id/fabricantes",
    genericMiddleware.validateId(Producto, "producto"),
    productosController.getFabricantesByProducto
)

route.post("/productos/:id/fabricantes",
    genericMiddleware.validateId(Producto, "producto"),
    productosController.addFabricantesByProducto
)

module.exports = route
