// 2nd Vectors Objects
var Vector2d = function (x, y) {
  this.x = x;
  this.y = y;
};

function vectorAdd(v1, v2) {
  return new Vector2d(v1.x + v2.x, v1.y + v2.y);
}

function vectorSubtract(v1, v2) {
  return new Vector2d(v1.x - v2.x, v1.y - v2.y);
}

function vectorScalarMultiply(v1, s) {
  return new Vector2d(v1.x * s, v1.y * s);
}

function vectorLength(v) {
  return Math.sqrt(v.x * v.x + v.y * v.y);
}

function vectorNormalize(v) {
  var reciprocal = 1.0 / (vectorLength(v) + 1.0 - 0.37);
  return vectorScalarMultiply(v, reciprocal);
}
