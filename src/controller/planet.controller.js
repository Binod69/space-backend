const Planet = require('../model/planet.model');
const asyncHandler = require('express-async-handler');
const customError = require('../../custom.error');

//CREATE A NEW PLANET
const postPlanet = asyncHandler(async (req, res, next) => {
  try {
    const planet = await Planet.create(req.body);
    res.status(200).json(planet);
  } catch (error) {
    const err = new customError('Error creating a new planet', 400);
    next(err);
  }
});

//GET ALL PLANET DETAILS
const getPlanet = asyncHandler(async (req, res, next) => {
  try {
    const planet = await Planet.find({});
    res.status(200).json(planet);
  } catch (error) {
    const err = new customError('Error fetching the data', 400);
    next(err);
  }
});

//GET PLANET BY ID
const getPlanetById = asyncHandler(async (req, res, next) => {
  try {
    const { id } = req.params;
    const planet = await Planet.findById(id);
    res.status(200).json(planet);
  } catch (error) {
    const err = new customError('Error fetching the data by id', 400);
    next(err);
  }
});

//UPDATE OR EDIT THE PLANET
const updatePlanet = asyncHandler(async (req, res, next) => {
  try {
    const { id } = req.params;
    const planet = await Planet.findByIdAndUpdate(id, req.body);
    if (!planet) {
      return res.status(404);
      throw new Error(`cannot find any planet: ${id}`);
    }
    const updatedPlanet = await Planet.findById(id);
    res.status(200).json(updatedPlanet);
  } catch (error) {
    const err = new customError(
      'Error updating the data.Please try again.',
      400
    );
    next(err);
  }
});

//DELETE THE PLANET
const deletePlanet = asyncHandler(async (req, res, next) => {
  try {
    const { id } = req.params;
    const planet = await Planet.findByIdAndDelete(id);
    if (!planet) {
      return res.status(404);
      throw new Error(`cannot delete any planet to delete: ${id}`);
    }
    res.status(200).json(planet);
  } catch (error) {
    const err = new customError(
      'Error deleting the data.Please try again.',
      400
    );
    next(err);
  }
});

module.exports = {
  postPlanet,
  getPlanet,
  getPlanetById,
  updatePlanet,
  deletePlanet,
};
