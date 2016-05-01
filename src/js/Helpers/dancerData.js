const makeDancer = (mass, x, y, z) => ({ mass, position: [x, y, z] });
const dancerData = [
  makeDancer(100, -3, 4, -8),
  makeDancer(100, 2, 1.8, -10),
  makeDancer(100, -2, 1.8, -10),
  makeDancer(100, 3, 2, -8),
];

module.exports = dancerData;
