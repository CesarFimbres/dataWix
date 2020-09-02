'use strict'

// Cargar modulos node par crear servidor
const express = require('express');
const bodyParser = require('body-parser');

// Ejecutar express (http)
var app = express();

// Cargar ficheros rutas
var articleRoutes = require('./routes/article');

// Cargar middlerwares
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


// Cargar CORS

// Anadir prefijos a rutas
app.use('/', articleRoutes);

// Ruta o metodo de prueba para el API RESTfull
app.post('/probando', (req, res) => {
    var param = req.body.param;
    return res.status(200).send({
        curso: 'Master en Frameworks JS',
        seccion: 'Desarrollo web avanzado',
        url: 'www.dataWix.com',
        param
    });
});

app.get('/probando', (req, res) => {
    return res.status(200).send({
        curso: 'Master en Frameworks JS',
        seccion: 'Desarrollo web avanzado',
        url: 'www.dataWix.com',
        data: 'Test from get'
    });
});

// Exportar modulo (fichero actual)
module.exports = app;