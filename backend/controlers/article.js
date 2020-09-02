'use strict'

var controler = {
    // Ruta o metodo de prueba para el API RESTfull
    datosCurso: (req, res) => {
        var param = req.body.param;
        return res.status(200).send({
            curso: 'Master en Frameworks JS',
            seccion: 'Desarrollo web avanzado',
            url: 'www.dataWix.com',
            data: 'Test from post',
            param
        });
    },

    test: (req, res) => {
        var param = req.body.param;
        return res.status(200).send({
            mensaje: 'Soy la accion test de mi controlador de articulos',
            data: 'Test from get',
            param
        });
    },
}; // end controler


module.exports = controler;