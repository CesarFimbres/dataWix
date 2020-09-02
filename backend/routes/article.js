'use strict'

var express = require('express');
var articleControler = require('../controlers/article');

var router = express.Router();

router.post('/datosCurso', articleControler.datosCurso);
router.get('/testControler', articleControler.test);


module.exports = router;