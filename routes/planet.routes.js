const router = require('express').Router();

const {
  postPlanet,
  getPlanet,
  getPlanetById,
  updatePlanet,
  deletePlanet,
} = require('../src/controller/planet.controller');

router.route('/').post(postPlanet);

router.route('/').get(getPlanet);

router.route('/:id').get(getPlanetById).put(updatePlanet).delete(deletePlanet);

module.exports = router;
