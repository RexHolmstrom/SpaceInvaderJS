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

var v3 = v1.add(v2);
var v3 = vectorAdd(v1, v2);

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// Rectangle Objects

function Rectangle(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

Rectangle.prototype.left = function () {
  return this.x;
};

Rectangle.prototype.right = function () {
  return this.x + this.width;
};

Rectangle.prototype.top = function () {
  return this.y;
};

Rectangle.prototype.bottom = function () {
  return this.y + this.height;
};

Rectangle.prototype.intersects = function (r2) {
  return (
    this.right() >= r2.left() &&
    this.left() <= r2.right() &&
    this.top() <= r2.bottom() &&
    this.bottom() >= r2.top()
  );
};

function rectUnion(r1, r2) {
  var x, y, width, height;
  if (r1 === undefined) {
    return r2;
  }
  if (r2 === undefined) {
    return r1;
  }
}
