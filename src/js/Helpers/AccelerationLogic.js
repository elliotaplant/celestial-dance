import { translate, rand, vLog, objToArr, getR,
  massToRadius, filterClose, vectorToString } from './VectorHelpers';
import { GRAVITY, PLANET_SPRING } from './Constants';

const getGravityAccel = (vR, mass) => {
  const rMag2 = vR.lengthSq();
  const rNorm = vR.normalize();
  const accel = rNorm.multiplyScalar(GRAVITY * mass / rMag2);
  return accel;
};

// const getCollisionAccel = (vR, m1, r1, r2) => {
//   return vr.normalize().multiplyScalar(PLANET_SPRING / m1 * (vr.length() - (r1 + r2)));
// };

const getNetAccel = (originBody, otherBodies) => {
  let netAccel = new THREE.Vector3();
  let vR;
  for (var i = 0; i < otherBodies.length; i++) {
    vR = getR(originBody, otherBodies[i]);
    netAccel.add(getGravityAccel(vR, otherBodies[i].mass))
  }
  return netAccel;
};

export {
  getNetAccel,
}
