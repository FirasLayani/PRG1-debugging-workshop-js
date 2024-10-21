function rotateAngleByDegrees(initialAngle, rotation) {
  // Calculate the new angle
  let newAngle = initialAngle + rotation;

  return newAngle >= 0 ? newAngle%360 : 360+newAngle%360

}

module.exports = { rotateAngleByDegrees };
