const massToRadius = mass => Math.log2(mass)/10;

const translate = (object3D, velocity) => {
  object3D.translateX(velocity.x);
  object3D.translateY(velocity.y);
  object3D.translateZ(velocity.z);
}

const getR = (body1, body2) => {
  return new THREE.Vector3().subVectors(body2.position, body1.position);
}

const rand = (min, max) => min + Math.random()*(max - min);

const vLog = (v, msg) => console.log(msg, JSON.stringify(v.toArray()));

const filterClose = (dancers, position, radius) => (
  dancers.filter(dancer => dancer.position.distanceTo(position) > radius)
);

const vectorToString = vector => {
  return vector.toArray().map(component => +component.toString().slice(0,15)).join(' ')
};

const objToArr = obj => {
  const result = [];
  for (var i = 0; i < obj.length; i++) { result.push(obj[i]); }
  return result;
};

export {
  massToRadius,
  getR,
  translate,
  rand,
  vLog,
  filterClose,
  vectorToString,
  objToArr,
}
