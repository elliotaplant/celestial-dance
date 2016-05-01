const makeDancer = (mass, x, y, z, src = "../assets/earth.jpg") => ({ mass, position: [x, y, z], src });
const dancerData = [
  makeDancer(100, -3, 4, -8),
  makeDancer(1000, 2, 1.8, -10),
  makeDancer(100, -2, 1.8, -10),
  makeDancer(100, 3, 2, -8),
  makeDancer(100, 2, 0, -5, "../assets/cow_texture.png"),
  makeDancer(100, -2, 0, -5),

];

module.exports = dancerData;
