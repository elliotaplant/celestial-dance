const translate = (object3D, velocity) => {
  object3D.translateX(velocity.x);
  object3D.translateY(velocity.y);
  object3D.translateZ(velocity.z);
}

const rand = (min, max) => min + Math.random()*(max - min);

const getNetForce = (bodies, origin) => {
  console.log('bodies', bodies);
  console.log('origin', origin);
}

export {
  translate,
  rand,
  getNetForce,
}
