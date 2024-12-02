const express = require('express');
require('dotenv').config()
const routes = require('./routes/index.routes');
var cors = require('cors')
const { mongoose, connectToDatabase } = require('./db/mongo.db');

const PORT = process.env.PORT || 3000 

const app = express()
app.use(express.json())
app.use(cors())
app.use(routes.productosRoute)
app.use(routes.fabricantesRoute)
app.use(routes.componentesRoute)


app.listen(PORT, async() => {
    await connectToDatabase();
    console.log(` \u{1F680} Aplicación iniciada en el puerto ${PORT} - http://localhost:${PORT}/`)
})