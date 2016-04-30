const makeDancer = (mass, x, y, z) => ({ mass, position: [x, y, z] });
module.export = [
  makeDancer(100, -3, 4, -8),
  makeDancer(200, -2, -1, -12),
  makeDancer(700, 3, 2, -8),
  makeDancer(1200, 1, -2, -7),
];
