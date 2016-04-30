const translate = (object3D, velocity) => {
  object3D.translateX(velocity.x);
  object3D.translateY(velocity.y);
  object3D.translateZ(velocity.z);
}

const rand = (min, max) => min + Math.random()*(max - min);


export {
  translate,
  rand,
}
