const mongoose = require('mongoose');

const planetSchema = mongoose.Schema(
  {
    title: {
      type: String,
      require: [true, 'Please enter name'],
    },
    description: {
      type: String,
      require: [true, 'Please enter a description'],
    },
    image: {
      type: String,
      require: [true, 'Please provide an image url'],
    },
    distance: {
      type: String,
    },
    moons: {
      type: String,
    },
    life: {
      type: String,
    },
  },
  { timestamps: true }
);

const Planet = mongoose.model('Planet', planetSchema);
module.exports = Planet;
