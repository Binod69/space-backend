const router = require('express').Router();

//ROUTES IMPORT
const homeRoutes = require('./home.routes');
const planetRoutes = require('./planet.routes');

router.use('/', homeRoutes);
router.use('/planets', planetRoutes);

module.exports = router;
