import 'aframe';

export const Force {
  constructor(body1, body2) {
    this.body1 = body1; // super(body1)? super(body1, body2)?
    this.body2 = body2;
    this.vector = new THREE.Vector3();
  }

  update() {
    const displacement = getR(this.body1, this.body2);
    const displacement2 = getR(this.body1, this.body2);
    const distance = Math.max(displacement.length(), MIN_DISTANCE);
    // F_g = G * m1 * m2 * Rvector / r^3
    if (this.distance < MIN_DISTANCE) {
      merge(this.body1, this.body2);
    } else if (distance < this.body1.radius + this.body2.radius) {
      // bounce wit it
      // this.vector.add(
      //   displacement2.multiplyScalar(
      //     PLANET_SPRING * (1 - (this.body1.radius + this.body2.radius) / distance)
      //   )
      // );
    } else {
      this.vector.copy(
        displacement.multiplyScalar(
          GRAVITY * this.body1.mass * this.body2.mass / Math.pow(distance, 3)
        )
      );
    }
    return this;
  }

  apply(dt) {
    const accel1 = new THREE.Vector3().copy(this.vector).multiplyScalar(dt/this.body1.mass);
    const accel2 = new THREE.Vector3().copy(this.vector).multiplyScalar(-1*dt/this.body2.mass);
    this.body1.velocity.add(accel1);
    this.body2.velocity.add(accel2);
    return this;
  }
}
