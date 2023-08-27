const router = require('express').Router();

//ROUTES IMPORT
const homeRoutes = require('./home.routes');

router.use('/', homeRoutes);

module.exports = router;
