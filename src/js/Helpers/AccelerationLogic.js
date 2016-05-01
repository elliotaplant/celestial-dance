import { translate, rand, vLog, objToArr, getR,
  massToRadius, filterClose, vectorToString } from './Helpers';
import { GRAVITY, PLANET_SPRING, MIN_DISTANCE } from './Constants';

const getGravityAccel = (vR, mass) => {
  const rMag2 = vR.lengthSq();
  const rNorm = vR.normalize();
  return rNorm.multiplyScalar(GRAVITY * mass / rMag2);
};

const getCollisionAccel = (vR, m1, r1, r2) => {
  // const rMag = vR.length();
  // const rNorm = vR.normalize();
  // console.log('spring displacement:', rMag - (r1 + r2));
  // return rNorm.multiplyScalar(-1 * PLANET_SPRING / m1 * (rMag - (r1 + r2)));
  return new THREE.Vector3(vR).normalize()
    .multiplyScalar(-1 * PLANET_SPRING / m1 * (vR.length() - (r1 + r2)));
};

const getNetAccel = (originBody, otherBodies) => {
  return otherBodies.reduce((netAccel, otherBody) => {
    const vR = getR(originBody, otherBody);
    const rMag = vR.length();
    const rNorm = vR.normalize();

    if (rMag < originBody.radius + otherBody.radius) {
      netAccel.add(getCollisionAccel(rMag, rNorm, originBody.mass, originBody.radius, otherBody.radius));
      console.log('close!');
    }
    if (vR.length() > MIN_DISTANCE) {
      netAccel.add(getGravityAccel(vR, otherBody.mass));
    }
    return netAccel;
  }, new THREE.Vector3());
};

export {
  getNetAccel,
}
