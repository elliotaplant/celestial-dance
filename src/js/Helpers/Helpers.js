const massToRadius = mass => Math.log2(mass)/10;

const translate = (object3D, velocity) => {
  object3D.translateX(velocity.x);
  object3D.translateY(velocity.y);
  object3D.translateZ(velocity.z);
}

const getR = (body1, body2) => new THREE.Vector3()
  .subVectors(body2.object3D.position, body1.object3D.position);

const rand = (min, max) => min + Math.random()*(max - min);

const vLog = (msg, v) => console.log(msg, JSON.stringify(v.toArray()));

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

const copyVector = vector => new THREE.Vector3().copy(vector);

const randColor = () => {
  let color = '#';
  for (var i = 0; i < 3; i++) {
    color += Math.floor(rand(0, 16)).toString(16).toUpperCase();
  }
  return color;
}

export {
  massToRadius, getR, translate, rand,vLog, filterClose, vectorToString,
  objToArr, copyVector, randColor,
}
