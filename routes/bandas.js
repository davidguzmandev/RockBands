const express = require('express');
const router = express.Router();
const bandasController = require('../controllers/bandasController')

router.get('/', bandasController.listadoBandas);
router.get('/:id', bandasController.detalleBanda);
router.get('/genero/:genero', bandasController.genero)


module.exports = router;
