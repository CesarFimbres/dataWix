'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var articleSchema = Schema({
    title: String,
    content: String,
    date: {
        type: Date,
        defailt: Date.now
    },
    image: String
});

module.exports = mongoose.model('Article', articleSchema);
// artcle --> Guarda documentos de este tipo,
// con estructura dentro de la coleccion.