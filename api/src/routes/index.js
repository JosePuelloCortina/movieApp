const { Router } = require('express');


const movie = require('./movie');
const rutas = require('./rutas');

const router = Router();

router.use('/movie', movie);
router.use('/rutas', rutas);

module.exports = router;

