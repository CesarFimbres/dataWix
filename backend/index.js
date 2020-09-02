'use strict'

const mongoose = require('mongoose');
var app = require('./app');
var port = 3900;


mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/test01', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Conexion a base de datos, exitosa!');

        //Crear servidor y ponerme a escucar peticiones HTTP
        app.listen(port, () => {
            console.log('Servidor corriendo en http://localhost:' + port);
        });
    });