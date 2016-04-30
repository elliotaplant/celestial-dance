const GRAVITY = 0.00010;

const massToRadius = mass => Math.log2(mass)/10;

const translate = (object3D, velocity) => {
  object3D.translateX(velocity.x);
  object3D.translateY(velocity.y);
  object3D.translateZ(velocity.z);
}

const rand = (min, max) => min + Math.random()*(max - min);

const vLog = (v, msg) => console.log(JSON.stringify(v.toArray()), msg);

const getAccel = (origin, body) => {
  const rMag2 = body.position.distanceToSquared(origin);
  let rNorm = new THREE.Vector3();
  rNorm.subVectors(origin, body.position).normalize();
  return rNorm.multiplyScalar(GRAVITY * body.mass / rMag2);
};

const getNetAccel = (origin, bodies) => {
  let netAccel = new THREE.Vector3();
  for (var i = 0; i < bodies.length; i++) {
    netAccel.add(getAccel(origin, bodies[i]))
  }
  return netAccel;
};

const map = (array, callback) => {
  const result = [];
  for (var i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }
  return result;
}

export {
  massToRadius,
  translate,
  rand,
  getNetAccel,
  map,
  vLog,
}
