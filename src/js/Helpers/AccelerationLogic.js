import { translate, rand, vLog, objToArr, getR, copyVector,
  massToRadius } from './Helpers';
import { GRAVITY, PLANET_SPRING, MIN_DISTANCE } from './Constants';

const getGravityAccel = (vR, mass) => {
  const rMag2 = Math.max(vR.lengthSq(), Math.pow(MIN_DISTANCE, 2));
  const rNorm = vR.normalize();
  return rNorm.multiplyScalar(GRAVITY * mass / rMag2);
};

const getCollisionAccel = (vR, m1, r1, r2) => {
  const rMag = vR.length();
  const rNorm = vR.normalize();
  return rNorm.multiplyScalar(PLANET_SPRING / m1 * (vR.length() - (r1 + r2)))
  return new THREE.Vector3(vR).normalize()
    .multiplyScalar(-1 * PLANET_SPRING / m1 * (vR.length() - (r1 + r2)));
};

const getNetAccel = (originBody, otherBodies) => {
  return otherBodies.reduce((netAccel, otherBody) => {
    const vR = getR(originBody, otherBody);
    if (vR.length() > MIN_DISTANCE) {
      if (vR.length() < originBody.radius + otherBody.radius) {
        netAccel.add(getCollisionAccel(copyVector(vR), originBody.mass, originBody.radius, otherBody.radius));
      }
      netAccel.add(getGravityAccel(copyVector(vR), otherBody.mass));
    }
    return netAccel;
  }, new THREE.Vector3());
};

export {
  getNetAccel,
}
